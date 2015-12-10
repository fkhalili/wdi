var net = require("net");
var port = 2000;

var server = net.createServer(function(client) {
	console.log("connected");
	client.setEncoding("utf8");
	
	//add function
	var add = function add(first, second) {
		var total = first + second;
		total = total.toString();
		client.write(total + "\n");
	}
	//subtract function
	var subtract = function subtract(first, second) {
		var total = first - second;
		total = total.toString();
		client.write(total + "\n");
	}
	//multiply function
	var multiply = function multiply(first, second) {
		var total = first * second;
		total = total.toString();
		client.write(total + "\n");
	}
	//divide function
	var divide = function divide(first, second) {
		var total = first / second;
		total = total.toString();
		client.write(total + "\n");
	}


	client.on("data", function(clientData) {
		var string = clientData;
		var split = string.trim().split(" ");
		var command = split[0];
		var first = parseInt(split[1]);
		var second = parseInt(split[2]);
		console.log(command, first, second);
		
		if (string.length != 3) {
			client.write("Please use command keys: add or subtract or multiply or divide. The type in the two number you would like to do the action on. \nFor example: add 4 5 \n");
		}
		else if (command === "add"){
			add(first, second);
		}
		else if(command === "subtract"){
			subtract(first,second);
		} 
		else if(command === "multiply"){
			multiply(first,second);
		} 
		else if(command === "divide"){
			divide(first,second);
		}
		else {
			client.write("Please use command keys: add or subtract or multiply or divide. The type in the two number you would like to do the action on. \nFor example: add 4 5 \n");
		}

	})

})



server.listen(port, function(){
	console.log("listening to " + port);
})