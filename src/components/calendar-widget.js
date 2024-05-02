import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

import { TaskModel } from "../models.js";

/**
 shows the calendar for the current month and highlights the   current day and days where tasks are due.  Optionally, allows display of other months via interactive controls.
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

  DaysInMonth(month) {
    //dayCount stores the amount of days in the called month
    const dayCount = new Date(2024, month, 0).getDate();
    //take the day count and make it an array, starting from 1 to dayCount
    const days = [];
    for (let i = 1; i <= dayCount; i++) {
      days[i - 1] = i;
    }
    return days;
  }

  DueToday(day) {
    //checking chosen day on current month
    const date = new Date(this.currentYear, this.currentMonth, day);
    //return true if task is due on specified day
    return TaskModel.getTasksForDay(date).length > 0;
  }

  render() {
    return html` <h3>${this.header}</h3> `;
  }
}

customElements.define("calender-widget", CalenderWidget);
