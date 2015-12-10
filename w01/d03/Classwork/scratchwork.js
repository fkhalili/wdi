/* evaluate color
	if the color is "purple"
	print "thats anna's fave"
	else if the color is green
	print "ooh, that a nice spring color"
	else any other color
	print "no."
*/
var color = "";

if (color === "purple") {
	console.log ("that's anna's fave");
}
else if (color === "green") {
	console.log ("oooh, a nice spring color");
}
else {
	console.log ("No.");
}

/*evaluate string
evaluate length of string with string.length
if the length of the string is 3 letters or less
	print ok, "i think i can handle this"
else the length is not less than 3 letters
	print "hire another intern"
*/

var string = "hi";

if (string.length < 4) {
	console.log ("ok, I think I can handle this");
}
else {
	console.log ("hire another intern");
}

/*evaluate temperature
evaluate status
if the temperature is greater than 80 and the status is off
	print "turn the ac on!"
else if the temperature is greater than 80 and the status is on
	print "this thing is broken!"
else if the temperature is less than 80 and the status is on
	print "brrr, turn this thing off"
else when the temperature is less than 80 and the status is off
	print "not worth the electricty. leave it off"
*/

var temperature = 0;
var status = "";

if (temperature > 80 && status === "off") {
	console.log ("turn the ac on!");
} 
else if (temperature > 80 && status === "on") {
	console.log ("this thing is broken!");
}
else if (temperature < 80 && status === "on") {
	console.log("brrr, turn this thing off");
}
else {
	console.log("not worth the electricty");
}


/*practing using user input
arguements are stored and kept through what you input
must acces the array from prcess.argv
*/

var commandLineArguements = process.argv;
console.log (commandLineArguements [2]);

var string = commandLineArguements [2];

if (string.length <= 3) {
	console.log ("ok, I think I can handle this");
}
else {
	console.log ("hire another intern");
}