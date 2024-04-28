import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CountdownTimer extends LitElement {
  static properties = {
    minutes: { type: Number },
    seconds: { type: Number },
    countdownInterval: { type: Number },
    countdownComplete: { type: Boolean }
  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        background-color: forestgreen;
        color: yellow;
        padding: 20px;
        box-sizing: border-box;
    }
    :host input {
        width: calc(50% - 5px);
        margin-right: 5px;
    }

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .countdown-container {
      margin-bottom: 20px;
    }

    .countdown-complete {
      animation: flash 0.5s infinite alternate;
    }

    @keyframes flash {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    button {
      margin-top: 10px;
    }
  `;

  constructor() {
    super();
    this.minutes = 0;
    this.seconds = 0;
    this.countdownInterval = null;
    this.countdownComplete = false;
  }

  render() {
    return html`
      <div class="title">Countdown Timer</div>
      <div class="countdown-container">
        <input type="number" id="minutesInput" placeholder="Minutes">
        <input type="number" id="secondsInput" placeholder="Seconds">
        <button @click="${this.startCountdown}">Start Countdown</button>
        <button @click="${this.stopCountdown}">Stop Countdown</button>
      </div>
      <div id="countdown" class="${this.countdownComplete ? 'countdown-complete' : ''}"></div>
    `;
  }

  startCountdown() {
    const minutesInput = this.shadowRoot.getElementById('minutesInput').value;
    const secondsInput = this.shadowRoot.getElementById('secondsInput').value;

    this.minutes = parseInt(minutesInput) || 0;
    this.seconds = parseInt(secondsInput) || 0;

    const totalTimeInSeconds = this.minutes * 60 + this.seconds;

    if (totalTimeInSeconds <= 0) {
      alert('Please enter a valid time.');
      return;
    }

    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const countdownElement = this.shadowRoot.getElementById('countdown');

    if (this.minutes === 0 && this.seconds === 0) {
      clearInterval(this.countdownInterval);
      this.countdownComplete = true;
      return;
    }

    if (this.seconds === 0) {
      this.minutes--;
      this.seconds = 59;
    } else {
      this.seconds--;
    }

    countdownElement.textContent = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
  }

  stopCountdown() {
    clearInterval(this.countdownInterval);
  }
}

customElements.define('countdown-timer', CountdownTimer);
