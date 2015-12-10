var ejs = require("ejs");
var fs = require("fs");

var command = process.argv[2];

if (command === "add" && process.argv.length < 9) {
	console.log("Each poster must contain the following information - the title, runtime, rating (ie, R, PG-13), year of release, and two actors who are in the film.")
}

else if (command === "add" && process.argv.length === 9) {
	var title = process.argv[3];
	var runtime = process.argv[4];
	var rating = process.argv[5];
	var year = process.argv[6];
	var actor1 = process.argv[7];
	var actor2 = process.argv[8];
	var myObject = {
		title : title,
		runtime : runtime,
		rating : rating,
		year : year,
		actor1 : actor1,
		actor2 : actor2	
	}	
 
	fs.readFile("data.json","utf8", function(err,data) {
		if (err) {
			console.log(err);
		}
		else {
			var parsed = JSON.parse(data);
			parsed.push(myObject);
			var stringify = JSON.stringify(parsed);

			fs.writeFile("data.json",stringify ,function(err) {
				if (err) {
					console.log(err);
				}
			})
		}
	})
	
}

else if (command === "show") {
	fs.readFile("data.json","utf8", function(err,data) {
		if (err) {
			console.log(err);
		}
		else {
			var parsed = JSON.parse(data);
			parsed.forEach(function(element) {
				console.log(element.title);
				console.log(element.runtime);
				console.log(element.rating);
				console.log(element.year);
				console.log(element.actor1);
				console.log(element.actor2);
			})
		}
	})
}

else if (command === "poster") {
	fs.readFile("data.json","utf8", function(err,data) {
	if (err) {
		console.log(err);
	}
	else {
		var parsed = JSON.parse(data);
		var template = "";
		fs.readFile("template.html.ejs", "utf8", function(err,data) {
			if (err) {
				console.log(err);;
			}
			else {
				template = data;
			}
		})
		var rendered = ejs.render(template, {parsed: parsed});
		console.log(rendered);
	}
})
}
