console.log("Linked scripts.js");


var movies;
var 'searchOMDB' = function(title) {

	$.ajax({
		url: "http://www.omdbapi.com/?t="+title,
		method: "GET",
		dataType: "json",
		success: function(data) {
			console.log(data)
		},
		error: function(error) {

		}
	});
}




// $.ajax({
// 	url: "/movies",
// 	method: "GET",
// 	data: {},
// 	dataType: "json",
// 	success: function(data) {
// 		console.log(data)
// 		movies = data
// 		var firstMovie = data[0];
// 		var moviesListItem = $("<li>"+firstMovie.Title+"</li>")
// 		$(".current-movies-list").eq(0).append(moviesListItem)
// 	},
// 	error: function(error) {
// 		console.log(error)
// 	}
// });

// $.ajax({
// 	url: "/movies",
// 	method: "POST",
// 	data: {},
// 	dataType: "json",
// 	success: function(data) {

// 	},
// 	error: function(error) {

// 	}
// })