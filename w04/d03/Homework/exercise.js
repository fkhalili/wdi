// var fs = require("fs");

// fs.readFile("charizard.json", "utf8", function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else{
// 		var parsed = JSON.parse(data);
// 		var string = "You caught " + parsed.name + ". This is a pokemon which is both " + parsed.types[0].name + " and " + parsed.types[1].name + " type. It has a pokemon index of " + parsed.pkdx_id + ". Its attack and defense are " + parsed.attack + " and " + parsed.defense + ".";
// 		console.log(string);
// 	}
// })

// var fs = require("fs");

// fs.readFile("mean_girls.json", "utf8", function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else{
// 		var parsed = JSON.parse(data);
// 		var actors = parsed.Actors;
// 		actors = actors.split(", ");
// 		var string = parsed.Title + " was realeased in " + parsed.Year + " and starred " + actors[0] + ", " + actors[1] + " and " + actors[2] + ". This hilarious " + parsed.Runtime + " " + parsed.Genre + " is rated " + parsed.Rated + ".";
// 		console.log(string);
// 	}
// })


// var fs = require("fs");

// fs.readFile("sherlock.txt", "utf8", function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else{
// 		var data = data;
// 		data = data.split("\n");
// 		console.log(data.length);
// 	}
// })


// var fs = require("fs");
// var word = process.argv[2];

// fs.readFile("sherlock.txt", "utf8", function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else{
// 		var data = data;
// 		var expsn = new RegExp(word + "(?!\w)", "gi");
// 		var words = data.match(expsn);
// 		console.log(words.length);
// 	}
// })

// var fs = require("fs");
// var input = process.argv[2];

// // var inputs = process.argv.map(function(element) {
// // 	console.log(element);
// // })

// if (input === "show") {

// 	fs.readFile("movie.txt", "utf8", function(err, data) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			var parsed = JSON.parse(data);
// 			var shows = parsed.join(" ");
// 			console.log(shows);

// 		}
// 	})

// }
// else {

// 	fs.readFile("movie.txt", "utf8", function(err, data) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			var parsed = JSON.parse(data);
// 			parsed.push(input);
// 			var string = JSON.stringify(parsed);
// 			fs.writeFile("movie.txt", string, function(err, data) {
// 				if (err) {
// 					console.log(err);
// 				}
// 			})
// 		}
// 	})
	
// }







