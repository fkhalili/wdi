var express = require("express");
var fs = require("fs");
var app = express();

app.get("/", function(req, res){
  var html = fs.readFileSync("./index.html","utf8");
  res.send(html);
});

app.get("/domath", function(req, res){
  console.log(req.query);
  var operation = req.query.operation;
  var numberOne = parseInt(req.query.numberone);
  var numberTwo = parseInt(req.query.numbertwo);
  if (operation === "add"){
    res.send((numberTwo + numberOne).toString());
  } else if (operation === "subtract") {
    res.send((numberOne - numberTwo).toString());
  } else if (operation === "divide") {
    res.send((numberOne / numberTwo).toString());
  } else if (operation === "multiply") {
    res.send((numberOne * numberTwo).toString());
  }
})

app.listen(3000, function(){
  console.log("HEY");
});