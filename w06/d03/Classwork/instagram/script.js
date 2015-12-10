var fs = require("fs");
var ejs = require("ejs")
var request = require("request");
var express = require("express");
var _ = require("underscore");
var app = express();


var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(3000, function() {
	console.log("listening!");
})

app.get("/", function(req, res) {
	res.redirect("/instagram");
})

app.get("/instagram", function(req, res) {
	var data = fs.readFileSync("./data.json", "utf8");
	var template = fs.readFileSync("./views/index.html", "utf8");
	var html = ejs.render(template, {data:data.save});
	res.send(html);
})

app.get("/instagram/search", function(req, res) {
	var search = req.query.search;
	var access = "f565b1f218b14cbcaeceba337f050343";
	request.get("https://api.instagram.com/v1/tags/"+search+"/media/recent?client_id="+access, function(err, response, body) {
		var parsed = JSON.parse(body);
		var data = parsed.data;
		var pics = {"search":search, "images":[]};
		data.forEach(function(element) {
			pics.images.push(element.images.low_resolution.url);
		})
		var template = fs.readFileSync("./views/search.html", "utf8");
		console.log(pics);
		var html = ejs.render(template, {pics:pics});
		res.send(html);
	});
})

app.post("/instagram", function(req, res) {
	var info = req.body;
	var data = fs.readFileSync("./data.json", "utf8")

	info.id = parseInt(data.counter) + 1;
	data.counter = parseInt(data.counter) + 1;
	
	data.save.push(info);
	var stringify = JSON.stringify(data);
	  
	fs.writeFileSync("data.json", stringify);
	res.redirect("/instagram");
})