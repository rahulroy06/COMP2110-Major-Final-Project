# Task Manager CSS Template

This is a document containing our chosen CSS design from part 1 of the assignment. 

## CSS

### Colour Palette

Header - #92B4A7 <br>
Footer - #424B54 <br>
Task Board - #B6CB9E <br>
Widgets - #D1F0B1 <br>

### Main

```css
body {
    font-family: Trebuchet, sans-serif;
    background-color: #c6dcd4;
    display: grid;
    grid-template-areas: 
        "nav nav"
        "task widget"
        "foot foot";
    margin: 0;
    grid-template-columns: 3fr 1fr;
}
```

### Navbar

```css
header {
    display: flex;
    align-items: center;
    background-color: #92B4A7;
    padding: 15px;
    top: 0;
    left: 0;
    right: 0;
    grid-area: nav;
}

header button {
    background-color: #9eccba;
    border: 0px;
    padding: 10px;
}

header button:hover {
    color: whitesmoke;
}

#tasksearch {
    -webkit-appearance: none;
    appearance: none;
    padding: 8px;
    border: 2px solid #999999;
    outline: none;
    width: 200px;
    transition: 0.5s;
}

#tasksearch:focus {
    border-color: #555555;
}

header a {
    color: black;
    padding: 10px;
    transition: 0.2s;
}

header a:hover {
    color: whitesmoke;
    transition: 0.2s;
    border-bottom-width: 3px;
    border-bottom-style: solid;
}

#user p {
    padding-right: 15px;
    display: inline-block;
}

nav {
    flex: 1;
}

nav ul {
    list-style-type: none;
}

nav li {
    display: inline-block;
    padding-right: 10px;
}

nav a {
    text-decoration: none;
}

form {
    padding-right: 25px;
}
```

### Footer

```css
footer {
    display: flex;
    background-color: #424B54;
    color: whitesmoke;
    padding: 15px;
    left: 0;
    right: 0;
    grid-area: foot;
}

footer p {
    padding-right: 15px;
}
```

### Tasks

```css
#task-manager {
    display: flex;
    flex-direction: row;
    grid-area: task;
}

.task-board {
    background-color: #B6CB9E;
    margin: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    width: 30%;
    height: fit-content;
}

.task-card {
    background-color: #cae2ac;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 5px;
}

.task-card h3 {
    margin: -5px;
    padding: 10px;
    background-color: #e2f5cc;
    border-radius: 5px 5px 0px 0px;
}

.task-card > p {
    padding-left: 5px;
}

.task-controls button {
    background-color: #e2f5cc;
    border-color: #e2f5cc;
    border-radius: 5px;
    padding: 5px;
}

.task-timestamp:before {
    content: "Start: ";
    float: left;
    width: 50px;
}

.task-due:before {
    content: "Due: ";
    float: left;
    width: 50px;
}

.task-priority:before {
    content: "Priority: ";
}
```

### Widgets

```css
#widgets {
    grid-area: widget;
    padding-left: 10px;
    padding-top: 20px;
    padding-right: 15px;
}

#widgets > div {
    width: 300px;
    border-style: solid;
    border-width: 3px;
    border-radius: 5px;
    border-color: #e4ffca;
    background-color: #D1F0B1; 
    padding: 5px;
    margin-bottom: 25px;
}

#widgets h3 {
    margin: -5px;
    padding: 10px;
    background-color: #e4ffca;
}

#task-timer-remaining {
    float: left;
    padding-right: 5px;
    padding-left: 5px;
}

#task-timer-controls button {
    background-color: #e4ffca;
    border-color: #e4ffca;
    border-radius: 5px;
    padding: 5px;
}

#task-stats-widget dt {
    float: left;
    width: 100px;
    margin-left: 10px;
}

#task-stats-widget dt:after {
    content: ":";
}

#weather-widget dt {
    text-decoration: underline;
}

#weather-widget dd {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
}

#weather-widget dt, dd {
    padding-left: 10px;
}
```