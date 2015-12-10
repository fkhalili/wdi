![](http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP_Steps.png)

# HTTP Server Basics

## HTTP GET Requests in the browser

**Question**: *What are "links"?*

      1) User clicks on a link (or types it in the browser).
      
      2) Browser makes a new HTTP request to the server
      
      3) Server reads the request and sends a response (maybe even a "Hey client, you made a bad request :( ")
      
      4) Browser renders new stuff

**Most links are actually HTTP GET requests.**
An HTTP GET request literally means "retrieve whatever information ... is identified by the Request-URI. If the Request-URI refers to a data-producing process, it is the produced data which shall be returned as the entity in the response..." (see: http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4)

- **Activity**: Make some HTTP GET requests in the browser:
  - Make a search on google: https://www.google.com/search?q=tiger+baby
  - Watch a video on youtube: https://www.youtube.com/results?search_query=tiger
      - Useful YouTube url tricks: http://www.techairlines.com/useful-youtube-url-tricks/
      - Example: https://www.youtube.com/watch?v=_gwt2IpcEKQ&ID#t=1m30s 

**API's**

 - API's are essentially the rules a server uses to respond appropriately to the information contained in a url.

**Top Tips**: 
   - HTTP is a request-response protocol that manages communication between clients and servers i.e. a client (like your web browser) will request information from a server (like www.google.com, or www.youtube.com) and expect a response. 
   - HTTP servers are programs that can respond to HTTP requests from different clients.
   - HTTP servers can respond to requests in different ways, but they ultimately JUST SEND STRINGS.
   - HTTP servers differentiate GET requests by looking at the "extra stuff" that follows the domain name/ip address.

## How to break down a URL/URI into it's important parts

There's a package for that!

**The url package**-
  ```javascript
  var url = require('url'); //a library to automatically parse the url 
  
  console.log( url.parse('https://www.youtube.com/results?search_query=tiger'));
  ```
  
  Output:
  ```
  { protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.youtube.com',
    port: null,
    hostname: 'www.youtube.com',
    hash: null,
    search: '?search_query=tiger',
    query: 'search_query=tiger',
    pathname: '/results',
    path: '/results?search_query=tiger',
    href: 'https://www.youtube.com/results?search_query=tiger' }
  ```


## Using Node to write an HTTP server that responds to GET requests
So, to write a Node HTTP server the responds to GET requests we need to:

    Write a server that: 
      1) Figures out the important parts of the incoming url to determine what a client is trying to "GET"
      2) If the client has made a valid request, return the appropriate and well-formed response


Here's a basic example:

```javascript
var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package

//start the server
var server = http.createServer().listen(3000);//listens for traffic on port 3000

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 
    console.log(request.headers);

    var urlObj = url.parse(request.url); 
    var pathname = urlObj.pathname; //parsing the important info in the url

    console.log('Requested ' + pathname);

    //returns a string with the contents of a basic HTML page as a reponse
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html>')
    response.write('<html lang="en">');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>' + pathname + '</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1> You wanted the ' + pathname + ' path!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();

});

```


## Using Node to write an HTTP server that responds differently to different GET requests

HTTP servers use the "extra" information in a url to respond to requests in different ways. 

```javascript
var http         = require('http');
var url          = require('url');
var fs           = require('fs');
var server       = http.createServer();
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);

//create an HTTP server that expects both request and response objects
//as the two arguments to a callback 
server.on('request', function(request, response){ 

    var urlObj = url.parse(request.url); 
    var path = urlObj.pathname;

    console.log(urlObj);

    if(path === "/") {

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>')
      response.write('</html>')
      response.end();

    } else if (path === "/movies") {

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Tom Cruise has been in A LOT of movies!!!</h1></body>');
      response.write("<ol>");
      cruiseDB.forEach(function(movie) {
          response.write("<li>"+movie.Title + "</li>");
      });
      response.write("</ol>");
      response.write('</html>')
      response.end();

    } else {

      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();

    }

});

// Listen for traffic on port 3000.
server.listen(3000);


```

**Chrome and the favicon**
 - Chrome makes two requests to the server... the second request is for the favicon. What a pain in the ass. 

```javascript
 if (request.url === '/favicon.ico') {
    request.writeHead(200, {'Content-Type': 'image/x-icon'} );
    rrequest.end();
    console.log('favicon requested');
  }

```

 **Activity**: Test in both Chrome and Firefox

## Implement the otcmdb (the Tom Cruise Open Movie Database)


  Parameter | Description | Example 
  ------ | ------ | ------
   t | title | ```http://127.0.0.1:3000/?t=top+gun```
   id | omdb id | ```http://127.0.0.1:3000/?id=tt0092099```
   y | year of release | ```http://127.0.0.1:3000/?y=1986```
   d | director | ```http://127.0.0.1:3000/?d=Tony+Scott```

**Bonus**:
 - optional query parameter: r=json or r=html (to return rendered html instead of json)

```javascript
var http         = require('http');
var url          = require('url');
var fs           = require('fs');
var server       = http.createServer();
var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
var cruiseDB     = JSON.parse(cruiseDBText);

/* 
 * Setup the server.
 * Have the HTTP server listen for requests and handle them.
 * The requestEventHandlerCallback will be passed
 * both the request object and a partially prepared response object.
 */
server.on('request', function(request, response){ 
    var urlObj = url.parse(request.url);

    if(urlObj.query){
      var queryPortion = urlObj.query.split("=");

      if(queryPortion[0]==="t"){
          var foundIt = false;
          
          // Look through each movie in the database for a match.
          cruiseDB.forEach(function(movie){
            var targetMovie = queryPortion[1].replace("+"," ");

            if(movie.Title.toLowerCase() === targetMovie.toLowerCase()){
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.write(JSON.stringify(movie));
                response.end();
                foundit = true;
            }
        });

         if(foundIt === false){
             var error = { error : "movie not in the otcmdb!"};
             response.writeHead(200, { 'Content-Type': 'application/json' });
             response.write(JSON.stringify(error));
             response.end();
         }

      } else {
            // Guard against requests we cannot handle.
            response.writeHead(400, { 'Content-Type': 'text/html' });
            response.write("Bad Request");
            response.end();
      }
    }
   
});

// "Start" the server by having it listen on a port.
server.listen(3000);

```

**Extra Resources:**
- HTTP Basics: http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html 
