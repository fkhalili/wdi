var express = require("express");
var fs = require("fs");
var ejs = require("ejs");
var app = express();

var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(3000, function() {
	console.log("listening!");
})


var readData = function readData() {
	var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
	return data;
}

app.get("/", function(req, res) {
	res.redirect("/fruits");
})

app.get("/fruits", function(req, res) {
	var data = readData();
	var template = fs.readFileSync("./views/index.html", "utf8");
	var html = ejs.render(template, {data:data});
	res.send(html);
})

app.get("/fruits/new", function(req, res) {
	var html = fs.readFileSync("./views/new.html", "utf8");
	res.send(html);
})

app.get("/fruits/:id", function(req, res) {
	var id = req.params.id;
	var data = readData();
	data.fruits.forEach(function(element) {
		if (element.id == id) {
			var fruit = element;
			var template = fs.readFileSync("./views/show.html", "utf8");
			var html = ejs.render(template, fruit);
			res.send(html);
		}
	})
})

app.get("/fruits/:id/edit", function(req, res) {
	var id = req.params.id;
	var data = readData();
	data.fruits.forEach(function(element) {
		if (element.id == id) {
			var fruit = element;
			var template = fs.readFileSync("./views/edit.html", "utf8");
			var html = ejs.render(template, fruit);
			res.send(html);
		}
	})
})


app.post("/fruits", function(req, res) {
  var data = readData();
  var newFruit = req.body
  newFruit.id = parseInt(data.counter) + 1;
  data.counter = parseInt(data.counter) + 1;
  
  data.fruits.push(newFruit);
  var stringify = JSON.stringify(data);
  
  fs.writeFileSync("data.json", stringify);
  res.redirect("/fruits");
})

app.put("/fruits/:id", function(req, res) {
	var id = req.params.id;	
	var data = readData();
	data.fruits.forEach(function(element) {
    if (element.id == id) {
      element.type = req.body.type;
      element.color = req.body.color;
      element.quantity = req.body.quantity;
      element.date = req.body.date;

      var stringify = JSON.stringify(data);
      fs.writeFileSync("./data.json", stringify);
      res.redirect("/");
    }
  });
});



app.delete("/fruits/:id", function(req, res) {
	var id = req.params.id;
	var data = readData();
	var fruits = data.fruits;
	var updatedData = fruits.filter(function(element) {
		if (element.id != id) {
			return element;
		}
	})
	data.fruits = updatedData;
	var stringify = JSON.stringify(data);
	fs.writeFileSync("./data.json", stringify);
	res.redirect("/");
});

