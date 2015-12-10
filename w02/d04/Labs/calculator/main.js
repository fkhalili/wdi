console.log("main js is linked");

var input1 = document.querySelector("#first-num");
var input2 = document.querySelector("#second-num");

var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var answer = document.querySelector("#answer");

plus.addEventListener("click", function(element) {
	var int1 = parseInt(input1.value);
	var int2 = parseInt(input2.value);
	var total = int1 + int2;
	answer.textContent = " = " + total; 
});

minus.addEventListener("click", function(element) {
	var int1 = parseInt(input1.value);
	var int2 = parseInt(input2.value);
	var total = int1 - int2;
	answer.textContent = " = " + total; 
});

multiply.addEventListener("click", function(element) {
	var int1 = parseInt(input1.value);
	var int2 = parseInt(input2.value);
	var total = int1 * int2;
	answer.textContent = " = " + total; 
});

divide.addEventListener("click", function(element) {
	var int1 = parseInt(input1.value);
	var int2 = parseInt(input2.value);
	var total = int1 / int2;
	answer.textContent = " = " + total; 
});