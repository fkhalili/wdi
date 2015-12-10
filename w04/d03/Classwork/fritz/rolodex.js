var command = process.argv[2];
var firstName = process.argv[3];
var lastName = process.argv[4];
var age = process.argv[5];

var fs = require("fs");


var addContact = function addContact(first, last, age) {
	
	var contacts = {name: first + " " + last, age: age};
	
	fs.readFile("./text.txt", "utf8", function (error, data) {
		if (error) {
			console.log(error);
		}
		else {
			var parsed = JSON.parse(data);
			parsed.push(contacts);
			var another = JSON.stringify(parsed);
		}
		
		fs.writeFile("text.txt", another, function (error) {
			if (error) {
				console.log(error);
			}
		})
	})
};

var listContact = function listContact() {
	fs.readFile("text.txt", "utf8", function (error, data) {
		if (error) {
			console.log(error);
		}
		else {
		var parsed = JSON.parse(data);
		console.log(data);
		}
	})
}

// var search = function search(element) {
// 	fs.readFile("text.txt", function (error, data) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {
// 		var data = data.toString();
// 		var contact = data.match();
// 		console.log(data);
// 		}
// 	})
// }



if (command  === "add") {
	addContact(firstName, lastName, age);
}
else if (command === "list") {
	listContact();
}



