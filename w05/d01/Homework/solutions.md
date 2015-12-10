##Voicemail

````javascript


var net = require("net");
var port = 2000;
var fs = require("fs");


var server = net.createServer(function(client) {
	console.log("connected");
	client.setEncoding("utf8");

	//record messages
	var message = function message(recording) {

			var leftMessage = recording;
			fs.readFile("message.json", "utf8", function(err, data) {
				if (err) {
					console.log(err);
				}
				else {
					var parsed = JSON.parse(data);
					var object = {
						message:leftMessage,
						id:parsed.length
					};
					parsed.push(object);
					var stringify = JSON.stringify(parsed);
					fs.writeFile("message.json", stringify, function(err) {
						if (err) {
							console.log(err);
						}
					})
				}
			})


	};


	//play messages
	var read = function read() {
		fs.readFile("message.JSON", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else{
				var parsed = JSON.parse(data);
				parsed.forEach(function(element) {
					client.write("\nMessage #" + element.id + "\n" + element.message + "\n\n")
				})
			}
		})
	}

	//delete specific message
	var deleteM = function deleteM(id) {
		client.write("\n\nMessage #" + id + " has been deleted\n\n")
		fs.readFile("message.json", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else {
				var parsed = JSON.parse(data);
				var counter = 0;
				var filtered = parsed.filter(function(element) {
					if (element.id != id) {
						element.id = counter;
						counter ++;
						return element;
					}
				})
				var stringify = JSON.stringify(filtered);
				fs.writeFile("message.json", stringify, function(err) {
					if (err) {
						console.log(err);
					}
				})
			}
		})
	}



	client.write("\nHi! You've reached the localhost address. \n----\nHit | record | and the message you would like to record\n----\n\n----\nhit | play | to go through the messages\n----\n\n----\nhit | reset | to reset all your messages\n----\n\n----\nhit | delete | and the id number of the message you would like to delete\n----\n\n")


	client.on("data", function(clientData) {

		var input = clientData.trim().split(" ");
		var command = input[0];

		if (command === "play"){
			read();
			client.write("\n\n----\n | record | | play | | reset | | delete |\n----\n");
		}
		else if (command === "record") {
			client.write("\n\nThank you for leaving a message\n\n")
			input.shift();
			var recording = input.join(" ");
			message(recording);
			client.write("\n\n----\n | record | | play | | reset | | delete |\n----\n");
		}
		else if (command === "reset") {
			client.write("\n\nAll messages have been deleted\n\n")
			var reset = "[]";
			fs.writeFile("message.json", reset, function(err) {
				if (err) {
					console.log(err);
				}
			})
			client.write("\n\n----\n | record | | play | | reset | | delete |\n----\n");
		}
		else if (command === "delete" && input.length === 2) {
			var messageNum = parseInt(input[1]);
			deleteM(messageNum);
			client.write("\n\n----\n | record | | play | | reset | | delete |\n----\n");
		}
		else {
			client.write("\nHi! You've reached the localhost address. \n----\nHit | record | and the message you would like to record\n----\n\n----\nhit | play | to go through the messages\n----\n\n----\nhit | reset | to reset all your messages\n----\n\n----\nhit | delete | and the id number of the message you would like to delete\n----\n\n")

		}

	})


})



server.listen(port, function(){
	console.log("listening to " + port);
})

````
