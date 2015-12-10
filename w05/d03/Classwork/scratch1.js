var http = require("http");
var url = require("url");
var port = 3000;

var server = http.createServer();

server.on("request", function(request, response) {
	var requestUrl = request.url;
	var urlObject = url.parse(requestUrl);
	var pathName = urlObject.pathname;

	console.log(pathName);

	response.writeHead(200, {"Content-Type" : "text/html"})
	response.write("<h1>" + pathName + "</h1>");
	response.end();
});

server.listen(port,function() {
	console.log("listening to port " + port);
})
