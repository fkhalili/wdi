var net = require("net");
var port = 2000;
var fs = require("fs");

var server = net.createServer(function(client) {
	console.log("connected");
	client.setEncoding("utf8");

	fs.readFile("guessWho.json", "utf8", function(err, data) {
		var parsed = JSON.parse(data);
		
	})

	client.on("data", function(clientData) {
		
		var string = clientData;
		var split = string.trim().split(" ");
		var command = split[0];
		var fruit = split[1];
		var delic = parseInt(split[2]);
	}

	})

})



server.listen(port, function(){
	console.log("listening to " + port);
})