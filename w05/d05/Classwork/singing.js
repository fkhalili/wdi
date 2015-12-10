var fs = require("fs");
var express = require("express");
var ejs = require("ejs");

var app = express();

app.get("/", function(req, res) {
	fs.readFile("singing.html", "utf8", function(err, data) {
		var index = data;
		res.send(index);
	})
})

























var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
