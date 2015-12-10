// Listen (wait) for a request
// Request comes in
// Decide what to do with the request
// Send request to DB for data
// Get back data
// Process the data icdnto HTML (EJS)
// Send the response

var fs   = require('fs');
var http = require('http');
var url  = require('url');
var port = 3000;
var server = http.createServer();
var tomCruiseDB = JSON.parse(fs.readFileSync('cruise_data.json', 'utf8'));

server.on('request', function(request, response) {
  var requestUrl = request.url;
  var urlObject = url.parse(requestUrl);
  var pathname = urlObject.pathname;
  var query    = urlObject.query;
  console.log(pathname);
  console.log(query);

  if (pathname === '/') {
    if(query) {
      query = query.split("=");

      if(query[0] === "t") {
        tomCruiseDB.forEach(function(tomMovie) {
          if (tomMovie.Title.toLowerCase() === query[1].toLowerCase()) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(tomMovie));
            response.end();
          }
        });
      }


    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('Welcome to the Tom Cruise Database');
      response.end();
    }


  } else {

  }


});

server.listen(port, function() {
  console.log('Yes, I am listening on port', port);
});

