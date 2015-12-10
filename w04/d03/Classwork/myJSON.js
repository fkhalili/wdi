var fs = require("fs");

fs.readFile("myJSON.txt","utf8", function(err, data) {
	console.log(err);
	console.log(data);
	var parsed = JSON.parse(data);
	var randomObject = {face : "huge", toes : "fat"};
	parsed.push(randomObject);
	var myJSON = JSON.stringify(parsed);
	console.log(myJSON);
	fs.writeFile("myJSON.txt", myJSON, function(err) {
		console.log("thanks");
	});
});