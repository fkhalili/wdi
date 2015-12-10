var express = require('express');
var ejs = require("ejs");
var fs = require("fs");

var app = express();



app.get('/', function (req, res){
  var index = fs.readFileSync("calculator.html", "utf8");
  res.send(index);
});


app.get("/calculate", function(req, res) {
	var num1 = parseInt(req.query.num1);
	var num2 = parseInt(req.query.num2);
	var action = req.query.action;
	console.log(action);
	
	if (action === "+") {
		var total = num1 + num2;
		total = total.toString();
		res.send(total);
	}
	else if (action === "-") {
		var total = num1 - num2;
		total = total.toString();
		res.send(total);
	}
	else if (action === "*") {
		var total = num1 * num2;
		total = total.toString();
		res.send(total);
	}
	else if (action === "/") {
		var total = num1 / num2;
		total = total.toString();
		res.send(total);
	}

})













var server = app.listen(3000,function(){
	var host = server.address().address;
  	var port = server.address().port;
	console.log("listening to 3000")
})