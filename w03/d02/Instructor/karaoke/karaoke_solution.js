console.log("rock 'n rollll")

// Setting up an array of awesome song lyrics
songLines = [
"Another head hangs lowly",
"Child is slowly taken",
"And the violence caused such silence",
"Who are we mistaking",
"But you see it's not me",
"It's not my family",
"In your head in your head",
"They are fighting",
"With their tanks and their bombs",
"And their bombs and their guns",
"In your head in your head they are crying",
"In your head",
"In your head",
"Zombie zombie zombie ei ei",
"What's in your head",
"In your head.",
"Zombie, zombie, zombie ei, ei, ei, oh do, do, do, do, do, do, do, do",
"Another mother's breaking",
"heart is taken over",
"And the violence causes silence",
"We must be mistaken",
"It's the same old thing since 1916",
"In your head in your head",
"They're still fighting",
"With their tanks and their bombs",
"And their bombs and their guns",
"In your head in your head they are dying",
]

// Setting our incrementor to start at zero OUTSIDE of the code that will be repeated
var i = 0;

// Defining the behavior we want repeated 
var repeatedBehavior = function repeatedBehavior () {

  if (i < songLines.length) {
    console.log(songLines[i]);
    // Increment our counter
    i = i + 1;
  } else if (i === songLines.length) {
    // If we've reached the end of the array, clear the there interval
    clearInterval(intervalId);
  }

}

// Starting the interval going and grabbing the interval's ID from setInterval's return value
var intervalId = setInterval(repeatedBehavior, 1000);


/* Morning Example:

var i = 0;

var intervalId = setInterval(function() {
  if (i <= 42) {
    console.log(i);
    i = i + 1;
  } else {
    clearInterval(intervalId);
  }
}, 100)

*/
