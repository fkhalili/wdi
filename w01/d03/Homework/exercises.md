## solution 1

````
/* execute a variable called string
execute a variable called logs
execute a variable called logCounts to 0
set string to a prompt asking "what string will you use?"
set logs to a prompt asking "how many logs would you like?"
while logCounts is less than 3
	print the string
	add 1 to logsCounts
*/

var string;
var logs;
var logCounts = 0;

string = prompt("What word would you like to use?");
logs = prompt("How many logs would you like?");
logs = parseInt(logs);

while (logCounts < logs) {
	console.log(string);
	logCounts ++;
}

````

## solution 2

````
/*
execute a variable day
set day to prompt asking "choose a day of the week"
if day is equal to one of the five days of the weekday
	print "weekday"
else if day is equal to one of the days of the weekend
	print "weekend"
else
	print "we only use the roman calendar here"
*/

var day;
day = prompt("Choose a day of the week");

if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
	console.log("weekday");
}
else if (day === "saturday" || day === "sunday") {
	console.log("weekend");
}
else {
	console.log("We only use the Roman calendar here");
}

````

## solution 3

````
/*
execute a variable called inputDish
send an alert with the menu on it
set inputDish to prompt asking "What dish would you like?"
if inputdish is a vegan dish
	print "this cuisine is vegan friendly"
else if inputdish is a non-vegan dish
	print "vegans beware!"
else
	print "oh, is that paleo or something?"
*/

var inputDish;
alert("On the menu tonight: steak, fruit salad, tofurkey, porkchops.");
inputDish = prompt ("What would you like to order?");

if (inputDish === "fruit salad" || inputDish === "tofurkey") {
	console.log("This cuisine is vegan friendly");
}
else if (inputDish === "steak" || inputDish === "pork chops") {
	console.log("Vegans, beware!");
}
else {
	console.log("Oh, is that paleo or something?");
}

````

## solution 4

````
/*evaluate a variable called name
set name to a prompt asking "whats your first name?"
if the length of the name is less than 5 letters
	print "my, thats a short name"
else if the length of the name is less than 9 letters
	print "Thats a good long name"
else if the name is equivalent to "daniel"
	print "thats my name too!"
else
	print "finding a nametag must be difficult for you"
*/

var name;
name = prompt("What's your first name?");

if (name === "daniel") {
	console.log("That's my name too!");
}
else if (name.length < 5) {
	console.log("My, that's a short name");
}
else if (name.length < 9) {
	console.log("That's a good long name");
}
else {
	console.log("Finding a nametag must be difficult for you");
}

````

## solution 5

````
var name = prompt("Enter a string");
var nameArray = name.split("");
var newName = "";

for (i = name.length - 1; i >= 0 ; i--) {
	newName += nameArray[i];
}

console.log(newName);

````

## solution 6

````

var highNumber = prompt("Choose a higher number");
var lowNumber = prompt("Choose a lower number");
var i = lowNumber;

while (i++ < highNumber - 1){
	console.log(i);
}

````

## solution 7

````
var totalCost = prompt("Whats the total cost?");
var peers = prompt("How many peers are you?");
var percTip = prompt("What percent tip would you like to leave?  %");
var tipTotal = 0;
var perPerson = 0;
var totalBill = 0;

totalCost = parseInt(totalCost);
percTip = parseInt(percTip);
peers = parseInt(peers);

tipTotal = (percTip / 100) * totalCost;
totalBill = totalCost + tipTotal;
perPerson = totalBill / peers;

console.log(perPerson);

````
