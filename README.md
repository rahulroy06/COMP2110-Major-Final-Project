# COMP2110 Task Manager 2024

As part of your assignment submission, write notes about your implementation
in this file.

Josh - Calendar Widget
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

## calendar Widget.
Shows the calendar for the current month and highlights the current day and days where tasks are due. Allows user to switch to other months via interactive controls.

Fields:

`currentMonth` - holds the current month of the year.

`currentYear` - holds the current year.

`tasksLoading` - a boolean that indicates wheter the current tasks have loaded and been added to the calendar.

Methods:

`connectedCallback` -  handles checking if the tasks have all been loaded, checked and added to the calendar. Refreshes the widget after 1.2s, with the updated entries on the calendar.

`daysInMonth` - creates an array that holds the days in each month, depending on the current month.

`tasksDue` - checks if there is any tasks in that are in either Doing or ToDo on a specified date.

`previousMonth`, `nextMonth` - conditionals for the previous and next buttons, allowing movement on the calendar while staying within the 12 months in a year.

`monthToName` - returns the name of the current month, checking the current months number with an array of each month.

`renderCalendar` - creates the calendars html based off the returned daysInMonth array. It creates individual divs for each day of the month, days where tasks are due, and the current day.

