import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AudioUploader } from './components/audio-uploader.js';
import { AudioRecorder } from './components/audio-recorder.js';
import { HeatmapChart } from './components/heatmap-chart.js';
import { processAudioToHeatmap, HeatmapData } from './lib/fft-processor.js';

@customElement('modspotter-app')
export class ModspotterApp extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem;
    }

    h1 {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
      font-weight: 600;
    }

    .input-section {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }

    .input-card {
      background: #f5f5f5;
      border-radius: 8px;
      padding: 1rem;
      flex: 1;
      min-width: 280px;
    }

    .input-card h2 {
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .chart-section {
      background: #fafafa;
      border-radius: 8px;
      padding: 1rem;
      min-height: 600px;
    }

    .status {
      padding: 0.75rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .status.processing {
      background: #fff3cd;
      color: #856404;
    }

    .status.error {
      background: #f8d7da;
      color: #721c24;
    }

    .status.success {
      background: #d4edda;
      color: #155724;
    }
  `;

  // Use light DOM
  override createRenderRoot() {
    return this;
  }

  @state() private heatmapData: HeatmapData | null = null;
  @state() private status: string = '';
  @state() private statusType: 'processing' | 'error' | 'success' | '' = '';
  @state() private isProcessing: boolean = false;

  private handleAudioLoaded = async (audioData: Float32Array, sampleRate: number) => {
    this.status = 'Processing audio with TensorFlow.js...';
    this.statusType = 'processing';
    this.isProcessing = true;
    this.heatmapData = null;

    try {
      const result = await processAudioToHeatmap(audioData, sampleRate);
      this.heatmapData = result;
      this.status = 'Complete!';
      this.statusType = 'success';
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      this.status = `Error: ${msg}`;
      this.statusType = 'error';
      console.error(err);
    } finally {
      this.isProcessing = false;
    }
  };

  private handleError = (err: string) => {
    this.status = err;
    this.statusType = 'error';
  };

  override render() {
    return html`
      <h1>ModSpotter - Find Modulated Signals</h1>
      
      ${this.status ? html`
        <div class="status ${this.statusType}">${this.status}</div>
      ` : ''}

      <div class="input-section">
        <div class="input-card">
          <h2>Upload Audio File</h2>
          <audio-uploader
            @audio-loaded="${this.handleAudioLoaded}"
            @error="${this.handleError}"
            ?disabled="${this.isProcessing}"
          ></audio-uploader>
        </div>
        <div class="input-card">
          <h2>Record Audio</h2>
          <audio-recorder
            @audio-loaded="${this.handleAudioLoaded}"
            @error="${this.handleError}"
            ?disabled="${this.isProcessing}"
          ></audio-recorder>
        </div>
      </div>

      <div class="chart-section">
        <heatmap-chart
          .data="${this.heatmapData}"
          ?loading="${this.isProcessing}"
        ></heatmap-chart>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'modspotter-app': ModspotterApp;
  }
}