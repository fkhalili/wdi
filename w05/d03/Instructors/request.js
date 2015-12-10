var request = require("request");


request.get("http://www.cnn.com", function(err, response, body){
  console.log(err);
  console.log(response);
  console.log(body);
})

