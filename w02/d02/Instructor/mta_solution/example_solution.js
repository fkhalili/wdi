
// Creating an array for each train line's stops
lTrain = ["8th", "6th", "unionSquare", "3rd", "1st"];
nTrain = ["34th", "28th", "23rd", "unionSquare", "8th"];
sixTrain = ["grandCentral", "33rd", "28th", "23rd", "unionSquare", "astorPlace"]

// Declare and assign the input data from the CLI
var input = process.argv;

// Declare and assign the command from the input
var command = input[2];

// Print train lines to the CLI
if (command === "lines") {
  console.log("N, L, 6");

// Print stops on the train lines to the CLI
} else if (command === "stops") {
  var line = input[3];

  if (line.toUpperCase() === "N") {
    console.log("N train stops: " + nTrain.join(", "));
  } else if (line.toUpperCase() === "L") {
    console.log("L train stops: " + lTrain.join(", "));
  } else if (line === "6") {
    console.log("6 train stops: " + sixTrain.join(", "));
  } else {
    console.log("Please choose a valid line - either N, L, or 6");
  }

// Calculate distance between two stops
} else if (command === "calculate" && input.length === 7) {

  // Determine starting line
  if (input[3] === "N") {
    startLine = nTrain;
  } else if (input[3] === "L") {
    startLine = lTrain;
  } else if (input[3] === "6") {
    startLine = sixTrain;
  }

  // Determine end line
  if (input[5] === "N") {
    endLine = nTrain;
  } else if (input[5] === "L") {
    endLine = lTrain;
  } else if (input[5] === "6") {
    endLine = sixTrain;
  }

  // Declare and assign start & end stations
  var startStation = input[4];
  var endStation = input[6];

  // Declare and assign station indices
  var startIndex = startLine.indexOf(startStation);
  var endIndex = endLine.indexOf(endStation);

  // Check if stops are on the same line
  if (startLine === endLine) {
    // Calculate distance
    distance = Math.abs(startIndex - endIndex);

  // If there is a transfer at Union Square (the start station and end station are on different lines), calculate distance as sum of two trip, one to Union Square, the other from Union Square
  } else {
    var startUnionIndex = startLine.indexOf("unionSquare");
    var endUnionIndex = endLine.indexOf("unionSquare");
    var startToUnionDistance = Math.abs(startIndex - startUnionIndex);
    var endToUnionDistance = Math.abs(endIndex - endUnionIndex);
    distance = startToUnionDistance + endToUnionDistance;
  }
  // Print the final distance to the console
  console.log("You are " + distance + " stops away.");

// User has not entered correct # of arguments, give them an error report
} else {
  console.log("Please provide 4 arguments - STARTINGLINE STATIONNAME ENDINGLINE STATIONNAME");
}