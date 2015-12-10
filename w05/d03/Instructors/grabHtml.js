var request = require("request");
var fs = require("fs");
var url = process.argv[2];

request.get(url, function(err,response,body){
  fs.writeFileSync("./data.html",body);
})