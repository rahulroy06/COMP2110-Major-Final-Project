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
        height: 250px;
        background-color: purple;
        color: yellow;
        border: 3px solid azure;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    .input-container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .input-container input {
        width: calc(50% - 5px);
        margin-right: 5px;
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 4px;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
    }

    .title {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: bold;
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
      padding: 5px 10px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button.start {
      background-color: #4CAF50;
      color: white;
    }
    button.stop {
      background-color: #f44336;
      color: white;
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
      <div class="input-container">
        <input type="number" id="minutesInput" placeholder="Minutes">
        <input type="number" id="secondsInput" placeholder="Seconds">
      </div>
      <div class="button-container">
        <button class="start" @click="${this.startCountdown}">Start</button>
        <button class="stop" @click="${this.resetCountdown}">Reset</button>
        <button class="stop" @click="${this.stopCountdown}">Stop</button>
      </div>
      <div id="countdown" class="${this.countdownComplete ? 'countdown-complete' : ''}"></div>
    `;
  }

  startCountdown() {
    const minutesInput = this.shadowRoot.getElementById('minutesInput').value;
    const secondsInput = this.shadowRoot.getElementById('secondsInput').value;

    this.minutes = parseInt(minutesInput) || 0;
    this.seconds = parseInt(secondsInput) || 0;

    if (this.minutes < 0 || this.seconds < 0) {
      alert('Please enter positive numbers only.');
      return;
    }

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
  resetCountdown() {
    clearInterval(this.countdownInterval);
    this.minutes = 0;
    this.seconds = 0;
    this.countdownComplete = false;
    const countdownElement = this.shadowRoot.getElementById('countdown');
    countdownElement.textContent = '';
  }
  
  stopCountdown() {
    clearInterval(this.countdownInterval);
    this.minutes = 0;
    this.seconds = 0;
    this.countdownComplete = false;
    const countdownElement = this.shadowRoot.getElementById('countdown');
    countdownElement.textContent = '';
  }
}

customElements.define('countdown-timer', CountdownTimer);