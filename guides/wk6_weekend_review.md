# Week Six Weekend Review

* [CRUD](#crud)
* [Express CRUD / API](#express)
* [Relational + Non-Relational Databases](#db)
* [SQL](#sql)


## <a name=crud>CRUD and REST</a>

CRUD refers to the functions of relational databases. Each letter stands for a different verb. 

* CRUD - Create, Read, Update, Delete

As HTTP methods:

* C - POST
* R - GET
* U - PUT
* D - DELETE

As SQL methods:

* C - INSERT INTO table column VALUES new values
* R - SELECT something FROM somewhere WHERE a condition is true
* U - UPDATE table SET new value WHERE condition
* D - DELETE FROM table WHERE condition

REST stands for Representational State Transfer. It refers to a development concept/style to build efficient and maintainable code. We combine this with the CRUD concepts to organize our server and its routes. Some examples are below:

* If we want to access the default "wines" page you would visit `/wines`
* If we want to go to the EDIT page we would make our route `/wines/:id/edit`
* If we want to visit our NEW "wines" page we would make the route `/wines/new`


## <a name=express>Express CRUD / API</a>

This week we discussed how to grab data from APIs, and use forms to allow users to input data/send data to the server. Below is an example of how the top of your server will look like. Lets go through it line by line. 

* We require our express package. This returns a function. By convention we create a variable called "app" that calls the express() function returned from requiring express. 

```
var express = require('express');
var app = express();
```
* We require ejs and fs npm because we are using templating and are writing/reading external JSON files
* The "app.set" call below sets up our app to render the templates using EJS. this eliminates the need to constantly call "ejs.render"

```
var ejs = require('ejs');
var fs = require('fs');

app.set("view_engine", "ejs");
```
* We require body-parser npm so we can use data being sent to us through FORMS/POST requests
* The "app.use" code tells app to use the urlencoding body-parser to parse our data. 

```
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser); 
```
* Now let's add our method override. We're going to need this for the `PUT` and `DELETE` of our FULL CRUD app. 
* The "app.use" line of code tells the application what method to use. Keep this in mind when we reach the PUT and DELETE section below

```
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
```

#### GET

* I provided a `GET` example below in the "API" section. Check out last weeks review for more information. 

#### POST

* We make POST requests to send data over to the server creation
* In HTML we will make a form tag that takes a method "POST" and an action that leads to a specific route

```
		<form action="/wines" method="POST">
			<input type="text" name="wineName" placeholder="enter your fave wine"></br>
			<input type="text" name="type" placeholder="red or white?"></br>
			<button>Create Wine</button>
		</form>
```
* In your JS file we will make a "POST" route.
* The first two functions will grab the data from the JSON file and increment a counter for the ID of the wine
* Make a newWine object that will bring in the information sent through the form. 
	* NOTE WE USE REQ.BODY!!!!
* Create the new object in the dataset
* Increment the counter
* Call the function (savewine) to update the JSON file
* redirect to the "/wines" route

```
app.post('/wines', function(req, res){	
	var wineData = getWineData()
	var id = getWineData().counter + 1
	var newWine = {
		id: id,  
		wineName: req.body.wineName, 
		type: req.body.type
	}
	wineData.wines[id] = newWine;
	wineData.counter = id;		
	saveWine(wineData)
	res.redirect('/wines')
});
```

#### PUT and DELETE

* Remember how we required the method override just a few sections ago in the top of our Express app? If we want to use a form tag to `PUT` and `DELETE` items we have to first name the method `POST`, and then override it to the correct method. 
* The below code is an example of how a PUT method will be written in the form tag in your HTML. 

```
<form method="POST" action="/wines/<%= wine.id %>?_method=PUT">
	<input type="text" name="wineName" value="<%= wine.wineName %>">
	<input type="text" name="type" value="<%= wine.type %>">
	<button>Update Wine</button>
</form>
```

* Your JS file may have a `PUT` route. It will have a variable that will read data from the JSON file and then choose a specific wine from the ID passed in from the form. 
* Then incorporate the other data being passed in using REQ.BODY!!!!!
* Let's save the wine and redirect it to another page
* Check out the JS example below

```
app.put('/wines/:id', function(req, res){
	var wineData = getWineData();
	var thisWine = wineData.wines[req.params.id];
	thisWine.wineName = req.body.wineName;
	thisWine.type = req.body.type;		
	saveWine(wineData)
  res.redirect('/wines/' + req.params.id)
});
```

* The `DELETE` method override in your form tag is less complicated and very similar to using the `PUT`

```
<form action="wines/<%= wines[key].id%>?_method=DELETE" method="POST">
	<button>Delete this Wine</button>
</form>
```
* Below is a JS file

```
app.delete('/wines/:id', function(req, res){
	var wineData = getWineData();
	var thisWine = wineData.wines[req.params.id];
	delete wineData.wines[req.params.id];		
	saveWine(wineData)
	res.redirect('/wines');
});

```

#### API calls? 

* We've made calls to the OMDB API a bunch of times using different HTTP request methods. Below is how you may incorporate that into a "CRUD and RESTful" operation below. 

```
app.get('/movie/:title', function(req, res){
	var title = req.params.id;
	
	request('http://www.omdbapi.com/?t='+title, function (error, response, body) {
		var parsed = JSON.parse(body);
		
		if(err){
			console.log(err)
		} else{
			var title = parsed.Title;
			var year = parsed.Year;
			var rating = parsed.Rated;
			moviesearched.push(title);
			moviesearched.push(year);
			moviesearched.push(rating);
			res.render('search_movie.ejs', {movies: moviesearched});
		}
	});
});
```

## <a name=db>Relational / Non-Relational / FS / JSON</a>

#### FS and JSON

* We've studied the FS package and used it to read and write JSON files. What are some advantages for FS and JSON. 
	* Easy to connect with API's
	* Simple Access
	* Simple Structure
* But what may be some disadvantages? 
	* JSON might not be great for simultaneous access by multiple people
	* Not very robust
	* Organizing data and relationships (multiple servers?)
	* Manipulating data (seperating it?)


#### Databases

* Databases allow us to manage information easily and accurately.
* There are many popular models of Database architecture:

![](http://image.slidesharecdn.com/marklogic-makingsenseofnosql-jan2015-150203205240-conversion-gate02/95/marklogic-making-sense-of-nosql-2-638.jpg?cb=1423019589)

#### Relational
Relational databases represent data in the form of tables. They have rows and columns. Think .csv without the hassle. 

#### Non-relational
Non-relational databases do not represent data in a table. There are many forms of non-relational datastores. For example MongoDB stores collections as JSON documents.

#### Data Modeling for a Relational Database
A data model provides the structure and format of data. Designing an app requires you to keep track of lots of data. How will you model that data? 

Relational databases store their information in a table. Each row of the table has exactly the same number of columns. Tables can point to other tables:

![](http://docs.oracle.com/html/B13915_04/images/tables.gif)

#### Use an ERD (Entity-Relationship Diagram) to draw a representation of your data model.
An Entity Relationship Diagram (ERD) is a visual representation of different data using conventions that describe how these data are related to each other.

## <a name=sql>SQL</a>

#### Types of Languages

* GPL - What is a GPL? GPL stands for General Purpose Language
	* JavaScript is a GPL. This is a language written to serve various applications.
* DSL - What is a DSL? DSL stands for Domain Specific Language
	* DSLs are compter languages that specialize in a particular domain
* SQL - Structured Query Language. It is a DSL because it's main purpose is to build and manage relational databases. 
	* SQL allows us to store and persist data so we can access it even after our server restarts.
	* We will be using the sqlite library to write our queries.  

#### CRUD Breakdown

* CRUDDING!!!!
	* C - (Create) POST - INSERT INTO table column VALUES new values
	* R - (Read) GET - SELECT something FROM somewhere WHERE a condition is true
	* U - (Update) PUT - UPDATE table SET new value WHERE condition
	* D - (Destroy)DELETE - DELETE FROM table WHERE condition


#### In Class Code Along TERMINAL EXAMPLE

* Let's start but creating a new directory
```
mkdir tomCRUD
```
* Install sqlite3

```
brew install sqlite3
```
* Go into that directory and create a database

```
sqlite3 tomcrud.db
```
* Let's create a table for tommy

```
CREATE TABLE tomcrud (id INTEGER PRIMARY KEY, charactor TEXT, movie TEXT, year INTEGER);
```
* Commands in SQL should be written in CAPS. This is to distinguish them from the names of tables and columns.
* `tomCRUD` is the name of the table
* `id` / `character` / `movie` are the names of the columns
* `charater` and `movie` columns are specified as a type `TEXT`
* `id` is an integer but also a primary key. This ensures that it is unique. 
	* Sqlite will automatcially insert an id into rows 

* Show your schema. This will give you your create statement for this table. It is useful if you forget the format of your columns or value types.

```
.schema tomcrud

// CREATE TABLE tomcrud (id INTEGER PRIMARY KEY, charactor TEXT, movie TEXT, year INTEGER);
```
* Now let's start adding information to our table

```
INSERT INTO tomcrud (character, movie, year) VALUES ("Maverick", "Top Gun", 1986);
```
* Fill out the `C` part of CRUD on the board. 
	* This is similar to how we used "POST" 
	* C - POST - INSERT INTO

* Show them their new information!

```
SELECT * FROM tomcrud

// 1|Maverick|Top Gun|1986
```
* `*` is a wildcard that allows us to grab everything from the table `tomcrud`

* Now let's add more information to play around with. 

| character  | movie  | year |
|------------| ------ |-------|
|Cage   | Edge of Tomorrow | 2014 |
|Ethan Hunt | Mission Impossible | 1996 |
|Vincent | Jack Reacher  | 2012 |
|Vincent  | Collateral  | 2004 | 
|Joel Goodson | Risky Business| 1983 |
|Brian Flanagan| Cocktail   | 1988 |
|Steve Randle | The Outsiders| 1983 |
|Jerry Maccgiree | Jerry Maguire| 1996 |
|Lt. Daniel Kaffee| A Few Good Men| 1992 |

Run SELECT * FROM to see all the movies in the tomcrud database

* What if we want to only show one? 

```
SELECT * FROM tomcrud WHERE movie = "Collateral";

SELECT * FROM tomcrud WHERE id = 3;
``` 

* This is similar to `GET /tomcrud/:id`
* WHERE command adds conditions for you to narrow down your results. We can search by the "movie" column, by "id", and the like.

* Let's add more movies that are not accurate, some that carry the same title or character name

```
INSERT INTO tomcrud (character, movie, year) VALUES ("Reacher", "The Aviator", 2004), ("Brad Pitt", "Days of Thunder", 1990);
```
* Now lets search for these redundancies using `SELECT` and `WHERE`

```
SELECT * FROM tomcrud WHERE character ="Reacher";
```
* How about a more accurate search?

```
SELECT * FROM tomcrud WHERE character = "Reacher" AND year = 2012
```
* Now lets UPDATE our Days of Thunder

```
UPDATE tomcrud SET character="Cole Trickle" WHERE movie = "Days of Thunder";
```

* Lets Delete the Aviator movie

```
DELETE FROM tomcrud WHERE movie="The Aviator"
```

#### SQLite3 and NODE

* Now that we've learned how to CRUD in SQL lets figure out how to use it in our server since writing all that in terminal seems highly inefficient. 
* We will need a wrapper. This is an interface that allows SQL and JS to communicate.

* Let's install the sqlite3 npm

```
npm init
npm install sqlite3 --save
```
* Now require it with the wrapper usage. 
* adding `.verbose` to the end of your require will help you with debugging
* Here we're making a database called hero.db

```
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hero.db');
```

* STAY in your JS file. Lets write all our commands here. 
* Create a table

```
db.run("CREATE TABLE hero (id INTEGER PRIMARY KEY autoincrement, name TEXT, universe TEXT)");
```
* Now let's insert some heros into our new database

```
db.run("INSERT INTO hero (name, universer) VALUES ('Superman', "DC")", function(err){
	if(err){
		console.log(err);
	}
});
```

#### SANITIZING YOUR DATA!!! 

Do this to prevent SQL Injection - hackers can insert malicious SQL statements to affect our databases by manipulating the strings and adding extra statements. They could run 2 SQL statements in a row. 


![img](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)

We have to do something call Sanitizing:

'Sanitization' is the removal of malicious data from user input, such as form submissions.

By using the placeholder '?', SQLite automatically treats the data as input data and it does not interfere with parsing the actual SQL statement. strings and not JS code. 

>A parameterized query doesn't actually do string replacement. If you use string substitution, then the SQL engine actually sees a query that looks like

```
SELECT * FROM mytable WHERE user='wayne'
```

>SELECT * FROM mytable WHERE user='wayne'
If you use a ? parameter, then the SQL engine sees a query that looks like

```
SELECT * FROM mytable WHERE user=<some value>
```

>SELECT * FROM mytable WHERE user=<some value>
Which means that before it even sees the string "wayne", it can fully parse the query and understand, generally, what the query does. It sticks "wayne" into its own representation of the query, not the SQL string that describes the query. Thus, SQL injection is impossible, since we've already passed the SQL stage of the process.

* Your queries should now look something like this

```
db.run("INSERT INTO hero (name, universe) VALUES (?, ?)", 'Spiderman', 'DC', function(err){
	if(err){
		throw err;
	}
});
```
* WOAH Spiderman is a MARVEL character. Let's fix that up

```
db.run("UPDATE hero SET universe=?, WHERE name=?", 'Marvel', 'Spiderman', function(err){
	if(err){
		throw err
	}
});
```
* For practice lets try sanitizing with SELECT 
* Notice here we'll be using `.get`
	* This will allow us to select ONE value

```
db.get("SELECT * FROM hero WHERE name=?", "Superman", function(err, row){
	if(err){
		throw err
	} else {
		console.log(row)
	}
});
```
* NOW DELETE SUPERMAN (not that I don't like him, Marvel is just the better universe)
* notice we use `.run` here

```
db.run("DELETE FROM hero WHERE name=?", "Superman", function(err){
	if(err){
		throw err
	}
});
```
* What if we wanted to select more than one row? 
* Let's use `.all` to do this (We only have spiderman in there right now so feel free to insert more heroes if you'd like)
	* `.all` will return an array

```
db.all('SELECT * FROM hero', function(err, rows){
	if(err){
		console.log(err);
	} else {
		console.log(rows);
	}
});
```

#### Create a Schema and Seed

* Let's touch the following files inside a "heroes" directory

```
touch hero.js
touch hero.db
touch schema.sql
touch seed.js
```

* Your schema is your "blueprint" of how your database is organized. It sets up our tables and their attributes. 

```
sqlite3 hero.db < schema.sql
```

```
DROP TABLE IF EXISTS entries;
CREATE TABLE entries (
  id INTEGER PRIMARY KEY autoincrement,
  name TEXT, 
  universe TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

* Your seed file is where you put some starter data into the database
* In your js file you can write the following. Make sure if you are adding the same amount of "VALUES" you have `?`s

```
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');
db.run("INSERT INTO entries (name, universe) VALUES (?, ?), (?, ?), (?, ?), (?, ?)",
  'Superman', 'DC',
  'Batman', 'DC',
  'Wolverine', 'Marvel',
  'Deadpool', 'Marvel',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
```
* In your terminal lets add the schema and seed it

```
sqlite3 hero.db < schema.sql
node seed.js
```

#### Foreign Keys

* Foreign keys are used to link multiple tables together. 
* A foreign key in one table should reference the primary key of another table if you intend to build that relationship

```
CREATE TABLE actors (id INTEGER PRIMARY KEY, 
					name TEXT, 
					age INTEGER
					);

CREATE TABLE movies (
				id INTEGER PRIMARY KEY, 
				title TEXT, 
				movie_actor_id INTEGER,
				FOREIGN KEY(movie_actor_id) references actors (id)
				);
```

