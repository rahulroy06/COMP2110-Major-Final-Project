import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class CalenderWidget extends LitElement {
  static properties = {
    currentMonth: { type: Number },
    currentYear: { type: Number },
  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background-color: azure;
        border: 1px solid black;
    }
  `;

  constructor() {
    super();
    const today = new Date();
    this.currentMonth = today.getMonth() + 1;
    this.currentYear = today.getFullYear();
  }

  render() {
    return html`
        <h3>${this.header}</h3>
    `;
  }
}

customElements.define('calender-widget', CalenderWidget);