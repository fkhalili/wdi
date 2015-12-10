console.log("main js is linked");



// var div = document.querySelector("#div");

submit.addEventListener("click", function(event) {
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var submit = document.querySelector("#submit");


	if (one.checked === true && two.checked === false && three.checked === false) {
		var div = document.createElement("div")
		div.className = "img"
		document.body.appendChild(div);
		one.checked = false;
	}
	else if (one.checked === false && two.checked === true && three.checked === false) {
		var div = document.createElement("div")
		div.className = "img"
		document.body.appendChild(div);
		var div1 = document.createElement("div")
		div1.className = "img"
		document.body.appendChild(div1);
		two.checked = false;
	}
	else if (one.checked === false && two.checked === false && three.checked === true) {
		var div = document.createElement("div")
		div.className = "img"
		document.body.appendChild(div);
		var div1 = document.createElement("div")
		div1.className = "img"
		document.body.appendChild(div1);
		var div2 = document.createElement("div")
		div2.className = "img"
		document.body.appendChild(div2);
		three.checked = false;
	}
	else {
		var h1 = document.querySelector("h1");
		h1.textContent = "please choose one option"
		one.checked = false;
		two.checked = false;
		three.checked = false;
	}
});

