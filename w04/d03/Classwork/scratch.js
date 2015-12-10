// //command line message

// var fs = require("fs");
// var file = process.argv[2];
// var text = process.argv[3];


// var message = function message(file, text) {
// 	var file = file;
// 	var text = text;
// 	fs.writeFile(file, text, function(error, buffer) {
// 		if (error) {
// 			console.log(error);
// 		}
// 	})
// }

// message(file, text);

// //read then write
// var fs = require("fs");
// var file = process.argv[2];
// var newFile = process.argv[3];

// var readWrite = function readWrite (file, newFile) {
// 	fs.readFile(file, function(error, data) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {
// 			var data = data.toString();
// 			fs.writeFile(newFile, data, function(error, buffer) {
// 				if (error) {
// 					console.log(error);
// 				}

// 			})

// 		}
// 	})
// }


// readWrite(file, newFile);



// //append to file
// var fs = require("fs");
// var file = process.argv[2];
// var text = process.argv[3];

// var append = function append (file, text) {
// 	fs.appendFile(file, text, function(error) {
// 		if (error) {
// 			console.log(error);
// 		}
// 	})
// }
// append (file, text);


// //count whales

// var fs = require("fs");
// var file = process.argv[2];

// var countWhales = function countWhales(file) {
// 	fs.readFile(file, function (error, data) {
// 		if (error) {
// 			console.log(error);
// 		}
// 		else {
// 			var data = data.toString();
// 			var whalers = data.match(/whale(?!\w)/gi);
// 			console.log(whalers.length);
// 		}
// 	})
// }

// countWhales(file);


//zzzz
var fs = require("fs");


var z = function z () {
	fs.readFile(dictionary.txt, function (error, data) {
		if (error) {
			console.log(error);
		}
		else {
			var data = data.toString();
			var zs = data.match()
		}
	})
}

