import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Guard against double-registration (HMR)
if (!customElements.get('audio-recorder')) {
  @customElement('audio-recorder')
  export class AudioRecorder extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .record-btn {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
      background: #f44336;
      color: white;
    }

    .record-btn:hover:not(:disabled) {
      background: #d32f2f;
    }

    .record-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .record-btn.recording {
      background: #ff1744;
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .duration {
      margin-top: 0.5rem;
      text-align: center;
      color: #666;
      font-size: 0.875rem;
    }

    .hint {
      margin-top: 0.75rem;
      color: #666;
      font-size: 0.75rem;
      text-align: center;
    }
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

    return {
      audioData,
      sampleRate: audioBuffer.sampleRate
    };
  }

  private handleClick() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  override render() {
    return html`
      <button
        class="record-btn ${this.isRecording ? 'recording' : ''}"
        @click="${this.handleClick}"
        ?disabled="${this.disabled}"
      >
        ${this.isRecording ? '⏹ Stop Recording' : '🎤 Start Recording'}
      </button>
      ${this.isRecording ? html`
        <div class="duration">Recording: ${this.duration}s</div>
      ` : ''}
      <div class="hint">Recording will be decoded as WebM/Opus</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-recorder': AudioRecorder;
  }
}