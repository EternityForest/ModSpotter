import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('audio-recorder')
export class AudioRecorder extends LitElement {
  static override styles = css`
    :host { display: block; }
  `;

  @property({ type: Boolean }) disabled = false;
  @state() private isRecording = false;
  @state() private duration = 0;

  // Use light DOM
  override createRenderRoot() {
    return this;
  }

  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private startTime = 0;
  private durationInterval: number | null = null;

  private async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        const audioData = await this.blobToAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
        this.dispatchEvent(new CustomEvent('audio-loaded', {
          detail: audioData,
          bubbles: true,
          composed: true
        }));
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      this.startTime = Date.now();

      this.durationInterval = window.setInterval(() => {
        this.duration = Math.floor((Date.now() - this.startTime) / 1000);
      }, 100);

    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to start recording';
      this.dispatchEvent(new CustomEvent('error', {
        detail: msg,
        bubbles: true,
        composed: true
      }));
    }
  }

  private stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    if (this.durationInterval) {
      clearInterval(this.durationInterval);
      this.durationInterval = null;
    }
    this.isRecording = false;
    this.duration = 0;
  }

  private async blobToAudio(blob: Blob): Promise<{ audioData: Float32Array; sampleRate: number }> {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const channelData = audioBuffer.getChannelData(0);
    const audioData = Float32Array.from(channelData);
    return { audioData, sampleRate: audioBuffer.sampleRate };
  }

  private handleClick() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  override render() {
    const btnStyle = this.isRecording
      ? 'background: #ff1744; animation: pulse 1s infinite;'
      : 'background: #f44336;';
    const disabledStyle = this.disabled ? 'background: #ccc; cursor: not-allowed;' : '';

    return html`
      <style>
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <button
        style="width: 100%; padding: 1rem; font-size: 1rem; border: none; border-radius: 8px; cursor: pointer; color: white; ${btnStyle}${disabledStyle}"
        @click="${this.handleClick}"
        ?disabled="${this.disabled}"
      >
        ${this.isRecording ? '⏹ Stop Recording' : '🎤 Start Recording'}
      </button>
      ${this.isRecording ? html`
        <div style="margin-top: 0.5rem; text-align: center; color: #666; font-size: 0.875rem;">Recording: ${this.duration}s</div>
      ` : ''}
      <div style="margin-top: 0.75rem; color: #666; font-size: 0.75rem; text-align: center;">Recording will be decoded as WebM/Opus</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-recorder': AudioRecorder;
  }
}
