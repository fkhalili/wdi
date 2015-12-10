var express = require("express");

var app = express();

app.get("/", function(req, res) {
	res.send("Hello all Y'all");
});


app.get("/hello/:name", function(req, res) {
	var urlRouteName = req.params.name;
	var name = req.query.name;

	// res.send("URL Route Name: " + urlRouteName + " Query Paramater Name: " + name);


	var age = req.query.age;
	res.send("Hi " + urlRouteName);
})



app.get("/hello", function(req, res) {
	res.send("Hello");
})



app.get("*", function(req, res) {
	res.send("WHATRE YOU TRYIN TO DO")
})


app.listen(3000, function() {
	console.log("Listening to 3000");
})
