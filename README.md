# COMP2110 Task Manager 2024

As part of your assignment submission, write notes about your implementation
in this file.

Josh - Calender Widget
Rahul - Tic Tac Toe Game Widget
Jordan - Task Timer Widget
Aaron - Weekly Summary Widget


## Tic Tac Toe  Game Widget.

A simple custom elemet named `GameElement` has been created to impliment this widget. 
Fields:
`board`: 
    Represents the game board with a 3x3 grid.
`currentPlayer`: 
    Indicates the current player ('X' or 'O').
`winner`: 
    Stores the winner of the game.

Methods:
```javascript 
handleCellClick();
```
Handles the click event on a cell in the game board.
```javascript 
resetGame();
```
Checks if there is a winner in the game.
```javascript 
checkWinner();
```
Resets the game board, current player, and winner.