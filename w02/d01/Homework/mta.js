//initiating variables to store four different inputs
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var arg3 = process.argv[4];
var arg4 = process.argv[5];
var arg5 = process.argv[6];


//initiating variable to store different lines and stops in arrays
var lines = ["N", "L", "6"];
var stopsN = ["times_square","34th", "28th", "23rd", "union_square", "8th"];
var stopsL = ["8th", "6th", "union_square", "3rd", "1st"];
var stops6 = ["grand_central", "33rd", "28th", "23rd", "union_square", "astor_place"];

//BONUS: Adding new line Q to the object stations
var stopsQ = ["times_square", "herald_square", "union_square", "canal_st"];

var stations = { "N" : stopsN, "L" : stopsL, "6" : stops6, "Q" : stopsQ}


//initiating function to call the lines in the var lines array
var displayLines = function displayLines() {
	console.log(lines);
	return lines;
} 
 

//initiating function to call the stops in requested line
var displayStops = function displayStops(line) {
    if (stations[line] === null) {
    	console.log("Error, that is not a stop.");
    	return null;
	}
	else {
    	console.log(stations[line]);
    	return stations[line];
	}
}

//initiating function to record and call total stops from first stop to last stop
var totalStops = function totalStops(startingLine, stop1, endingLine, stop2) {
    var totalDistance = 0;
    //if same line
    if (startingLine === endingLine) {
        totalDistance = Math.abs(distance(startingLine, stop1, stop2));
    }
    //diferent lines so need to transfer from union_square. Sum up distance to and from union_square
    else {
        totalDistance = Math.abs(distance(startingLine, stop1, "union_square") + distance(endingLine, stop2, "union_square"));
    }
    console.log(totalDistance);
    return totalDistance;
}

//initiating function to record the number of stops from the first stop to the second stop 
var distance = function distance (line, stop1, stop2) {
    	if (stations[line].indexOf(stop1) === -1 || stations[line].indexOf(stop2) === -1) {
    		console.log("The stop does not exist");
    		return 0;
    	}
    	else {

    	return Math.abs(stations[line].indexOf(stop1) - stations[line].indexOf(stop2));
    	}
}

//initiating if-else statement to output the requests from the arguements
if (arg1 === "lines") {
	displayLines();
}
else if (arg1 === "stops") {
	displayStops(arg2);
}
else if (arg1 === "calculate") {
	totalStops(arg2, arg3, arg4, arg5);
}
else {
	console.log("You must provide the 4 arguments - STARTINGLINE STOP ENDINGLINE STOP");
}



 