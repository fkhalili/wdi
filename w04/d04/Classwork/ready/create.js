var ejs = require("ejs");

var random = [
	{
		id:1,
		name:"ruffus",
		color:"pink"
	},
	{
		id:2,
		name:"clifford",
		color:"red"
	},
	{
		id:3,
		name:"garfield",
		color:"orange"
	}
];


var puppyTemplate = "<h3><%= puppy.name %></h3>" +
					"<p><%= puppy.color %></p>";

var puppiesTemplate = "<% puppies.forEach(function(puppy) { -%>" +
						puppyTemplate +
						"<% }); -%>";




var finishedHtml = ejs.render(puppiesTemplate, {puppies:random})

console.log(finishedHtml);











