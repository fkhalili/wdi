# SQLite3 Module

Sqlite3 is a npm module that provides us access to our sqlite database. It's also called a wrapper for or interface to the sqlite3 database management system.

### Important methods

Setup:
```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydatabase.db');
```

Querying:
```js
db.run(sqlQueryString, [data1, data2, ...], [callback]);
db.get(sqlQueryString, [data1, data2, ...], [callback]);
db.all(sqlQueryString, [data1, data2, ...], [callback]);
```

- \#run doesn't return any data
    - Callback signature: function(error){}
- \#get returns one row of data
    - Callback signature: function(error, row){}
- \#all returns multiple rows of data
    - Callback signature: function(error, rows){}

Examples:

CREATE TABLE pizzas;

```js
db.run('CREATE TABLE pizzas(name TEXT, price INTEGER)');
```

INSERT a row of pizza

```js
db.run("INSERT INTO pizzas (name, price) VALUES ('shroomtown', 5 )", function(err){
  if(err){
    console.log(err);
  }
});
```

## SANITIZED: 

Do this to prevent SQL Injection - hackers can insert malicious SQL statements to affect our databases by adding their own SQL Code to our SQL query. 


![img](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)

We have to do something call Sanitizing:

'Sanitization' is the removal of malicious data from user input, such as form submissions.

By using the placeholder '?', SQLite automatically treats the data as input data so that it will never be run as SQL code. It will be treated as a string. 

We'll use this from now on. 

use \#run to CREATE one or more entries:
INSERT INTO pizzas (name, price) VALUES ('bianco', 5)

```js
db.run("INSERT INTO pizzas (name, price) VALUES (?,?)", 'bianco', 5, function(err){
  if(err){
    console.log(err);
  }
});
```


use \#get to RETRIEVE a single entry:
SELECT * FROM pizzas WHERE id=2;

```js
db.get("SELECT * FROM pizzas WHERE id=?", 2, function(err, row){
  if(err){
    console.log(err);
  } else {
    console.log(row);
  }
});
```


use \#run to UPDATE:
UPDATE pizzas SET name='Bella Bianco', price=10 WHERE id=2

```js
db.run("UPDATE pizzas SET name=?, price=? WHERE id = ?", 'Bella Bianco', 5, 2, function(err){
  if(err){
    console.log(err);
  }
});
```


use \#run to DELETE:
DELETE FROM pizzas where id = 2;

```js
db.run("DELETE FROM pizzas WHERE id=?", 2, function(err){
  if(err){
    console.log(err);
  }
});
```


use \#all to RETRIEVE MANY:
SELECT * FROM pizzas;


```js
db.all('SELECT * FROM pizzas', function(err, rows){
  if(err){
    console.log(err);
  } else {
    console.log(rows);
  }
});
```

**Note that rows is an array**


#### Nifty Trick
Getting lastID from an insert:

```js
db.run("INSERT INTO pizzas (name, price) VALUES (?,?)", 'bianco', 5, function(err){
  if(err){
    throw err;
  }

  var idOfInsertedRow = this.lastID;
});
```

# Rolodex Exercise:

Create a commandline Rolodex application that will store contact's names and phone numbers. The Rolodex application should be a full CRUD application. It should be able to add entries, read entries, update entries, and delete entries.

##Adding a database to a js app

We're going to use the npm sqlite3 module to hook our database up to a rolodex application written in javascript. Go to today's classwork folder and do the following:


###Admin tasks
1. create a folder called "rolodex" and cd into it.
- touch rolodex.js, rolodex.db, schema.sql, and seed.js
- ```npm install sqlite3```

###Schema

**What is a schema?**

- organization of data as a blueprint of how a database is constructed
- sets up our tables and their attributes

``sqlite3 rolodex.db < schema.sql``

```sql
DROP TABLE IF EXISTS entries;
CREATE TABLE entries (
  id INTEGER PRIMARY KEY,
  name TEXT,
  phone INTEGER
);

```

###Seed

**What is a seed?**

- a file we create to put some starter data into our database. 

```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');
db.run("INSERT INTO entries (name, phone) VALUES (?, ?), (?, ?), (?, ?), (?, ?)",
  'Sung', 2125551234,
  'Andy', 2125554321,
  'Anna', 2125555678,
  'Hayley', 2125558765,
  function(err) {
    if (err) {
      console.log(err);
    }
  }
);
```

OR

```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');
var entries =   [
  ['Sung', 2125551234],
  ['Andy', 2125554321],
  ['Anna', 2125555678],
  ['Hayley', 2125558765]
];

entries.forEach(function(entry) {
  db.run("INSERT INTO entries (name, phone) VALUES (?, ?)",
        entry[0],
        entry[1],
        function(err) {
          if (err) {
            console.log(err);
          }
        });
});
```

**Line by Line**
- make sure to npm install sqlite3
- require sqlite3. the .verbose option gives longer stack traces and verbose error messages to help with debugging.

Next, use terminal to add your schema to your database and seed it:

```
sqlite3 rolodex.db < schema.sql
node seed.js
```

###rolodex.js starting point for rolodex.js app
```js
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');

console.log("Welcome to the CRUD Rolodex. Please enter (C)reate, (R)ead, (U)pdate, or (D)elete")

process.stdin.on("data", function(data) {
  var input = data.toString().trim();
});
```
