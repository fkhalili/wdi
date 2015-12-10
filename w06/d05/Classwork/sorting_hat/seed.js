var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hogwarts.db');

// Add a single student
db.run("INSERT INTO students (house_id, student_name) VALUES ('Harry', 1);")

// Seed houses table
db.run("INSERT INTO houses (house_name, house_img, head_teacher) VALUES ('Gryffindor','http://i.imgur.com/HhKPW7Qh.jpg','Minerva McGonagall');");
db.run("INSERT INTO houses (house_name, house_img, head_teacher) VALUES ('Slytherin','http://i.imgur.com/VXqSimmh.jpg','Severus Snape');");
db.run("INSERT INTO houses (house_name, house_img, head_teacher) VALUES ('Hufflepuff','http://i.imgur.com/0AM0qLLh.jpg','Pomona Sprout');");
db.run("INSERT INTO houses (house_name, house_img, head_teacher) VALUES ('Ravenclaw','http://i.imgur.com/74nxgZG.jpg','Filius Flitwick');");
