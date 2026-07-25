import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Plotly from 'plotly.js-dist-min';
import type { HeatmapData } from '../lib/fft-processor.js';

@customElement('heatmap-chart')
export class HeatmapChart extends LitElement {
  static override styles = css`
    :host { display: block; }
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
    if (!this.data) return;

    // Get the chart container
    const chartContainer = this.querySelector('.chart-container');
    if (!chartContainer) return;

    // Clear existing chart
    chartContainer.innerHTML = '';

    this.chartDiv = document.createElement('div');
    this.chartDiv.style.width = '100%';
    this.chartDiv.style.height = '100%';
    chartContainer.appendChild(this.chartDiv);

    const { zValues, carrierFreqs, modulatorFreqs } = this.data;

    const trace: Plotly.Data = {
      type: 'heatmap',
      x: modulatorFreqs,
      y: carrierFreqs,
      z: zValues,
      colorscale: 'Viridis',
      colorbar: {
        title: 'Magnitude (log)',
        titleside: 'right'
      }
    };

    const layout: Partial<Plotly.Layout> = {
      title: 'Modulation Spectrum',
      xaxis: {
        title: 'Modulator Frequency (Hz)'
      },
      yaxis: {
        title: 'Carrier Frequency (Hz)'
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
      displaylogo: false
    };

    Plotly.newPlot(this.chartDiv, [trace], layout, config);
  }

  override render() {
    if (this.loading) {
      return html`<div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #666; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">Processing...</div>`;
    }

    if (!this.data) {
      return html`
        <div style="display: flex; align-items: center; justify-content: center; height: 600px; color: #999; font-size: 1.125rem; background: #fafafa; border-radius: 4px;">
          Upload or record audio to generate modulation spectrum
        </div>
      `;
    }

    return html`<div class="chart-container" style="width: 100%; height: 600px; background: white; border-radius: 4px;"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'heatmap-chart': HeatmapChart;
  }
}
