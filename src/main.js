import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-block.js';
import './components/blog-block.js';
import './components/widget-container.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/task-manager.js';
import './components/game-element.js';
import './components/bmi-widget.js';
import './components/countdown-timer.js';
import './components/weekly-summary.js';
import './components/calendar-widget.js';

/**
 * Comp2110TaskManager component constructs the main UI of the application
 */
class Comp2110TaskManager extends LitElement {
  static properties = {
    header: {type: String},
  };

  static styles = css`
    :host {
      min-height: 100vh;
      font-size: 14pt;
      color: black;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--comp2110-portal-background-color, white);
    }
    
    main {
      display: flex;
      justify-content: space-between;
    }
    
    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
      margin: auto;
      margin-top: 20px;
      background-color: #3B4359;
      padding: 15px;
      color: whitesmoke;
    }
    
    .app-footer a {
      margin-left: 5px;
      text-decoration: none;
      color: white;
      padding-bottom: 3px;
      transition: 0.2s;
    }

    .app-footer a:hover {
      border-bottom: 2px solid;
      transition: 0.2s;
    }

    header {
      background-color: #9CB8C9;
      padding: 10px;
      margin-bottom: 15px;
    }
  `;

  constructor() {
    super();
    this.header = 'COMP2110 Task Manager';
  }

  render() {
    return html`
      <header>
        <h1>${this.header}</h1>
        <login-widget></login-widget>
      </header>

      <main>      
        <task-manager></task-manager>     
        <widget-container header="Widgets">
          <ad-widget></ad-widget>
          <game-element></game-element>
          <weekly-summary></weekly-summary>
          <countdown-timer></countdown-timer>
          <calendar-widget></calendar-widget>
        </widget-container>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('comp2110-task-manager', Comp2110TaskManager);
