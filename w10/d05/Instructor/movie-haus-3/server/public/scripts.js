console.log("Linked scripts.js");

var movies;

$.ajax({
  url: '/movies',
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    movies = data;
    var firstMovie = movies[0];
    var movieListItem = $('<li>' + firstMovie.Title + '</li>')
    $('.current-movies-list').eq(0).append(movieListItem);
  },
  error: function(error) {
    console.log(error);
  }
});

var searchOmdb = function searchOmdb(title){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=' + title,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  })
}


// $.ajax({
//   url: '/movies',
//   method: 'POST',
//   data: {},
//   dataType: 'json',
//   success: function() {

//   },
//   error: function(){

//   }
// })










