var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rolodex.db');

console.log("Welcome to the CRUD Rolodex. Please enter (C)reate, (R)ead, (U)pdate, or (D)elete")

process.stdin.on("data", function(data) {
  var input = data.toString().trim().split(" ");

  if (input[0] === "create" && input.length === 3) {
  	console.log(input[1]+input[2]);
  	db.run("INSERT INTO entries (name, phone) VALUES ('"+input[1]+"',"+input[2]+")", function(err) {
  		if (err) {
  			console.log(err);
  		}
  	});
  }
  else if (input[0] === "read") {
  	db.all("SELECT * FROM entries", function(err, rows) {
  		console.log(rows)
  	})
  }
  else if (input[0] === "update") {
  	db.run("UPDATE entries SET "+input[1]+"="+input[2]+" WHERE "+input[3]+"='"+input[4]+"')", function(err) {
  		if (err) {
  			console.log(err);
  		}
  	})
  }
  else if (input[0] === "delete") {
  	db.run("DELETE FROM entries WHERE "+input[1]+"="+input[2]+")", function(err) {
  		if (err) {
  			console.log(err);
  		}
  	})
  }


  
});