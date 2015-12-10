var net = require("net");
var port = 2000;
var fs = require("fs");

var server = net.createServer(function(client) {
	console.log("connected");
	client.setEncoding("utf8");

	//add function
	var add = function add(fruit, delic) {
		var object = {
			fruit : fruit,
			delic : delic
		}
		fs.readFile("fruits.json", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else{
				
				var parsed = JSON.parse(data);
				parsed.push(object);
				var stringify = JSON.stringify(parsed);

				fs.writeFile("fruits.json", stringify, function(err){
					if (err) {
						console.log(err);
					}
				})

			}
		})
	}

	//list function
	var list = function list() {
		fs.readFile("fruits.json", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else {
				var parsed = JSON.parse(data);
				parsed.forEach(function(element) {
					var stringD = element.delic.toString();
					client.write(element.fruit + " deliciousness: " + stringD + "\n");
				})
			}
		})
	}


	//find function
	var find = function find(delic) {
		fs.readFile("fruits.json", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else {
				var parsed = JSON.parse(data);
				parsed.forEach(function (element) {
					var stringD = element.delic.toString();			
					if (element.delic === delic){	
						client.write(element.fruit + " deliciousness: " + stringD + "\n");
					}
				})
				client.write("Any new requests?\n")
			}
		})
	}

	client.on("data", function(clientData) {
		
		var string = clientData;
		var split = string.trim().split(" ");
		var command = split[0];
		var fruit = split[1];
		var delic = parseInt(split[2]);
		
		if (command === "add" && split.length === 3) {
			add(fruit, delic);
			client.write("added " + fruit + "\n");
		}
		else if (command === "list"){
			list();
		}
		else if (command === "find" && split.length === 2){
			delic = parseInt(fruit);
			find(delic);
		}
		else {
			client.write("Please uses the following commands: \nadd: To add a fruit by name and level of deliciousness. \nFor example: add kiwi 10 \n\nlist: To list all the fruits. \nFor Example: list \n\nfind: to find the fruit based on the level of deliciousness. \nFor example: find 10 \n")
		}

	})

})



server.listen(port, function(){
	console.log("listening to " + port);
})