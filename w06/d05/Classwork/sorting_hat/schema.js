var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hogwarts.db');

db.run("DROP TABLE IF EXISTS houses;", function(err) {
  if (err) {
    console.log(err);
  } else {
  // Create houses table
  db.run("CREATE TABLE houses (id INTEGER PRIMARY KEY AUTOINCREMENT, house_name TEXT, house_img TEXT, head_teacher TEXT);");
  console.log("Houses table created!")
  }
});

db.run("DROP TABLE IF EXISTS students;", function(err) {
  if (err) {
    console.log(err);
  } else {
  // Creates students table and includes foreign key relationship
  db.run("CREATE TABLE students (id INTEGER PRIMARY KEY AUTOINCREMENT, house_id INTEGER, student_name TEXT, FOREIGN KEY(house_id) REFERENCES houses(id));");
  console.log("Students table created!")
  }
});

var express = require("express");
var app = express();
var fs = require("fs");


app.listen(3000, function() {
  console.log("linked");
})


app.get("/", function(req, res) {
  res.redirect("/sorting");
})

app.get("/sorting", function(req, res) {
  var html = fs.readFileSync("./views/index.html", "utf8");
  res.send(html);
})

