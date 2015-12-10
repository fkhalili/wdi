var express = require("express");
var ejs = require("ejs");

var app = express();



app.get("/tortilla/rice", function(req, res) {
	res.send("<h1>MMMMM</h1>");
})
app.get("/tortilla/guac", function(req, res) {
	res.send("<h1>AHHHHHH!</h1>")
})
app.get("/tortilla/:food", function(req, res) {
	var food = req.params.food;
	res.send("<h1>Well, " + food + " is good on a tortilla, too.</h1>")
})
app.get("/mine/:name", function(req, res) {
	var name = req.params.name;
	res.send("<h1>" + name + " makes the best burritos.</h1>")
})
app.get("/ingredients", function(req, res) {
	var ingredients = ["rice", "beans", "guac", "cheese", "jalepenos", "veggies", "tortilla"]
	var template = "<h1>Ingredients</h1><ul><%ingredients.forEach(function(item) {%> <li><%=item%></li> <%})%></ul>"
	var rendered = ejs.render(template, {"ingredients":ingredients})
	res.send(rendered);
})
app.get("/types", function(req, res) {
	var tortilla = req.query.tortilla;
	var meat = req.query.meat;
	var taste = req.query.taste;
	res.send("<h1>Types</h1><ul><li>tortilla: "+tortilla +"</li><li>meat: "+meat +"</li><li>taste: "+taste +"</li></ul>");
})
app.get("*", function(req, res) {
	res.send("<h1>Sorry, we only serve burritos here!</h1>")
})






app.listen(3000, function() {
	console.log("connected to 3000");
})