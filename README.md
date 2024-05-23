# COMP2110 Task Manager 2024

As part of your assignment submission, write notes about your implementation
in this file.

Josh - Calendar Widget <br>
Rahul - Tic Tac Toe Game Widget <br>
Jordan - Task Timer Widget <br>
Aaron - Weekly Summary Widget <br>


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

## Calendar Widget.
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

## Countdown Timer Widget
This widget presents a countdown timer allowing users to set a specific time length and start the countdown. It visually displays the remaining time and provides options to start and stop the countdown.

Fields:

`minutes`: Represents the number of minutes entered by the user for the countdown.
`seconds`: Represents the number of seconds entered by the user for the countdown.
`countdownInterval`: Holds the interval reference for the countdown.
`countdownComplete`: Indicates whether the countdown has completed.

Methods:

`startCountdown()`: Initiates the countdown based on the user input for minutes and seconds. It calculates the total time in seconds, validates it, and starts the countdown interval.
`updateCountdown()`: Updates the countdown every second by decrementing the minutes and seconds accordingly. It also handles the scenario when the countdown reaches zero.
`stopCountdown()`: Stops the countdown by clearing the countdown interval.


## Deployment of the Webpage

The deployment of a repository could be done via the github’s own hosting service called Github pages but since the repository we worked on is a private repository it not possible to deploy them as public site. We can use other services like `CloudFlare Pages`. This service allows us to deploy any repository as static site. While it can be done using Web Interface, we opted for the the wrangler CLI to carry out this task.
First install wrangler in the package using 
```sh
npm install wrangler” 
```
Then `npx` can be used to execute a command from an installed package on the command line. Now authenticate the wrangler from cloudflare from the command 
```sh
npx wrangler login
```
After the credentials have been authenticated, create a new project and name it `comp2110-group114` using the command 
```sh
npx wrangler pages project create comp2110-group114
```
Once the project have been created, you can publish all the content of the current repository by putting a `.` at the end of following command 
```sh
npx wrangler pages publish .
```
After the publishing is done, wrangler will give a URL to our published page. For this project we got the following URL [https://comp2110-group114.pages.dev/]

For any update in future to the repository the same command can be used to publish any changes to the webpage
```sh
npx wrangler pages publish .
```
Alternatively a workflow can be created to automate this process. Github action allow us to create an action that can be triggered on a specific action and perform the certain programmed task. Certain workflow in usually termed as `CI/CD` which means Continous Integrated and Continuous Development. The purpose of this workflow is to publish any changes made on the repository directly to the website without needing to do the process manually. It is triggered on any push/commit to the main repository and using the API token and Account ID it can publish any changes made directly to the already published site. 

Using the instruction from [https://developers.cloudflare.com/workers/wrangler/ci-cd/] you can build the automated action on Github to create a CI/CD workflow in your repository.
 