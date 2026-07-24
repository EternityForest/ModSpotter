import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Plotly from 'plotly.js-dist-min';
import type { HeatmapData } from '../lib/fft-processor.js';

// Configure Plotly to use light DOM
Plotly.newPlot = function(
  gd: HTMLElement | string,
  data: Plotly.Data[],
  layout?: Partial<Plotly.Layout>,
  config?: Partial<Plotly.Config>
): Promise<Plotly.Figure> {
  const graphDiv = typeof gd === 'string' ? document.getElementById(gd) : gd;
  if (!graphDiv) {
    return Promise.reject(new Error('No graph div'));
  }
  // Use light DOM
  (graphDiv as any)._context = { ...(graphDiv as any)._context, 
    useWorker: false, 
    useCors: true,
    credentials: 'same-origin'
  };
  
  return Plotly.react(gd, data, layout, config);
};

// Guard against double-registration (HMR)
if (!customElements.get('heatmap-chart')) {
  @customElement('heatmap-chart')
  export class HeatmapChart extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .chart-container {
      width: 100%;
      height: 600px;
      background: white;
      border-radius: 4px;
    }

    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 600px;
      color: #999;
      font-size: 1.125rem;
      background: #fafafa;
      border-radius: 4px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 600px;
      color: #666;
      font-size: 1.125rem;
      background: #fafafa;
      border-radius: 4px;
    }
  `;

  @property({ type: Object }) data: HeatmapData | null = null;
  @property({ type: Boolean }) loading = false;

  private chartDiv: HTMLElement | null = null;

  // Use light DOM
  override createRenderRoot() {
    return this;
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('data') && this.data) {
      this.renderChart();
    }
  }

  private renderChart() {
    if (!this.data || !this.shadowRoot) return;

    // Get or create the chart div
    let chartContainer = this.shadowRoot.querySelector('.chart-container');
    if (!chartContainer) return;

    // Clear existing chart
    chartContainer.innerHTML = '';

    this.chartDiv = document.createElement('div');
    this.chartDiv.style.width = '100%';
    this.chartDiv.style.height = '100%';
    chartContainer.appendChild(this.chartDiv);

    const { zValues, carrierFreqs, modulatorFreqs, sampleRate } = this.data;

    const trace: Plotly.Data = {
      type: 'heatmap',
      x: modulatorFreqs,
      y: carrierFreqs,
      z: zValues,
      colorscale: 'Viridis',
      colorbar: {
        title: 'Magnitude (log)',
        titleside: 'right'
      },
      xbins: {
        end: modulatorFreqs[modulatorFreqs.length - 1],
        size: modulatorFreqs[1] - modulatorFreqs[0],
        start: 0
      },
      ybins: {
        end: carrierFreqs[carrierFreqs.length - 1],
        size: carrierFreqs[1] - carrierFreqs[0],
        start: 0
      }
    };

    const layout: Partial<Plotly.Layout> = {
      title: 'Modulation Spectrum',
      xaxis: {
        title: 'Modulator Frequency (Hz)',
        type: 'linear',
        autorange: true
      },
      yaxis: {
        title: 'Carrier Frequency (Hz)',
        type: 'linear',
        autorange: true
      },
      margin: {
        l: 80,
        r: 60,
        t: 50,
        b: 60
      }
    };

    const config: Partial<Plotly.Config> = {
      responsive: true,
      displayModeBar: true,
      modeBarButtonsToRemove: ['sendDataToCloud'],
      displaylogo: false
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      Plotly.newPlot(this.chartDiv!, [trace], layout, config);
    });
  }

  override render() {
    if (this.loading) {
      return html`<div class="loading">Processing...</div>`;
    }

    if (!this.data) {
      return html`
        <div class="placeholder">
          Upload or record audio to generate modulation spectrum
        </div>
      `;
    }

    return html`<div class="chart-container"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'heatmap-chart': HeatmapChart;
  }
}