var fs = require("fs");
var express = require("express");
var ejs = require("ejs");
var bodyParser           = require("body-parser");
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

var app = express();

app.set("view_engine", "ejs");

app.use(urlencodedBodyParser);


var getLetters = function getLetters() {
	var letters = fs.readFileSync("data.json", "utf8");
	var newletters = JSON.parse(letters);
	return newletters;
}


var saveLetters = function saveLetters(letter) {
  fs.writeFileSync('data.json', letter);
};


app.get("/", function(req, res) {
	res.redirect("/letters");
})

app.get("/letters", function(req, res) {
	var theseLetters = getLetters();
	res.render("templateLetters.html.ejs", {theseLetters: theseLetters});
})


app.get("/letters/new", function(req, res) {
	res.render("templateNew.html.ejs");
})


app.post("/letters", function(req, res) {
  var letters = getLetters();
  var newLetter = req.body;
  newLetter.id = letters.length;
  letters.push(newLetter);
  updatedData = JSON.stringify(letters)
  saveLetters(updatedData);
  res.redirect("/letters");
})


app.get("/letters:id", function(req, res) {
	var id = req.params.id;
	var theseletters = getLetters();
	theseletters.forEach(function(element) {
		if (element.id = id) {
		res.render("templateID.html.ejs", {letterID: element});
		} 
	})

})






app.listen(3000, function() {
  console.log('listening on port 3000!');

});