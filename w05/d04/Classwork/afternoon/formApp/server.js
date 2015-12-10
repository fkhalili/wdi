var express = require('express');
var fs = require("fs");
var ejs = require("ejs");

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/formfun', function (req, res){
  var index = fs.readFileSync("./index.html", "utf8");
  res.send(index);
});

app.get('/forminput', function(req, res) {
  console.log("We've got a route for that!");
  console.log(req.query);
  res.send(req.query.myname);
});

app.get('/selection', function(req, res) {
	console.log(req.query);
	var number = parseInt(req.query.numbers);
	var total =(number * 3).toString();
	res.send(total);
})

app.get('/radios', function(req, res) {
	console.log(req.query);
	if (req.query.sex === "male"){

		res.send("<h1 style='color:blue'>its a boy!</h1>")
	}
	else if (req.query.sex === "female"){

		res.send("<h1 style='color:pink'>its a girl!</h1>")
	}

})



app.get("/megaform", function(req, res) {
	var name = req.query.name;
	var subject = req.query.subject;
	var flavor = req.query.flavor;

	var template ="<h1>Hello <%= name %> , its a pleasure to meet you. I see your favorite school subject is <%= subject %> and that you enjoy <%= flavor %> ice-cream. COOL!</h1>"

	var html = ejs.render(template, req.query);

	res.send(html);
})



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
