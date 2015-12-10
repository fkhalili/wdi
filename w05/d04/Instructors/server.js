var express = require('express');
var ejs = require('ejs')
var app = express();





app.get("/", function(req, res) {
  res.send("Hello whirld");
});

app.get("/hello/:name/:age", function(req, res) {
  // var urlRouteName = req.params.name
  // var queryName = req.query.name;
  // res.send("URL Route name: " + urlRouteName + " Query Parameter name : " + queryName)
  // var age = req.query.age;
  var template = "<h1>Hi <%= name %>. You're <%= age %> years old.</h1>"
  var myData = req.params;
  var rendered = ejs.render(template, req.params) // {name: "aAditri", age: "whatever"}
  res.send(rendered);
})

app.get("/hello/*", function(req, res) {

  res.send("Gotta gimme a name, bro!")
})


app.get("*", function(req, res) {
  res.send("I don't know what you're trying to do.")
})





app.listen(3000, function() {
  console.log("Listening on THREE THOUSAND")
})