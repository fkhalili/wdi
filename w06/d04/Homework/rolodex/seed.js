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
