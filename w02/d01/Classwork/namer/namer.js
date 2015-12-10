var requestName = function requestName(person) {
var name = prompt("What is your " + person + " name?");
return name;
}

var sayThankyou = function sayThankyou(name) {
	alert(name + ", Thank you very much");
}

sayThankyou(requestName("first"));
sayThankyou(requestName("last"));
sayThankyou(requestName("mom's"));
sayThankyou(requestName("dad's"));
sayThankyou(requestName("dog's"));