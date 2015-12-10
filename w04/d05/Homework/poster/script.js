var ejs = require("ejs");
var fs = require("fs");

var command = process.argv[2];

if (command === "man") {
	console.log("\nTo add a poster to the data: node script.js movieTitle runtime rating yearReleased actor1 actor2 posterURL\nEX: node scripts.js add The_Dark_Knight 152_min PG-13 2008 Christian_Bale Heath_Ledger http://paulmmartinblog.files.wordpress.com/2011/07/the_dark_knight_poster.jpg\n\nTo see what movies are in the data, use the command show \nEX: node script.js show \n\nTo set all the data to the poster.html page just use the command poster \nEX: node script.js poster");
}
else if (command === "add" && process.argv.length < 10) {
	console.log("\nEach poster must contain the following information - the title, runtime, rating (ie, R, PG-13), year of release, two actors who are in the film, and a poster url. \nUse spaces for each input and _ for each word \nEX: add The_Dark_Knight 152_min PG-13 2008 Christian_Bale Heath_Ledger http://paulmmartinblog.files.wordpress.com/2011/07/the_dark_knight_poster.jpg\n\nUse the man command to read the manual. \nEX: node script.js man");
}

else if (command === "add" && process.argv.length === 10) {
	var title = process.argv[3].replace(/_/g , " ");
	var runtime = process.argv[4].replace(/_/g , " ");
	var rating = process.argv[5].replace(/_/g , " ");
	var year = process.argv[6].replace(/_/g , " ");
	var actor1 = process.argv[7].replace(/_/g , " ");
	var actor2 = process.argv[8].replace(/_/g , " ");
	var poster = process.argv[9];
	var myObject = {
		title : title,
		runtime : runtime,
		rating : rating,
		year : year,
		actor1 : actor1,
		actor2 : actor2,
		poster : poster
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
				console.log(element.poster);
				console.log("");
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
		fs.readFile("template.html.ejs", "utf8", function(err,data) {
			if (err) {
				console.log(err);;
			}
			else {
				var template = data;
				
				var rendered = ejs.render(template, {parsed: parsed});

				fs.writeFile("posters.html", rendered, function(){});
			}
		})
	}
})
}
else if (command === "remove" && process.argv.length === 4) {
	var title = process.argv[3].replace(/_/g , " ");
	fs.readFile("data.json", "utf8", function(err,data) {
		if (err) {
			console.log(err);
		}
		else {
			var parsed = JSON.parse(data);
			var newData = parsed.filter(function(element) {
				if(element.title != title) {
					return element
				}
			})
			var stringify = JSON.stringify(newData);
			fs.writeFile("data.json", stringify, function(err) {
				if (err){
					console.log(err);
				}
			})
		}
	})
}
else {
	console.log("\nUse the man command to read the manual. \nEX: node script.js man");
}
