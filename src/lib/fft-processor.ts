import * as tf from '@tensorflow/tfjs';

export interface HeatmapData {
  zValues: number[][];
  carrierFreqs: number[];
  modulatorFreqs: number[];
  sampleRate: number;
}

// Processing parameters
const FFT1 = 256;
const FFT1_OVERLAP = 8;
const LOMB_RES = 512;
const MAX_AUDIO_LENGTH = 44100 * 240;

/**
 * Generate Hanning window as plain array
 */
function hanningWindow(size: number): number[] {
  const window: number[] = [];
  for (let i = 0; i < size; i++) {
    window.push(0.5 * (1 - Math.cos(2 * Math.PI * i / (size - 1))));
  }
  return window;
}

/**
 * Compute next power of 2
 */
function nextPowerOf2(n: number): number {
  return Math.pow(2, Math.ceil(Math.log2(n)));
}

/**
 * Main processing pipeline - process in batches to avoid GPU memory issues
 */
export async function processAudioToHeatmap(
  audioData: Float32Array,
  sampleRate: number
): Promise<HeatmapData> {
  // Limit audio length to avoid GPU memory issues
  let audio = audioData;
  if (audio.length > MAX_AUDIO_LENGTH) {
    audio = audio.slice(0, MAX_AUDIO_LENGTH);
  }

  const audioTensor = tf.tensor1d(audio, 'float32');
  const audioLength = audio.length;
  const hanningWin = hanningWindow(FFT1);

  // Debug: check Hanning window
  console.log('Hanning window:', hanningWin.slice(0, 10));

  try {
    // Step 1: Create overlapping FFT segments with Hanning window
    const numWindows = Math.floor(audioLength / FFT1);

    // Process in batches to save GPU memory
    const BATCH_SIZE = 64;
    const allFFTs: number[][] = [];

    for (let batchStart = 0; batchStart < numWindows; batchStart += BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, numWindows);
      const batchSegments: tf.Tensor[] = [];

      for (let i = batchStart; i < batchEnd; i++) {
        for (let o = 0; o < FFT1_OVERLAP; o++) {
          const offset = (o / FFT1_OVERLAP) * FFT1;
          const start = Math.floor((i + offset) * FFT1);
          const end = start + FFT1;

          if (end <= audioLength) {
            const segment = audioTensor.slice([start], [FFT1]);
            
            // Apply Hanning window manually (element-wise multiply)
            const windowed = segment.mul(tf.tensor1d(hanningWin, 'float32'));
            
            // Debug: check first segment
            if (i === batchStart && o === 0) {
              const segArray = segment.arraySync() as Float32Array;
              const winArray = windowed.arraySync() as Float32Array;
              console.log('First segment:', segArray.slice(0, 10));
              console.log('First windowed:', winArray.slice(0, 10));
            }
            
            batchSegments.push(windowed);
          }
        }
      }

      if (batchSegments.length > 0) {
        const segmentsTensor = tf.stack(batchSegments);
        
        // Debug: check stacked tensor
        if (batchStart === 0) {
          console.log('Stacked tensor shape:', segmentsTensor.shape);
        }
        
        const fftResult = tf.abs(tf.spectral.rfft(segmentsTensor));

        // Debug: check FFT output
        const fftArray = fftResult.arraySync() as number[][];
        if (batchStart === 0) {
          console.log('First FFT batch:', fftArray[0]?.slice(0, 10));
        }
        
        allFFTs.push(...fftArray);

        // Explicit cleanup
        segmentsTensor.dispose();
        fftResult.dispose();
        batchSegments.forEach(t => t.dispose());
      }
    }

    if (allFFTs.length === 0) {
      return createEmptyResult(sampleRate);
    }

    // Step 3: Average overlapping FFTs
    const numAveraged = Math.floor(allFFTs.length / FFT1_OVERLAP);
    const averagedFFTs: number[][] = [];

    for (let i = 0; i < numAveraged; i++) {
      let sum: number[] = new Array(allFFTs[0].length).fill(0);
      for (let o = 0; o < FFT1_OVERLAP; o++) {
        const idx = i * FFT1_OVERLAP + o;
        if (idx < allFFTs.length) {
          for (let j = 0; j < sum.length; j++) {
            sum[j] += allFFTs[idx][j];
          }
        }
      }
      averagedFFTs.push(sum.map(v => v / FFT1_OVERLAP));
    }

    const numTimeSteps = numAveraged;
    const numBins = averagedFFTs[0].length;

    // Step 4: For each frequency bin, subtract the average (CPU)
    const binAverages = new Array(numBins).fill(0);
    for (let i = 0; i < numTimeSteps; i++) {
      for (let j = 0; j < numBins; j++) {
        binAverages[j] += averagedFFTs[i][j];
      }
    }
    binAverages.forEach((v, j) => binAverages[j] = v / numTimeSteps);

    // Debug: check averagedFFTs and binAverages
    console.log('Averaged FFTs[0]:', averagedFFTs[0]?.slice(0, 10));
    console.log('Bin averages:', binAverages.slice(0, 10));

    const normalizedFFTs: number[][] = [];
    for (let i = 0; i < numTimeSteps; i++) {
      const normalized: number[] = [];
      for (let j = 0; j < numBins; j++) {
        normalized.push(averagedFFTs[i][j] - binAverages[j]);
      }
      normalizedFFTs.push(normalized);
    }

    console.log('Normalized FFTs[0]:', normalizedFFTs[0]?.slice(0, 10));

    // Step 5: For each bin, do FFT across time (with padding)
    const paddedLength = nextPowerOf2(numTimeSteps);
    const binSampleRate = sampleRate / FFT1;
    const allBinFFTs: number[][] = [];

    for (let bin = 0; bin < numBins; bin++) {
      // Extract this bin's time series (CPU)
      const binSeries = normalizedFFTs.map(row => row[bin]);

      // Debug: check bin series
      if (bin === 0) {
        console.log('Bin series:', binSeries.slice(0, 10), 'length:', binSeries.length);
      }

      // Pad to next power of 2
      const paddedSeries = [...binSeries];
      while (paddedSeries.length < paddedLength) {
        paddedSeries.push(0);
      }

      // Debug: check padded series
      if (bin === 0) {
        console.log('Padded series:', paddedSeries.slice(0, 10), 'length:', paddedSeries.length);
      }

      // Apply Hanning window
      const windowedSeries = paddedSeries.map((v, i) =>
        v * (0.5 * (1 - Math.cos(2 * Math.PI * i / (paddedLength - 1))))
      );

      // Compute FFT using TF.js
      const seriesTensor = tf.tensor1d(windowedSeries, 'float32');
      const fftComplex = tf.spectral.rfft(seriesTensor);
      const binFFT = tf.abs(fftComplex);
      const binFFTArray = binFFT.arraySync() as number[];

      // Debug: check first bin FFT
      if (bin === 0) {
        console.log('First bin FFT:', binFFTArray.slice(0, 10), 'length:', binFFTArray.length);
      }

      allBinFFTs.push(binFFTArray);

      seriesTensor.dispose();
      fftComplex.dispose();
      binFFT.dispose();
    }

    const outputLength = Math.min(LOMB_RES, Math.floor(paddedLength / 2) + 1);

    // Take only first LOMB_RES frequencies
    const resultData: number[][] = [];
    for (let bin = 0; bin < numBins; bin++) {
      resultData.push(allBinFFTs[bin].slice(0, outputLength));
    }

    // Debug: check raw FFT values
    let rawSum = 0;
    let rawCount = 0;
    let rawMin = Infinity;
    let rawMax = -Infinity;
    for (const row of resultData) {
      for (const v of row) {
        if (isFinite(v)) {
          rawSum += v;
          rawCount++;
          rawMin = Math.min(rawMin, v);
          rawMax = Math.max(rawMax, v);
        }
      }
    }
    console.log('Raw FFT:', { rawMin, rawMax, rawAvg: rawCount > 0 ? rawSum / rawCount : 0, rawCount });

    // Step 6: Normalize - skip percentile clipping for now
    // Filter out NaN/Inf values first
    const validResults = resultData.map(row => row.map(v => isNaN(v) || !isFinite(v) ? 0 : Math.abs(v)));

    // Find min/max for normalization
    let dataMin = Infinity;
    let dataMax = -Infinity;
    for (const row of validResults) {
      for (const v of row) {
        dataMin = Math.min(dataMin, v);
        dataMax = Math.max(dataMax, v);
      }
    }
    
    console.log('Data range:', { dataMin, dataMax, range: dataMax - dataMin });

    // Apply log and normalize
    let logMin = Infinity;
    let logMax = -Infinity;
    const logData: number[][] = [];

    for (let i = 0; i < validResults.length; i++) {
      const logRow: number[] = [];
      for (let j = 0; j < validResults[i].length; j++) {
        const val = validResults[i][j];
        const logVal = Math.log(val + 1e-10);
        logRow.push(logVal);
        logMin = Math.min(logMin, logVal);
        logMax = Math.max(logMax, logVal);
      }
      logData.push(logRow);
    }

    console.log('Log range:', { logMin, logMax, logRange: logMax - logMin });

    // Handle edge case where logMin == logMax
    if (!isFinite(logMin) || !isFinite(logMax) || logMax === logMin) {
      logMin = 0;
      logMax = 1;
    }

    // Normalize to [0, 1]
    const normalized: number[][] = [];
    for (let i = 0; i < logData.length; i++) {
      const row: number[] = [];
      for (let j = 0; j < logData[i].length; j++) {
        const norm = (logData[i][j] - logMin) / (logMax - logMin);
        row.push(isNaN(norm) ? 0 : norm);
      }
      normalized.push(row);
    }

    // Generate frequency arrays
    const carrierFreqs: number[] = [];
    for (let i = 0; i < numBins; i++) {
      carrierFreqs.push((i / numBins) * (sampleRate / 2));
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
      zValues: normalized.reverse(),
      carrierFreqs: carrierFreqs.reverse(),
      modulatorFreqs,
      sampleRate
    };
  } finally {
    // Cleanup
    audioTensor.dispose();
  }
}

function createEmptyResult(sampleRate: number): HeatmapData {
  return {
    zValues: [[0]],
    carrierFreqs: [0],
    modulatorFreqs: [0],
    sampleRate
  };
}
