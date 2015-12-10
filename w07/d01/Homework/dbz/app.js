var fs = require("fs");
var ejs = require("ejs");
var express = require("express");

var app = express();

var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(3000, function() {
	console.log("listening!");
});


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dbzcharacters.db');



app.get("/", function(req, res) {
	res.redirect("/dbz");
})

app.get("/dbz", function(req, res) {
	var html = fs.readFileSync("./views/index.html", "utf8");
	res.send(html);
})

app.get("/dbz/new", function(req, res) {
	var html = fs.readFileSync("./views/new.html", "utf8");
	res.send(html);
})


app.get("/dbz/team/:id", function(req, res) {
	id = req.params.id;
	db.all("SELECT * FROM characters WHERE team_id="+id, function(err, rows) {
		if (err) {
			console.log(err);
		}
		else {
			var template = fs.readFileSync("./views/team.html", "utf8");
			var html = ejs.render(template, {rows:rows})
			res.send(html);
		}
	})
})

app.get("/dbz/:id", function(req, res) {
	var id = req.params.id;
	db.get("SELECT * FROM characters WHERE id="+id, function(err, row) {
		if (err) {
			console.log(err);
		}
		else {
			var template = fs.readFileSync("./views/show.html", "utf8");
			var html = ejs.render(template, {row:row});
			res.send(html);
		}
	})
})


app.get("/dbz/:id/edit", function(req, res) {
	var id = req.params.id;
	db.get("SELECT * FROM characters WHERE id="+id, function(err, row) {
		if (err) {
			console.log(err);
		}
		else {
			var template = fs.readFileSync("./views/edit.html", "utf8");
			var html = ejs.render(template, {row:row});
			res.send(html);
		}
	})
})

app.put("/dbz/:id", function(req, res) {
	var id = req.params.id;
	var data = req.body;
	var name = data.name;
	var dead = parseInt(data.dead);
	var team = parseInt(data.team);
	db.run("UPDATE characters SET name=?, dead=?, team_id=? WHERE id=?", name, dead, team, id, function(err) {
		if (err) {
			console.log(err);
		}
	})
	res.redirect("/dbz/"+id);
})


app.delete("/dbz/:id", function(req, res) {
	var id = req.params.id;
	db.run("DELETE FROM characters WHERE id="+id, function(err) {
		if (err) {
			console.log(err);
		}
	})
	res.redirect("/dbz");
})


app.post("/dbz", function(req, res) {
	var data = req.body;
	var name = data.name;
	var team = parseInt(data.team);
	db.run("INSERT INTO characters (name, dead, team_id) VALUES (?,?,?)", name, 0, team, function(err) {
		if (err) {
			console.log(err);
		}
	});
	res.redirect("/dbz");
})
