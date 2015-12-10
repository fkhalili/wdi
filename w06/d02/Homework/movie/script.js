var fs = require("fs");
var ejs = require("ejs")
var request = require("request");
var express = require("express");
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
	res.redirect("/movies");
})

app.get("/movies", function(req, res) {
	var data = readData();
	var template = fs.readFileSync("./views/index.html", "utf8");
	var html = ejs.render(template, {data:data});
	res.send(html);
})

app.get("/movies/search", function(req, res) {
	var search = req.query.search;
	
	//REQUEST
	request.get("http://www.omdbapi.com/?t="+search, function(err, response, body){
	  var parsed = JSON.parse(body);
	  object = {
	  	"title":parsed.Title,
	  	"year":parsed.Year,
	  	"rating":parsed.Rated,
	  	"director":parsed.Director,
	  	"actors":parsed.Actors.split(","),
	  	"plot":parsed.Plot,
	  	"poster":parsed.Poster
	  }
	  var template = fs.readFileSync("./views/search.html", "utf8");
	  var html = ejs.render(template, object);
	  res.send(html);

	  	//POST
		app.post("/movies", function(req, res) {
			var data = readData();
			object.id = parseInt(data.counter) + 1;
			data.counter = parseInt(data.counter) + 1;
			
			data.movies.push(object);
			var stringify = JSON.stringify(data);
			  
			fs.writeFileSync("data.json", stringify);
			res.redirect("/movies");
		})
	})
})




app.get("/movies/:id", function(req, res) {
	var id = req.params.id;
	var data = readData();
	data.movies.forEach(function(element) {
		if (element.id == id) {
			var template = fs.readFileSync("./views/show.html", "utf8");
			var html = ejs.render(template, element);
			res.send(html);
		}
	})
})

app.get("/movies/:id/edit", function(req, res) {
	var id = req.params.id;
	var data = readData();
	data.movies.forEach(function(element) {
		if (element.id == id) {
			var template = fs.readFileSync("./views/edit.html", "utf8");
			var html = ejs.render(template, element);
			res.send(html);
		}
	})
})



app.put("/movies/:id", function(req, res) {
	var id = req.params.id;
	var data = readData();
	data.movies.forEach(function(element) {
		if (element.id == id) {
			element.time = req.body.time;
			var stringify = JSON.stringify(data);
     		fs.writeFileSync("./data.json", stringify);
      		res.redirect("/movies");			
		}
	})
})

app.delete("/movies/:id", function(req, res) {
	var id = req.params.id;
	var data = readData();
	var updatedData = data.movies.filter(function(element) {
		if (element.id != id) {
			return element;
		}
	})
	data.movies = updatedData;
	var stringify = JSON.stringify(data);
	fs.writeFileSync("./data.json", stringify);
	res.redirect("/");
})










