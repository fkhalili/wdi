console.log("main linked!");

var green = function green () {
	var div = document.querySelector("div");
	div.className = "green";
}

var bounce = function bounce () {
	var div = document.querySelector("div");
	div.className = "animated infinite bounce";
}

var greenButton = document.querySelector("#make-green");

greenButton.addEventListener("click", green);

var bounceButton = document.querySelector("#make-bounce");

bounceButton.addEventListener("click", bounce);

var div2 = document.querySelectorAll("div")[1];

div2.addEventListener("click", function(event) {
	console.log(event.target);
	div2.className = "green";
});

var submitColor = document.querySelector("#submit");

submitColor.addEventListener("click", function(event) {
	var currentInput = document.querySelector("#main-input").value
	var div = document.querySelector("div");
	div.style["background-color"] = currentInput;
	document.querySelector("#main-input").value = "";
})

var bounceAll = document.querySelector("#bounce-all");

bounceAll.addEventListener("click", function() {
	var allDiv = document.querySelectorAll("div");
	
	for (var i = 0; i < allDiv.length; i++) {
		var div = allDiv[i];
		div.className = "animated infinite bounce";
	}
})

var unbounceAll = document.querySelector("#unbounce-all");

unbounceAll.addEventListener("click", function() {
	var allDiv = document.querySelectorAll("div");
	for (var i = 0; i < allDiv.length; i++) {
		var div = document.querySelectorAll("div")[i];
		div.className = "";
	}
})