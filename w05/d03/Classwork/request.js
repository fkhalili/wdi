var request = require("request");
var fs = require("fs");


//grabhtml

// var url = process.argv[2];

// request.get(url, function(err, response, body) {
// 	fs.writeFileSync("html.html", body);
		
// });



var title = process.argv[2];

title = title.replace(/_/g, '+');

var url = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json"

request.get(url, function(err, response, body) {
	fs.writeFileSync("movie.html", body);
	var parsed = JSON.parse(body);
	console.log(parsed.Plot)
		
});