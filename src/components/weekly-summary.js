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
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
    `;

    constructor() {
        super();
    }

    _displayTasks() {
        // Get the date of the start of the week, and reset time
        const weekStart = new Date(new Date().toDateString());
        weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);

        // Get the date of the end of the week, and reset time
        const weekEnd = new Date(new Date().toDateString());
        weekEnd.setDate(weekEnd.getDate() + (7 - weekEnd.getDay()));

        window.addEventListener('tasks', () => {
            // Get all tasks in every category except Done
            let allTasks = TaskModel.getTasks("ToDo").concat(TaskModel.getTasks("Doing"));

            // Filter array to tasks due this week
            this._weeklyTasks = [];
            for (let i = 0; i < allTasks.length; i++) {
                const taskDue = new Date(new Date(allTasks[i].due).toDateString());
                if (taskDue >= weekStart && taskDue <= weekEnd) {
                    this._weeklyTasks.push(allTasks[i]);
                }
            }
            console.log("Got Tasks.");
        })
        if (this._weeklyTasks) {
            // Display weekly tasks once loaded
            return html `
            <p>Due this week: ${this._weeklyTasks.length}</p>
            <ul>
                ${this._weeklyTasks.map((tasks) => 
                    html`<li>${tasks.summary}</li>`
                )}
            </ul>
            `;
        } else {
            // Tasks are still loading
            return html `<p>Loading Weekly Summary...</p>`;
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