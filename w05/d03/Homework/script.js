
var fs   = require('fs');
var http = require('http');
var url  = require('url');
var port = 3000;
var server = http.createServer();
var sightingsDB = JSON.parse(fs.readFileSync('sightings.json', 'utf8'));

server.on('request', function(request, response) {
  var requestUrl = request.url;
  var urlObject = url.parse(requestUrl);
  var pathname = urlObject.pathname;
  var query    = urlObject.query;






 // if (requestUrl === '/favicon.ico') {
 //    request.writeHead(200, {'Content-Type': 'image/x-icon'} );
 //    request.end();
 //    console.log('favicon requested');
 //  }

  if (pathname === '/') {
    if(query) {
      query = query.split("=");

      if(query[0] === "l") {
        sightingsDB.forEach(function(sight) {
          if (sight.location.toLowerCase() === query[1].toLowerCase()) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(sight));
            response.end();
          }
        });
      }
      if(query[0] === "d") {
        sightingsDB.forEach(function(sight) {
          // var date = sight.occured.split(" ").pop().join();
          // console.log(date);
          if (sight.occured === +query[1]) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(sight));
            response.end();
          }
        });
      }
      if(query[0] === "s") {
        sightingsDB.forEach(function(sight) {
          if (sight.shape.toLowerCase() === query[1].toLowerCase()) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(sight));
            response.end();
          }
        });
      }
      if(query[0] === "id") {
        sightingsDB.forEach(function(sight) {
          if (sight.id === +query[1]) {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(sight));
            response.end();
          }
        });
      }


    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('This is the UFO sightings database');
      response.end();
    }


  } else {
      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();
  }


});

server.listen(port, function() {
  console.log('Listening on port' + port);
});

