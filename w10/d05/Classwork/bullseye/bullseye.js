// ** TASK ** //
// You are an Archer that is extremely precise and never miss.
// Not even in the bubbly distorted world of JavaScript.

// Add click event handlers to each bullseye ring that will alert when you hit
// your desired target on the bullseye. Since you are in JavaScript
// world your shot could bubble to other rings in the bullseye. Remember you
// have a reputation to uphold, so make sure your shots do not bubble to other rings.


// ** BONUS ** //
// Write a function to highlight the ring you hit with the color yellow.

console.log("linked");

var target1 = $("#t1");
var target2 = $("#t2");
var target3 = $("#t3");

var body = $("body");

target1.click(function(event) {
	event.stopPropagation();
	alert("green Target, nice shot!");
});

target2.click(function(event) {
	event.stopPropagation();
	alert("blue Target, nice shot!");
});

target3.click(function(event) {
	event.stopPropagation();
	alert("red Target, nice shot!");
});

body.click(function(event) {
	event.stopPropagation();
	alert("ya missed!");
});