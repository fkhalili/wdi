var fs = require("fs");

fs.readFile("Census_Data_All.csv", "utf8", function(error, data) {
	if (error) {
		console.log(error);
	}
	else {
		var file = data;
		file = file.split("\n")
		var fileArray = [];

		for (var i = 1; i < file.length; i++) {
			var object = (file[i].split(","));
			var myObject = {
				state : object[0],
				totalPop2010 : object[1],
				rentedPop2010 : object[2],
				totalPop2000 : object[3],
				rentedPop2000 : object[4]
			}

			fileArray.push(myObject);
		}
			
			fileArray = JSON.stringify(fileArray);
			
			fs.writeFile("Census_Data_All.json", fileArray, function(error) {
				if (error) {
					console.log(error);
				}
			})

	}
})

fs.readFile("Census_Data_All.json", "utf8", function(error, data) {

	var parsed = JSON.parse(data);

	var stateHtml = "";
	parsed.forEach(function(element) {
		stateHtml += "<a href=" + element.state + ".html>" + element.state + "</a><br>";
		var content = "<h1>" + element.state + "</h1> \n <h2> Total Population 2010: " + element.totalPop2010 + "</h2>  \n  <h2>Population in Rented Housing 2010: " + element.rentedPop2010 + "</h2> \n <h2>Total Population 2000: " + element.totalPop2000 + "</h2>  \n <h2>Population in Rented Housing 2000: " + element.rentedPop2000 + "</h2>  \n" ;
		fs.writeFile(element.state + ".html", content, function(error) {
			if(error) {
				console.log(error);
			}
		})

	});

	fs.writeFile("index.html",stateHtml , function(error) {
		if (error) {
			console.log(error);
		}

	})

});


