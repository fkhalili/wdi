/*
*/

var number = prompt("input number");
number = parseInt(number);
var count = 1;
var sum = 0;

while (count <= number) {
	sum += count;
	count ++;
}
console.log(sum);


/*
*/

var time = prompt("choose a time from 0 - 23");
time = parseInt(time);

if (time < 7) {
	console.log((7 - time) + " hours till the alarm goes off");
}
else if (time > 7) {
	console.log("YOU'RE " + (time - 7) + " HOURS LATE!!");
}
else {
	console.log("It's GO TIME");
}


/*
*/

var number = prompt("Choose a number");
number = parseInt(number);

for (i = 1; i <= number; i++) {
	console.log(i);
	if ((i % 2) === 0) {
		console.log("a");
	}
	else if ((i % 3) === 0) {
		console.log("e");
	}
	else if ((i % 2) === 0 && (i % 4 !== 0)) {
		console.log("i");
	}
	else if ((i % 5) === 0) {
		console.log("0");
	}
	else {
		console.log("u");
	}
}

/*
*/

var borough = prompt("Choose a borough");

if (borough === "Manhattan" || borough === "manhattan") {
	console.log("Level 10 hipster-osity");
	alert("Level 10 hipster-osity");
}
else if (borough === "Brooklyn" || borough === "brooklyn") {
	console.log("Level 8 hipster-osity");
	alert("Level 8 hipster-osity");
}
else if (borough === "Queens" || borough === "queens") {
	console.log("Level 6 hipster-osity");
	alert("Level 6 hipster-osity");
}
else if (borough === "Bronx" || borough === "bronx") {
	console.log("Level 4 hipster-osity");
	alert("Level 4 hipster-osity");
}
else if (borough === "Staten Island" || borough === "state island") {
	console.log("level 2 hipster-osity");
	alert("Level 2 hipster-osity");
}
else {
	console.log("What even is that?");
	alert("What even is that?");
}

/*
*/

var combo = prompt("Choose the lock combo");
var comboArray = combo.split("");
var key1 = '1';
var key2 = '2';
var key3 = '3';
var key4 = '4';


if (comboArray[0] === '1' && comboArray[1] === '2' && comboArray[2] === '3' && comboArray[3] === '4') {
	console.log("UNLOCKED YOU'RE RICH!");
	alert("SUCCESS YOU'RE RICH!!!!");
}
else if (comboArray[0] === '1') {
	console.log("First digit is correct");
}
else if (comboArray[1] === '2') {
	console.log("Second digit is correct");
}
else if (comboArray[2] === '3') {
	console.log("Third digit is correct");
}
else if (comboArray[3] === '4') {
	console.log("Fourth digit is correct");
}
else {
	console.log("error");
	alert("Error")
}




