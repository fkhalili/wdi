# Week Five Weekend Review

* [Internet Basics](#basics)
* [TCP](#tcp)
* [Digital Ocean](#do)
* [Request NPM](#request)
* [http NPM](#http)
* [Express](#express)



## <a name=basics>Internet Basics</a>

##### Important Vocab

- Client/Server
- the cloud
- IP Address
- Domain Name/DNS
- traceroute
- telnet
- localhost/127.0.0.1
- port and typical port numbers
- TCP
- HTTP

##### Program to Programs
Up until now, your programs have been local to your own computer and a single user.

For example, you create a command line app (like Mad Libs or the Movie Haus), someone goes to your computer, types a command and some arguments, and all of the interaction happens between the user and the program. But, what if the owner of Moive Haus decides to open up several other locations? How annoying would it be for him to travel to each site every time the movie selection changes?

Programs can also talk to each other over a network.  We can have a `server` that other computers (`clients`) can connect to. This server can deliver apps to other users, manage our api keys, and be the gateway to our database. 

##### The Internet

The internet is basically a network of computers sending data back and forth to each another. People often use `the cloud` as a way to describe the internet.
 
Each computer on the internet has its own IP address, which is like a mailing address for the internet.  If you are behind a router, then you have an IP address, relative to your router, and then your router has an "external" IP address, which is what the rest of the internet sees.  To get your external IP address, you can search "IP address" on Google. Your IP address is your unique address on the internet.  If you're behind a router, then your router knows how to route things to your unique address relative to the router. Routers handle sending data from one ip address to another.

An `ip address` is like the **mailing address** of an apartment building.

##### Ports

Computers can keep track of many 'conversations' at once by using `ports`. Ports are virtual communication channels. Computers can maintain several simultaneous `ports`, which are like mailboxes to send and receive data.  Servers/clients can listen for or send data on a specific port.  So we need to know which port on which IP address to send data to. Or we can set up a server to listen for incoming requests on a certain port.

`Typical ports` include: 22 for `ssh`, 23 for `telnet`, 80 for web servers, 27960 for Quake III, 666 for Doom.

A port is like the **APT#** portion of a mailing address, or the **"C/O ..."** portion


##### The Networking Stack

With this knowledge, we can talk about the networking stack, which is made up of many layers. The networking stack is a simplified model of the networking process.

<img src = "http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag2.gif" />

The **Application layer** is where your server, your browser, your mail program, or any other program that needs to access the internet is.  When a request is made, it goes to the TCP layer. 

**TCP** is a protocol (Transmission Control Protocol).  It is how most of our programs communicate over the internet.  HTTP (the web), mail clients, chat programs, and many others use it.  It is considered reliable because it verifies that all data packets have been received when a transmission happens, and that they are in the right order, regardless of what order they came in.  The TCP level will add information to the request for what port it goes to.

After a port is assigned, the request goes to the **IP layer**, where the IP address is added to the request. The IP layer handles all of the addressing concerns of networking.

Finally the request is passed to the **Hardware layer**, where messages are encoded as electrical/light signals and sent over wires to the internet.

When a request from one computer gets to another, it goes back up the stack on that server and is sent to the appropriate application.

Check out this website an analogy between a [Postal network and TCP/IP](http://bpastudio.csudh.edu/fac/lpress/471/hout/netech/postofficelayers.htm)

##### What happens when I go to a site in the browser?

1. The browser sends a request to a **DNS server**. DNS servers translate names like `http://www.google.com` into IP addresses.

2. When the IP address is sent back to the browser, the browser opens a TCP connection to the server's IP address on port 80 (default port for HTTP).  

3. When the server receives the request, it will usually respond with the requested page as HTML.

4. The browser will end the TCP request when it gets the HTML response (a text string).

5. As it renders the page, the browser may find links to additional assets (JavaScript files, CSS, images, etc.) and will open up requests for each of those.

*****


## <a name=tcp>TCP</a>

Now that we know how the internet works at a high level, let's create a TCP (transmission control protocol) server. 

TCP offers...

* A set of rules for the reliable transmission of data sent over IP. 
* It garauntees that data is sent whole, in the right order(orders the packets), and to the right place. 
* When things are transferred, they are broken up into packets. Packets are descreet chuncks of data  transferred over and IP-based protocol


TCP enables two hosts to establish a connection and exchange streams of data. 

```
var net = require('net');
var port = 3000;

var server = net.createServer(function(c) {
  console.log('client connected');
  c.write('Hello Client\r\n');
});

server.listen(port, function() { //'listening' listener
  console.log('listening on port ' + port );
});
```

In the example above we:

* Require the `net` module 
* Set a port number
* define a variable for our server and set it to createServer. 
	* The "c" being passed in the argument is set as the listener for the `connection` event. 
* Console log that a client has connected
* Send a message to the client that says "Hello"
* Tell our server to listen to a specific port number (which we defined in the beginning)

Now lets connect to this server using `telnet`. 

* Telnet was developed in 1968 (`not that we care.....`) and is a command already built into your terminal. 
* Open up another terminal window and enter `telnet 127.0.0.1 3000`.
	* 127.0.0.1 is your local machine. 
	* `3000` is the port number


* You'll notice that we get a message saying `"Hello Client"`.
* On the server side, we printed out `"client connected"`.
* We connect lots of clients to the same server. 
* To get out of telnet type `ctrl ]`

Ok so now what?

Let's fill out the rest of this code:

```
var server = net.createServer(function(c) {
  console.log('client connected');
  c.write('Hello Client\r\n');

  c.on('data', function(data) {
    console.log(data.toString().trim());
  });

  c.on('end', function() {
    console.log('client disconnected');
  });
});
```

Because of JavaScript's asynchronous features, it is common to see event handling in JS.  When certain events get triggered, a callback function gets executed.

It this case we:

- use the 'data' event to log anything that comes from the client.
- use the 'end' event that will log 'client disconnected' when a client closes it's connection.


## <a name=do>Digital Ocean</a>

##### Getting our code set up with Github

- Ensure that the code you want to deploy is *OUTSIDE* of any other Git repository. This includes our `artemis` or `diana` folders.

- Navigate to the root directory of the code you want to deploy
  - e.g.

``` 
  cd ~/code/my_app
```
- Let's turn this directory from a regular directory to a Git directory
 - e.g.

```
git init
```
- Lets create a repository on Github in which we will store our code. Go to [Github](www.github.com) and click the `+` sign in the top right corner to create a new repo.
- I would suggest giving this repo the same name as the corresponding folder on your computer.
- Copy the SSH link provided to you after the repo has been created. You will need to paste it into your terminal in the next step!
- Back in your terminal, use the `git remote add origin` command to link the directory on your computer with the repo on Github
  - e.g.

```
git remote add origin SSH_LINK_TO_YOUR_REPO
```
- Now just add, commit, and push your code to Github!

```
    git add -A :/
    git commit -m "initial commit"
    git push origin master
```
- You can refresh the repo's page on Github and if all went well, you should see your code!

---

##### Creating your Digital Ocean droplet

- Log into your Digital Ocean account
- Click the green `Create a Droplet` button in the top right corner.
- At this point you get to set up the specifics of your droplet.
  - Give it a name
  - Pick your Droplet size (probably go for the cheapest?)
  - Select a region (USA makes sense)
  - Select image (Pick Ubuntu)
- Lastly, there is an `Add SSH Key` option. *YOU SHOULD ONLY DO THIS THE FIRST TIME YOU DEPLOY*. After that, just select the SSH key you previously added.
  - Lets use the command line to copy our SSH key to our clipboard. Copy what the following command returns
  
```
In terminal
cat ~/.ssh/id_rsa.pub
```

  - Click the `Add SSH Key` link and paste your SSH key into the text box.
  - Click the green `Add SSH Key` button to save it.

Huzzah, your Droplet has been created!

---

##### Setting up the Droplet and Pulling Our Code

Now that the Droplet has been created, we can use its IP address to log into it.

```
In terminal
ssh root@YOUR_DROPLETS_IP_ADDRESS
```

Lets first run a quick update

- `sudo apt-get update`

Remember from lecture, what do we need to install?

- git
  - `sudo apt-get install git`
- node
  - `sudo apt-get install nodejs`
- node-legacy
  - `sudo apt-get install nodejs-legacy`
- npm
  - `sudo apt-get install npm`

Now that we have Git, we can simply clone our repo from Github onto our Ubuntu box.
**THIS MUST BE THE HTTPS LINK, NOT THE SSH LINK WHICH GITHUB WILL DEFAULT TO**

**ONE MORE TIME. GRAB THE HTTPS LINK**

```
In terminal
git clone YOU_REPO_HTTPS_LINK
```

**IF THIS DOESNT WORK, MAKE SURE YOU GRABBED THE RIGHT LINK!**
And congrats, your code is now on the Ubuntu box!

---

##### Keeping it Running

If you close your terminal, your app will stop running.  To keep it running, you can run the following command in terminal:

```
nohup node server.js &
```
This will run the server in the background.  You'll still have to type `<Ctrl-c>` to get out of it, but now the server will keep running, even if you exit the Digital Ocean server or close your terminal window.

---

##### Closing it
Run `ps aux | grep node` in terminal to get a list of all processes running node, copy the number in the 2nd column of the first row, and type `kill -9 <that number>`.

For example, I see this:

```
root     12648  0.1  2.1 669608 10648 ?        Sl   21:24   0:00 node server.js
root     12722  0.0  0.1  11740   936 pts/0    S+   21:26   0:00 grep --color=auto node
```

I can type `kill -9 12648` to kill my server.

*****
## <a name=request>Request NPM</a>

* This NPM package is a framework that allows us to make simple HTTP calls. It does not come with node so make sure to npm install it. 

```
npm init
npm install request --save
```

Below is an example of how you would use the package to make a HTTP request and console log the response from that request.

```
var request = require('request');
request('http://www.example.com', function (error, response, body) {
 console.log(response)
});
```

*****

## <a name=http>HTTP NPM</a>

![](http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP_Steps.png)


##### HTTP GET Requests in the browser

**Most links are actually HTTP GET requests.**

* An HTTP GET request literally means "retrieve whatever information ... is identified by the Request-URI. If the Request-URI refers to a data-producing process, it is the produced data which shall be returned as the entity in the response..." 

**API's**

* API's are essentially the rules a server uses to respond appropriately to the information contained in a url.
* Think about how you requested information from http://www.omdbapi.com/ 

**Top Tips**: 

* HTTP is a request-response protocol that manages communication between clients and servers i.e. a client (like your web browser) will request information from a server (like www.google.com, or www.youtube.com) and expect a response. 
* HTTP servers are programs that can respond to HTTP requests from different clients.
* HTTP servers can respond to requests in different ways, but they ultimately `JUST SEND STRINGS.`
* HTTP servers differentiate GET requests by looking at the "extra stuff" that follows the domain name/ip address.

##### How to break down a URL/URI into it's important parts

** The url npm package**

```
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


##### Using Node to write an HTTP server that responds to GET requests

* Now lets install the http module npm. This will help us to write a Node HTTP server to respond to GET requests

* Require both the http and url packages

```
var http = require('http'); //includes the http package 
var url = require('url'); //includes the url package

```

* Create the server and listen on a port

```
var server = http.createServer().listen(3000);
```
* Create a HTTP server that expects both request and response objects as arguments of a callback. 

```
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


##### Using Node to write an HTTP server that responds differently to different GET requests

HTTP servers use the "extra" information in a url to respond to requests in different ways. Below is an example of specifying routes to do different things when visited. 

* Let's start the same way, require the correct packages (this time including fs) and create the server

```
var http = require('http'); 
var url = require('url'); 
var fs = require('fs');

var server = http.createServer().listen(3000);

```

* Create an HTTP server that expects both request and response objects

```
server.on('request', function(request, response){ 

    var urlObj = url.parse(request.url); 
    console.log(urlObj);
    var path = urlObj.pathname;

    if(path==="/"){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>')
      response.write('</html>')
      response.end();
    }else if (path==="/movies"){
       var cruiseDBText = fs.readFileSync("cruise_data.json");
       var cruiseDB = JSON.parse(cruiseDBText);

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('<!DOCTYPE html><html lang="en"><head></head>');
      response.write('<body><h1>Tom Cruise has been in A LOT of movies!!!</h1></body>');
      response.write("<ol>");
      cruiseDB.forEach(function(movie){
          response.write("<li>"+movie.Title + "</li>");
      });
      response.write("</ol>");
      response.write('</html>')
      response.end();
    }
    else{
      response.writeHead(400, { 'Content-Type': 'text/html' });
      response.write('Bad Request');
      response.end();
    }

});

```

*****

## <a name=express>Express!!!</a>

Express is a web framework for Node.js. It allows us to build more sophisticated applications "in an easier manner than if we were to only use the http module. It does not come with node and must be installed through the npm package. 

```
//initialize package.json
npm init 

//install express and save the data to your package.json
npm install express --save 
``` 

In your server.js file we must require express. When we require it, it returns a function. Conventional means is to name a variable app that calls upon this function. 

```
var express = require('express');
var app = express();
```

At the bottom of your code you should make sure the server is listening on a specific port. Stick a console log in there so we can be told the server launched properly

```
var server = app.listen(3000, function(){
	console.log("Server is listening on port 3000");
})
```

##### GET Request

Now that we've installed the express module we're ready to start making "GET" requests. The method ".get" is an HTTP request method that takes two arguments in express. The first is the route and the second is a callback function which takes in a request and response. 

The below example makes a GET request to the static route "/". 

```
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Hello World");
})

var server = app.listen(3000, function(){
	console.log("Server is listening on port 3000");
})
```

##### Static and Dynamic Routes

Above we hit a static route. These are routes that are specifically defined. But what if we want to utilize some of the words a user types in the url? 

Enter ROUTE VARIABLES!!!! 

* If you input a ":" in front of a word you can pull that item from the url as a variable and use it using `req.params`

```
app.get('/about/:name', function(req, res){
	var name = req.params.name;
	res.send("Hello " + name);
})
	//localhost:3000/about/Jason
	//This will return "Hello Jason"
```

* What if we wanted to grab a string or multiple values? Enter the `req.query` method. This method will grab anything in the url AFTER a `?` is placed. 

```
app.get('/search?', function(req, res){
    var md = req.query.actor;
    res.send(md);
});
	//http://localhost:3000/search?actor=Matt+Damon+Is+Jason+Bourne
	//This url will return "Matt Damon Is Jason Bourne"
```

* Below is a deeper example of what can be done with route variables. 

```
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("Hello World");
})

app.get('/about/:name/:hair', function(req,res){
    var name = req.params.name;
    var hair = req.params.hair;
    res.send("Hi " + name + " your hair is " + hair);
});
	//localhost:3000/about/Jason/Smooth 
	//This url will return "Hi Jason your hair is Smooth"

app.get('/search?', function(req, res){
    var md = req.query.actor;
    res.send(md);
});
	//http://localhost:3000/search?actor=Matt+Damon+Is+Jason+Bourne
	//This url will return "Matt Damon Is Jason Bourne"

app.get('/shoes', function(req,res){
    var color = req.query.shoe.color;
    var type = req.query.shoe.type;

    res.send("Your shoes are " + color + " " + type);
});
	//http://localhost:3000/shoes?shoe[color]=blue&shoe[type]=converse
	//This url will return "Your shoes are blue converse"

var server = app.listen(3000, function(){
	console.log("Server is listening on port 3000");
})
```


##### Forms and Browser Input

* Forms are a great way for us to grab user input in our web applications.
* Forms work by collecting data from different `inputs` and sending that data to the server in the form of an `HTTP request`. 

**In order that you never go to W3Schools (never go there), here is a basic cheat sheet for writing simple HTML forms.**

This is culled from **[a][HTML5Please] [few][HTML5Doctor] [sources][HTML5DiveIn], [the most important being MDN][MDN]**. MDN (the Mozilla Developer Network) should be seen as "the docs" when you are having an issue with HTML.

<!-- RESOURCES -->
[HTML5Please]: http://html5please.com/
[HTML5Doctor]: http://html5doctor.com/
[HTML5DiveIn]: http://diveintohtml5.info/
[MDN]: http://developer.mozilla.org/en-US/

##### The `<form>` Element (Tag)

[MDN's section on forms.](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms) The necessary points:

```
<form method="GET" action="/page">
  <label for="name">Page Name</label>
  <input id="name" type="text" name="page_name" />
  <input type="submit" value="Create" />
</form>
```

##### `<form>`'s Attributes

- **method**: the HTTP request verb (method) that the browser uses to send data to the server. We use "POST" to stand in for `POST`, `PUT` and `DELETE`.
- **action**: the path of the HTTP request page that processes the information submitted via the form.
- **the _route_**: is the combination of the verb (method) and path, and must be defined on our app for this form to submit data correctly.

##### The `<label>` Element (Tag)

> The `<label>` element is the formal way to define a label for an HTML form widget. 
> This is the most important element if you want to build accessible forms." *— MDN*

There are two ways to use labels correctly:

* Simple nested label example:

```
<label>Click me 
  <input type="text" id="user" name="name" />
</label>
```

* Using the "for" attribute with the input's id

```
<label for="user">Click me</label>
<input id="user" type="text" name="name" />
```

##### `<label>`'s Attributes

**Very important!** `for=` in a label references an `<input>`s `id=` attribute, not it's `name=` attribute!
Sometimes these values will be the same, but `for=` goes with `id=`. `name=` is the key of the `<input>`'s value when it arrives at the server.

##### HTML's Go-To Inputs

| Field Type | HTML Code | Widget (Control) | Notes |
|:-- |:-- |:-- |:-- |
| plain text | `<input type="text">` | ![<input type="text">][text] | the type attribute can be omitted |
| password field | `<input type="password">` | ![<input type="password">][text] | echoes dots instead of characters |
| text area | `<textarea></textarea>` | ![<textarea></textarea>][area] | a more customizable plain text area |
| checkbox | `<input type="checkbox">` | ![<input type="checkbox">][check] | can be toggled on or off |
| radio button | `<input type="radio">` | ![<input type="radio" name="group"> <input type="radio" name="group">][radio] | can be grouped with other inputs |
| drop-down lists | `<select><option>` | ![<select><option>Option 1</option><option>Option 2</option></select>][select] | [check here for more info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) |
| file picker | `<input type="file">` | ![<input type="file">][file] | pops up an “open file” dialog |
| hidden field | `<input type="hidden">` |  | nothing there!
| submit button | `<input type="submit">` | ![<input type="submit">][submit] | activates the form's submission <br/>(a `POST` request or <br/>Javascript action) |

<!-- Images -->
[text]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-text.png
[area]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/textarea.png
[check]:  https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-checkbox.png
[radio]:  https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-radio.png
[select]: https://raw.github.com/h4w5/html_form_cheatsheet_images/master/select-option.png
[file]:   https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-file.png
[submit]: https://raw.github.com/h4w5/html_form_cheatsheet_images/master/input-submit.png

##### Important Attributes

All input types (including `<textarea>`s):

- **`type`**: the type of data that is being input (affects the "widget" that is used to display this
  element by the browser).
- **`name`**: the key used to describe this data in the HTTP request.
- **`id`**: the unique identifier that other HTML elements, JavaScript and CSS use to access this 
  element in the browser.
- **`value`**: the default data that is assigned to the element.
- **`placeholder`**: not a default value, but a useful HTML5 addition of a data "prompt" for an input.
- **`disabled`**: a Boolean attribute indicating that the "widget" is not available for interaction.

Radio buttons or checkboxes:

- **`checked`**: a Boolean that indicates whether the control is selected by default (is false unless).
- **`name`**: the group to which this element is connected. For radio buttons, only one element per 
  group (or name) can be checked.
- **`value`**: the data or value that is returned for a specific group (a multi-element control), if 
  this element is checked.

##### HTML5 Input types and Tags

HTML5 has included a greater number of really useful inputs! You can find them at a great place to 
go to get HTML help: 
[Dive In To HTML5](http://diveintohtml5.info/forms.html#type-email).


##### POST Request

* POST requests are 'designed to request that a web server accepts the data enclosed in the request message's BODY for storage'
* GET requests 'should only retrieve data and should have no other effect.'


The in class example was to make a wine list and add to it. 

* Make sure to install the following packages (well cover body parser more below)

```

var express              = require('express');
var app                  = express();
var ejs                  = require('ejs');
var fs                   = require('fs');
var bodyParser           = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
```

Your html file may look like this. 

```
	<form method="POST" action="/wines">
		<input type="text" name="studentName" placeholder="enter your name"></br>
		<input type="text" name="faveWine" placeholder="enter your fave wine"></br>
		<input type="text" name="type" placeholder="enter type"></br>
		<input type="submit" value="Create Wine"/>
	</form>
```

In your javascript you might have a route that will `GET` the `/wines/new` route which renders a specific ejs file. 

```
app.get('/wines/new', function(req, res){
	res.render('new.html.ejs');
});
```

Then we have a route which `POST` new information

```
app.post('/wines', function(req, res){
	var wines     = getWines();
	var currentId = getCurrentId(wines);
	var newWine   = { id: currentId + 1, studentName: req.body.studentName, faveWine: req.body.faveWine, type: req.body.type }
	wines.push(newWine)
	updatedData = JSON.stringify(wines)
	saveWines(updatedData);
	res.redirect('/wines');
});
```

##### Body Parser

* body-parser is middleware
	* Middleware is a term we use to describe frequently used parts of our server that get triggered / run, before they hit the part of the server that we configure directly, such as the routes we are writing in express. 
	* As we'll see in the future middleware does a variety of things like parse incoming HTTP request headers and body, parse cookies, look up user information, and serve static assets like images. It sits in the middle of where the incoming request is initially recognized and where we as programmers manually configure our apps.  Hence the term "middleware". 

* app.use(bodyParser.urlencoded({extended: false}));
	* we're setting up our express app to use body-parser with this line. The urlencoded bit means that it only parses urlencoded bodies. This object will contain key-value pairs.
	* extended:false - parses the URL-encoded data with the querystring library. 
	* URL encoding: converts characters into a format that can be transmitted over the Internet.	

- app.set("view_engine", "ejs"); 
	- sets up our app to render template files. It will, by default look for the template files in a folder called 'views'	
