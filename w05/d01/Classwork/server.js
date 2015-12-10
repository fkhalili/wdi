var net = require("net");
var port = 2000;

var server = net.createServer(function(connection) {
	console.log("someone connected");
	//STFUU
	var inteveral = setInterval(write, 5000);
	function write() {
		
	connection.write("Are we there yet?! \n");
	}
	
	//how many are connected
	var counter = 0;
	counter ++;
	console.log(counter);
	if (counter > 5) {
		console.log("Im not sure how much longer i can take it");
	}


	//Echo
	connection.on("data", function(dataSentFromClient) {
		console.log("some data was just sent to me");
		var usefulData = dataSentFromClient.toString();
		if (usefulData.length > 12) {
			
		connection.write("Blah blah blah \n" + usefulData);
		}
		else {
			connection.write(usefulData);
		}
	})
})

server.listen(port, function() {
	console.log("server up and running, listening on port " + port);
})