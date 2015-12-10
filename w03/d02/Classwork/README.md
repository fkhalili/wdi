# Karaoke-dokie

> **The Story:**

> You've been hired to build a karaoke system for **Tempo Tantrum**, Sung's lastest karaoke business venture! No off-the-shelf solution will do - Sung wants a custom system to get those words on the screen.

## Instructions

Do your work in the linked `karaoke.js` file.

1. Make an array out of the lines of your favorite song
2. Write a function `repeatedBehavior` that logs a line of your song to the console
3. Write a setInterval function that logs a new line every 2 seconds
4. Refactor your code to display the new lines on the DOM using jQuery

### setInterval Syntax
```javascript

// function that will be repeated every interval
var mySweetCallback = function mySweetCallback () {
  console.log("Omg callback has been fired!");
};
// setInterval takes two arguments: a callback function and a time in millisecond
// The callback can be NAMED or ANONYMOUS!
// setInterval returns an id we can save to a variable and use to clear an interval later on.
var intervalId = setInterval(mySweetCallback, 3000);
```
