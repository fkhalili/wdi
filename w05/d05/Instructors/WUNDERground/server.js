var express = require('express');
var request = require('request');
var fs = require('fs');

var app = express();

app.get('/', function(req,res) {
  var index = fs.readFileSync('./index.html', "utf8");
  res.send(index)
});

app.get("/weather", function(req, res) {
  var city = req.query.city.replace(" ", "_");
  var state = req.query.state;
  var requestURL = "http://api.wunderground.com/api/abc3ed8ecb8d84a6/conditions/q/"+state+"/"+city+".json";

  request.get(requestURL, function(err, response, body) {
    var parsedJSON = JSON.parse(body);
    var responseString = "It's " + parsedJSON.current_observation.temperature_string + " in " + parsedJSON.current_observation.display_location.full + "!";
    res.send(responseString);
  });
});

app.listen(3000, function() {
  console.log("I'm always listening. On port 3000.")
});
