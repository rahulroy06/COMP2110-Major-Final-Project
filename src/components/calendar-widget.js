import { LitElement, html, css} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { TaskModel } from "../models.js";

class CalendarWidget extends LitElement {
  static properties = {
    currentMonth: { type: Number },
    currentYear: { type: Number },
    tasksLoading: { type: Boolean },
  };

  constructor() {
    super();
    const today = new Date();
    this.currentMonth = today.getMonth() + 1;
    this.currentYear = today.getFullYear();
    this.tasksLoading = true;
  }

  //refresh widget once tasks have been loaded and added to corresponding due date on the calendar
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.tasksLoading = false;
      this.requestUpdate();
    }, 1200);
  }

  static styles = css`
    :host {
      display: block;
      width: 250px;
      height: 250px;
      background-color: lightblue;
      border: 3px solid azure;
      border-radius: 5px;
    }
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      border: 0.5px solid black;
      margin-top: 15px;
    }
    .day {
      text-align: center;
      padding: 5px;
      background: white;
    }
    .current-day {
      background: #201f1f;
      color: white;
    }
    .due-today {
      background: #4de315;
    }
    .month {
      margin-top: 10px;
      padding: 3px;
      font-weight: bold;
      font-size: 1.17em;
    }
    button {
      margin-top: 10px;
      padding: 3px;
      width: 65px;
    }
  `;

  daysInMonth(month) {
    //dayCount stores the amount of days in the called month
    const dayCount = new Date(2024, month, 0).getDate();
    //take the day count and make it an array, starting from 1 to dayCount
    const days = [];
    for (let i = 1; i <= dayCount; i++) {
      days[i - 1] = i;
    }
    return days;
  }

  tasksDue(day) {
    //checking chosen day on current month
    const date = new Date(this.currentYear, this.currentMonth - 1, day);
    //return true if task is due on specified day
    return TaskModel.getTasksForDay(date).length > 0;
  }

  previousMonth() {
    //check if month goes past january and reset with december
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
    } else {
      this.currentMonth -= 1;
    }
    this.requestUpdate();
  }

  nextMonth() {
    //check if month goes past december and reset with january
    if (this.currentMonth === 12) {
      this.currentMonth = 1;
    } else {
      this.currentMonth += 1;
    }
    this.requestUpdate();
  }

  renderCalendar() {
    const days = this.daysInMonth(this.currentMonth);
    const today = new Date();

    //create classes for all days, the current day and days where tasks are due
    return html`
      ${days.map((day) => {
        let classes = " day";
        if (day === today.getDate()) {
          classes += " current-day";
        }
        if (this.tasksDue(day)) {
          classes += " due-today";
        }
        return html` <div class="${classes}">${day}</div> `;
      })}
    `;
  }

  monthToName(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this.currentMonth -1];
  } 

  render() {
    return html`
      <div>
        <div class="month">Month: ${this.monthToName()}</div>
        <button @click="${this.previousMonth}">Previous</button>
        <button @click="${this.nextMonth}">Next</button>
      </div>
      <div class="calendar">${this.renderCalendar()}</div>
    `;
  }
}

customElements.define("calendar-widget", CalendarWidget);
