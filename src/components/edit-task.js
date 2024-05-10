import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {TaskModel} from '../models.js';

/** EditTask <edit-task id=N>
 * Task edit for a given task id (N).  Displays as a button which when clicked
 * shows a modal dialog containing a form to update the task properties.
 * Submitting the form updates the task via the TaskModel.
 */
class EditTask extends LitElement {
  static properties = {
    id: 0,
    _task: {state: true},
  };

  static styles = css`
        form {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
        }
        form div {
            display: grid;
            grid-template-columns: 1fr 3fr;
            padding: 5px;
            column-gap: 15px;
        }
        label {
          background-color: azure;
        }
        #regular-input {
            width: 100%;
            outline: none;
            border: 2px solid #999999;
            padding: 5px;
            box-sizing: border-box;
        }
        button {
          background-color: azure;
          border-color: azure;
          border-radius: 5px;
          padding: 5px;
        }
        #edit-task-dialog {
          background-color: lightblue;
          border: 3px solid azure;
          border-radius: 5px;
          width: 30%;
        }
        textarea {
          width: 100%;
          height: 75px;
          resize: none;
          border: 2px solid #999999;
          outline: none;
          padding: 5px;
          box-sizing: border-box;
        }
        textarea:focus {
          border-color: #555555;
        }
        input[type=submit] {
          background-color: azure;
          border-color: azure;
          border-radius: 5px;
        }
        h2 {
          font-size: large;
          background-color: azure;
          margin-top: 0px;
          padding: 10px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
      `;

  connectedCallback() {
    super.connectedCallback();
    this._task = TaskModel.getTask(this.id);
  }

  /**
   * _submit - private method to handle form submission. Constructs
   * a new task from the form values and then updates the task via TaskModel
   * @param {Object} event - the click event
   */
  _submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const due = new Date(formData.get('due'));
    const newTask = {
      summary: formData.get('summary'),
      text: formData.get('text'),
      priority: formData.get('priority'),
      due: due.valueOf(),
    };
    TaskModel.updateTask(this.id, newTask);
    this._hideModal(event);
  }


  /**
   * click handler for the button to show the editor dialog
   */
  _showModal() {
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.showModal();
  }

  /**
   * click handler to close the editor dialog
   * @param {Object} event - the click event
   */
  _hideModal(event) {
    event.preventDefault();
    const dialog = this.renderRoot.querySelector('#edit-task-dialog');
    dialog.close();
  }

  render() {
    // convert due date from milliseconds time to an ISO string
    // suitable for the datetime-local form input
    const isoString = new Date(this._task.due).toISOString();
    const due = isoString.substring(0, isoString.indexOf('T') + 6);
    return html`
        <button @click=${this._showModal}>Edit</button>
        <dialog id="edit-task-dialog">
            <h2>Task Properties</h2>
            <form @submit="${this._submit}">
                <div>
                    <label for="summary">Summary</label>
                    <input id="regular-input" name="summary" value=${this._task.summary}>
                </div>
                <div>
                    <label for="text">Text</label>
                    <textarea name="text">${this._task.text}</textarea> 
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <input id="regular-input" 
                           name="priority" 
                           type="number" 
                           value=${this._task.priority}> 
                </div>
                <div>
                    <label for="due">Due</label>
                    <input id="regular-input" name="due" type="datetime-local" value=${due}>
                </div>
                <div>
                    <button @click="${this._hideModal}">Cancel</button>
                    <input value='Update' type=submit>
                </div>
            </form>
        </dialog>`;
  }
}

customElements.define('edit-task', EditTask);
