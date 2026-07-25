import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('audio-uploader')
export class AudioUploader extends LitElement {
  static override styles = css`
    :host { display: block; }
  `;

  @property({ type: Boolean }) disabled = false;

  // Use light DOM
  override createRenderRoot() {
    return this;
  }

  private handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (!this.disabled) {
      (e.currentTarget as HTMLElement).classList.add('dragover');
    }
  }

  private handleDragLeave(e: DragEvent) {
    (e.currentTarget as HTMLElement).classList.remove('dragover');
  }

  private handleDrop(e: DragEvent) {
    e.preventDefault();
    (e.currentTarget as HTMLElement).classList.remove('dragover');

    if (this.disabled) return;

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFile(files[0]);
    }
  }

  private handleFileSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  private async processFile(file: File) {
    const validTypes = ['audio/wav', 'audio/mp3', 'audio/mpeg', 'audio/ogg', 'audio/flac'];
    const validExtensions = ['.wav', '.mp3', '.ogg', '.flac'];

    const isValidType = validTypes.includes(file.type) || file.type.startsWith('audio/');
    const hasValidExt = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!isValidType && !hasValidExt) {
      this.dispatchEvent(new CustomEvent('error', {
        detail: 'Please upload a valid audio file (WAV, MP3, OGG, or FLAC)',
        bubbles: true,
        composed: true
      }));
      return;
    }

    try {
      const audioData = await this.loadAudio(file);
      this.dispatchEvent(new CustomEvent('audio-loaded', {
        detail: audioData,
        bubbles: true,
        composed: true
      }));
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to load audio';
      this.dispatchEvent(new CustomEvent('error', {
        detail: msg,
        bubbles: true,
        composed: true
      }));
    }
  }

  private loadAudio(file: File): Promise<{ audioData: Float32Array; sampleRate: number }> {
    return new Promise((resolve, reject) => {
      const audioContext = new AudioContext();
      const reader = new FileReader();

      reader.onload = async () => {
        try {
          const arrayBuffer = reader.result as ArrayBuffer;
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
          const channelData = audioBuffer.getChannelData(0);
          const audioData = Float32Array.from(channelData);
          resolve({
            audioData,
            sampleRate: audioBuffer.sampleRate
          });
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsArrayBuffer(file);
    });
  }

  private triggerFileInput() {
    if (!this.disabled) {
      this.querySelector<HTMLInputElement>('input')?.click();
    }
  }

  override render() {
    return html`
      <div
        class="upload-area ${this.disabled ? 'disabled' : ''}"
        style="border: 2px dashed #ccc; border-radius: 8px; padding: 1.5rem; text-align: center; cursor: pointer; transition: border-color 0.2s, background 0.2s;"
        @click="${this.triggerFileInput}"
        @dragover="${this.handleDragOver}"
        @dragleave="${this.handleDragLeave}"
        @drop="${this.handleDrop}"
      >
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📁</div>
        <div>Click to upload or drag and drop</div>
        <div style="color: #666; font-size: 0.875rem;">WAV, MP3, OGG, FLAC</div>
        <input
          type="file"
          accept="audio/*"
          style="display: none;"
          @change="${this.handleFileSelect}"
          ?disabled="${this.disabled}"
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-uploader': AudioUploader;
  }
}
