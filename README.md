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

## Weekly Summary Widget

A weekly summary widget that displays the amount of tasks due in the current week, and lists them in order of due date. <br>

Fields:

`_weeklyTasks` - The tasks to be fetched from the task model.

Methods:

`_sortTasks` - Sorts the tasks retrieved from the task model in order of due date.

`_displayTasks` - Retrieves Tasks from the current week that are not in the Done section, and displays them in a list for the user to see.