import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class GameElement extends LitElement {
  static get properties() {
    return {
      board: {type: Array},
      currentPlayer: {type: String},
      winner: {type: String}
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-size: 14pt;
        color: black;
        font: 14px sans-serif;
        text-align: center;
        width: 250px;
        height: 250px;
        margin: 0 auto;
        text-align: center;
        background-color: yellow;
      }
      .board {
        padding: 16px 21%;
      } 
      .row {
        display: flex;
      }
      .cell {
        border-radius: 15px;
        border: 1px solid black;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 1px;
        margin: 1px;
      }
      .winner {
        font-size: 15px;
        margin: 0px auto;
    }
      .reset-button{
        padding: 5px 10px;
        border-radius: 5px;
        color: red;
        border-color: red;
        margin: 10px auto;
      }
    `;
  }

  constructor() {
    super();
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
  }

  handleCellClick(row, col) {
    if (!this.winner && !this.board[row][col]) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2]) {
        return true;
      }
      if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i]) {
        return true;
      }
    }
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
      return true;
    }
    if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
      return true;
    }
    return false;
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
  }

  render() {
    return html`
      <div class="board">
        ${this.board.map((row, rowIndex) => html`
          <div class="row">
            ${row.map((cell, colIndex) => html`
              <div class="cell" @click=${() => this.handleCellClick(rowIndex, colIndex)}>${cell}</div>
            `)}
          </div>
        `)}
      </div>
      <button class="reset-button" @click=${this.resetGame}>Reset Game</button>
      <div class="winner">${this.winner ? `Player ${this.winner} wins!` : `Current player: ${this.currentPlayer}`}</div>
    `;
  }
}
customElements.define('game-element', GameElement);