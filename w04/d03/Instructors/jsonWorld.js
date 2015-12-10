var fs = require("fs");

var input = process.argv;
var command = input[2];

if (command === "add"){
  fs.readFile("./myjson.txt", "utf8", function(err,data){
    var parsed = JSON.parse(data);
    var firstName = input[3];
    var lastName = input[4];
    var age = input[5];
    var myObject = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    parsed.push(myObject);
    var backToJSON = JSON.stringify(parsed);
    console.log(backToJSON)
    fs.writeFile("./myjson.txt", backToJSON, function(err){
      console.log("thanks")
    })
  });
} else if (command === "list"){
  //read file in, parse to an object, iterate through array, log to console
  fs.readFile("./myjson.txt", "utf8", function(err,data){
    var parsed = JSON.parse(data);
    parsed.forEach(function(nordictrack){
      console.log("First Name: " + nordictrack.firstName + "Lst name: " + nordictrack.lastName);
    })
  })









}