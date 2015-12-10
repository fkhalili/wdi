var fs = require("fs");
var ejs = require("ejs")

var fileName = process.argv[2];


fs.readFile(fileName, "utf8", function(err, data) {
	if (err) {
		console.log(err)
	}
	else {
		var parsed = JSON.parse(data);

		fs.readFile("template.html.ejs", "utf8", function(err, data) {
			if (err) {
				console.log(err);
			}
			else {
				var template = data;
				}
		
			var rendered = ejs.render(template, {parsed: parsed});
			fs.writeFile("sightings.html", rendered, function(err) {
				if(err) {
					console.log(err)
				}
			})

		}) 

	}
})