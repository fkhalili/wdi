console.log("linked")


var buttons = document.querySelectorAll("button");


for (var i = 0; i < buttons.length; i++) {
	helper(i)
}

function helper(i) {
	buttons[i].addEventListener("click", function() {
		console.log(i)
	})
}