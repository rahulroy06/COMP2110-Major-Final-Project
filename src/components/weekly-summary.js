import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';
class WeeklySummary extends LitElement {
    static properties = {
        _weeklyTasks: {state: true}
    };

    static styles = css`
        :host {
            display: block;
            width: 250px;
            height: 250px;
            background-color: lightblue;
            border: 3px solid azure;
            border-radius: 5px;
        }
        h3 {
            background-color: azure;
            margin-top: 0px;
            padding: 10px;
        }
    `;

    constructor() {
        super();
    }

    _displayTasks() {
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);

        window.addEventListener('tasks', () => {
            this._weeklyTasks = TaskModel.getTasksForDay(weekStart);
            console.log("Got Tasks.");
        })
        if (this._weeklyTasks) {
            return html `<p>Weekly Tasks: ${this._weeklyTasks.length}</p>`
        } else {
            return html `<p>Loading Weekly Summary...</p>`
        }
    }

    render() {
        return html`
            <h3>Weekly Summary</h3>
            ${this._displayTasks()}
        `;
    }
}

customElements.define('weekly-summary', WeeklySummary);