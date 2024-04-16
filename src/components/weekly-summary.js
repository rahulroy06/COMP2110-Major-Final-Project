import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class WeeklySummary extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 250px;
            height: 250px;
            background-color: lightblue;
        }
    `;

    constructor() {
        super();
    }

    render() {
        return html`
            <h3>Weekly Summary</h3>
        `;
    }
}

customElements.define('weekly-summary', WeeklySummary);