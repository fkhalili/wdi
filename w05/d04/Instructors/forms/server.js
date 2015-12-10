var express = require('express');
var fs = require("fs");
var app = express();



//create a form (the megaform) that gathers a user's name with a text input, favorite subject in school
//(wdi) with a select, and their favorite ice cream flavor (strawberry, chocolate, green) from a radio input.
//render the response to the user. If you are bored, or finished, use EJS to render a more attractive template.

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

app.get('/radios', function(req, res){
  console.log(req.query);
  var ourCollectiveSex = req.query.sex;
  if (ourCollectiveSex === "male"){
    var html = "<h1 style='color:blue';> BOY </h1>";
    res.send(html);
  } else {
    var html = "<h1 style='color:pink';> GIRL </h1>";
    res.send(html);
  }
});

app.get('/selection', function(req, res){
  console.log(req.query);
  var myNumber = parseInt(req.query.numbers);
  var result = 3 * myNumber;
  result = result.toString();
  res.send(result);
});


app.get('/megaform', function(req,res){
  console.log("hit the megaform route!");
  console.log(req.query);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
