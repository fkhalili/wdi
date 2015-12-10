console.log("main js is linked");




var submit = document.querySelector("#submit");
var ul = document.querySelector("ul");
var input = document.querySelector("#input");


submit.addEventListener("click", function(event) {
	
	var inputValue = document.querySelector("#input").value;
	var li = document.createElement("li");
	li.textContent = inputValue;
	ul.appendChild(li);
	input.value = "";
});

ul.addEventListener("click", function(event) {
	var allLi = document.querySelectorAll("li");
	var li = document.querySelector("li");
	console.log(allLi);
	console.log(event.target)
	ul.removeChild(event.target);
});

// input.addEventListener("onkey", function(event {
// 	var inputValue = document.querySelector("#input").value;
// 	var li = document.createElement("li");
// 	li.textContent = inputValue;
// 	ul.appendChild(li);
// 	input.value = "";
// })