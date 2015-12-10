var fs = require('fs');
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser')

var app = express();
var db = new sqlite3.Database('hogwarts.db');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  fs.readFile('./index.html', 'utf8', function(err, data) {
    res.send(data);
  });
});

app.post('/students', function(req, res) {

  var studentName = req.body.student_name;
  var nameLength = studentName.length;
  var houseID;

  if (nameLength % 4 === 0) {
    houseID = 1;
  } else if (nameLength % 2 === 0) {
    houseID = 2;
  } else if (nameLength % 3 === 0) {
    houseID = 3;
  } else {
    houseID = 4;
  }

  db.run("INSERT INTO students (student_name, house_id) VALUES (?,?);", studentName, houseID, function(err) {
    res.redirect('/students/' + this.lastID)

  });
});

app.get('/students/:id', function(req, res) {
  
  var studentID = req.params.id;

  db.get("SELECT * FROM students WHERE id=?;", studentID, function(err, row) {
    
    var houseID = row.house_id;
    var studentName = row.student_name;
    
    db.get("SELECT * FROM houses WHERE id=?;", houseID, 

      function(err, row) {
      var houseName = row.house_name; 
      res.send(studentName + " has been sorted into " + houseName + "! <a href=\"/\">Back</a>");

    }); // end db.get house callback
  }); // end db.get student callback
}); // end app.get callback

app.listen(3000, function() {
  console.log("Magic is happening on port 3000")
})