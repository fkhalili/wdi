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
	res.redirect("/clothes");
})

app.get("/clothes", function(req, res) {
	var data = readData();
	var template = fs.readFileSync("./views/index.html", "utf8");
	var rendered = ejs.render(template, {"data":data})
	res.send(rendered);
})

app.get("/clothes/:id", function(req, res) {
	var id = req.params.id;	
	var data = readData();
	data.clothes.forEach(function(element) {
		if (element.id == id) {
			var cloth = element;
			var template = fs.readFileSync("./views/show.html", "utf8");
			var html = ejs.render(template, cloth);
			res.send(html);
		}
	})
})

app.get("/clothes/:id/edit", function(req, res) {
	var id = req.params.id;	
	var data = readData();
	data.clothes.forEach(function(element) {
		if (element.id == id) {
			var cloth = element;
			var template = fs.readFileSync("./views/edit.html", "utf8");
			var html = ejs.render(template, cloth);
			res.send(html);
		}
	})
})

app.put("/clothes/:id", function(req, res) {
	var id = req.params.id;	
	var data = readData();
	data.clothes.forEach(function(element) {
    if (element.id == id) {
      element.clothing_type = req.body.clothing_type;
      element.size = req.body.size;
      element.color = req.body.color;

      var json = JSON.stringify(data);
      fs.writeFileSync("./data.json", json);
      res.redirect("/");
    }
  });
});












