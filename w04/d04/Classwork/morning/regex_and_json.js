var fs = require("fs");

fs.readFile("emailList.json", "utf8", function(err, data) {
	var emails = data.match(/\w+@\w+\.\w+/gi);
	var parsed = JSON.parse(data);
	parsed.emails = emails;
	var jEmails = JSON.stringify(parsed);

	fs.writeFile("emailList.json", jEmails, function(err) {
		if (err) {
			console.log(err);
		}
	});
});