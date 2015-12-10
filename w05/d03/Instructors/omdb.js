var request = require("request");

request.get("http://www.omdbapi.com/?t=aliens&y=&plot=short&r=json", function(err, response, body){
  console.log(body);
  var parsed = JSON.parse(body);
  console.log(parsed);
})