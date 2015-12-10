var fs = require("fs");

var input = process.argv;
var command = input[2];
//I want my program to manipulate objects, but I can only store strings.
//I must think of a way to turn the strings I read into my program into
//objects so I can use all their fun methods.

//if my program is going to convert strings to objects, the strings should
//be stored in a systematic way that my program knows how to handle when I read
//them in


var testString = "andrew,fritz,28*matt,damon,42";


var parsed = testString.split("*");

parsed.forEach(function(e){
  var lol = e.split(",");
  console.log(lol[0]);
  console.log(lol[1]);
})

