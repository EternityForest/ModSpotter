import * as tf from '@tensorflow/tfjs';

export interface HeatmapData {
  zValues: number[][];
  carrierFreqs: number[];
  modulatorFreqs: number[];
  sampleRate: number;
}

// Processing parameters (matching redbat.py)
const FFT1 = 256;
const FFT1_OVERLAP = 8;
const LOMB_RES = 512;

/**
 * Generate Hanning window tensor
 */
function hanningWindow(size: number): tf.Tensor {
  // Hanning window: 0.5 * (1 - cos(2*pi*n / (N-1)))
  const n = tf.range(0, size, 1, 'float32');
  const window = 0.5 * (1 - tf.cos(2 * Math.PI * n / (size - 1)));
  return window;
}

/**
 * Compute next power of 2
 */
function nextPowerOf2(n: number): number {
  return Math.pow(2, Math.ceil(Math.log2(n)));
}

/**
 * Perform batch 1D FFT using TF.js
 * For real input, uses rfft for efficiency
 */
function batchRfft(tensor: tf.Tensor): tf.Tensor {
  // tf.signal is not available in all TF.js versions, so we use math ops
  // This is a simplified version - for production, consider tf.signal.rfft
  return tf.spectral.rfft(tensor);
}

/**
 * Main processing pipeline - runs entirely in TF.js for GPU acceleration
 */
export async function processAudioToHeatmap(
  audioData: Float32Array,
  sampleRate: number
): Promise<HeatmapData> {
  return tf.tidy(() => {
    // Convert input to tensor
    const audio = tf.tensor1d(audioData, 'float32');
    const audioLength = audioData.length;

    // Step 1: Create overlapping FFT segments
    // Hanning window
    const window = hanningWindow(FFT1);

    // Calculate number of complete windows
    const numWindows = Math.floor(audioLength / FFT1);

    // Create overlapping segments as a 2D tensor [segments, FFT1]
    const segments: tf.Tensor[] = [];

    for (let i = 0; i < numWindows; i++) {
      for (let o = 0; o < FFT1_OVERLAP; o++) {
        const offset = (o / FFT1_OVERLAP) * FFT1;
        const start = Math.floor((i + offset) * FFT1);
        const end = start + FFT1;

        if (end <= audioLength) {
          const segment = audio.slice([start], [FFT1]);
          // Apply Hanning window
          const windowed = segment.mul(window);
          segments.push(windowed);
        }
      }
    }

    // Stack all segments: [totalSegments, FFT1]
    const segmentsTensor = tf.stack(segments);

    // Step 2: Compute FFT for each segment and take magnitude
    // [totalSegments, FFT1/2+1]
    const fftResult = tf.abs(tf.spectral.rfft(segmentsTensor));

    // Step 3: Average overlapping FFTs to produce shorter list
    // Group by FFT1_OVERLAP and average
    const numAveraged = Math.floor(segments.length / FFT1_OVERLAP);
    const averagedFFTs: tf.Tensor[] = [];

    for (let i = 0; i < numAveraged; i++) {
      const group = fftTensor.slice([i * FFT1_OVERLAP], [FFT1_OVERLAP]);
      const avg = group.mean(0);
      averagedFFTs.push(avg);
    }

    const averagedTensor = tf.stack(averagedFFTs); // [numAveraged, FFT1/2+1]
    const numTimeSteps = numAveraged;
    const numBins = Math.floor(FFT1 / 2) + 1;

    // Step 4: For each frequency bin, subtract the average of that bin across time
    // This removes the carrier wave, leaving only modulation
    const binAverages = averagedTensor.mean(0); // [numBins]
    const binAveragesExpanded = binAverages.reshape([1, numBins]);
    const normalizedTensor = averagedTensor.sub(binAveragesExpanded); // [numTimeSteps, numBins]

    // Transpose to get [numBins, numTimeSteps] - each row is one bin's time series
    const binsTensor = normalizedTensor.transpose();

    // Step 5: For each bin, do FFT across time (with padding to power of 2)
    const paddedLength = nextPowerOf2(numTimeSteps);
    const binSampleRate = sampleRate / FFT1;

    // Process bins in batches for memory efficiency
    const numFreqBins = Math.floor(FFT1 / 2) + 1;
    const allBinFFTs: tf.Tensor[] = [];

    for (let bin = 0; bin < numFreqBins; bin++) {
      // Extract this bin's time series
      const binSeries = binsTensor.slice([bin, 0], [1, numTimeSteps]).reshape([numTimeSteps]);

      // Pad to next power of 2
      const paddedSeries = tf.concat([
        binSeries,
        tf.zeros([paddedLength - numTimeSteps], 'float32')
      ]);

      // Apply Hanning window to the padded series
      const paddedWindow = hanningWindow(paddedLength);
      const windowedSeries = paddedSeries.mul(paddedWindow);

      // Compute FFT (magnitude)
      const binFFT = tf.abs(tf.spectral.rfft(windowedSeries.reshape([1, paddedLength])));
      const binFFT1D = binFFT.reshape([Math.floor(paddedLength / 2) + 1]);

      allBinFFTs.push(binFFT1D);
    }

    // Stack all bin FFTs: [numFreqBins, FFT_OUTPUT]
    const allBinsStacked = tf.stack(allBinFFTs);

    // Take only first LOMB_RES frequencies for each bin
    const outputLength = Math.min(LOMB_RES, Math.floor(paddedLength / 2) + 1);
    const resultTensor = allBinsStacked.slice([0, 0], [numFreqBins, outputLength]);

    // Step 6: Clip to percentile range (20th to 99.995th)
    // Use topK for percentile computation (more compatible with TF.js)
    const flatResult = resultTensor.reshape([-1]);
    const n = numFreqBins * outputLength;

    // Get indices for 20th and 99.995th percentiles
    const p20Idx = Math.floor(n * 0.2);
    const p99995Idx = Math.floor(n * 0.99995);

    // Use topK to find percentile values
    const { values: sortedVals } = tf.topk(flatResult, n, true);
    const minVal = sortedVals.slice([p20Idx], [1]).reshape([]) as tf.Scalar;
    const maxVal = sortedVals.slice([p99995Idx], [1]).reshape([]) as tf.Scalar;

    const clipped = tf.maximum(resultTensor, minVal);
    const clipped2 = tf.minimum(clipped, maxVal);

    // Normalize to [0, 1] with log scale
    const logResult = tf.log(clipped2.add(1e-10));
    const logMin = tf.min(logResult);
    const logMax = tf.max(logResult);
    const normalized = logResult.sub(logMin).div(logMax.sub(logMin).add(1e-10));

    // Convert to JavaScript arrays
    const zValues: number[][] = normalized.arraySync() as number[][];

    // Generate frequency arrays
    const carrierFreqs: number[] = [];
    for (let i = 0; i < numFreqBins; i++) {
      carrierFreqs.push((i / numFreqBins) * (sampleRate / 2));
    }

    const modulatorFreqs: number[] = [];
    const radShzConv = 0.1591549;
    for (let i = 0; i < outputLength; i++) {
      if (i === 0) {
        modulatorFreqs.push(0);
      } else {
        modulatorFreqs.push(
          ((i / (outputLength - 1)) * (binSampleRate / 2)) / radShzConv
        );
      }
    }

    return {
      zValues: zValues.reverse(), // Reverse so carrier freq goes from low to high
      carrierFreqs: carrierFreqs.reverse(),
      modulatorFreqs,
      sampleRate
    };
  });
}