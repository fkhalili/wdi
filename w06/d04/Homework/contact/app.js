
//dependencies
var express = require("express");
var app = express();
var fs = require("fs");
var ejs = require("ejs");

//middleware
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


//config
app.listen(3000, function() {
  console.log("I'm listening!");
});

//routes
app.get("/", function(req, res) {
  var html = fs.readFileSync("./views/index.html", "utf8");
  var myData = JSON.parse(fs.readFileSync("./data.json"), "utf8");
  var rendered = ejs.render(html, {apples: myData});
  res.send(rendered);
});

app.get("/contacts/new", function(req, res) {
  var form = fs.readFileSync("./views/new.html", "utf8");
  res.send(form);
});

app.get("/contacts/:id", function(req, res) {
  var id = req.params.id
  var myData = JSON.parse(fs.readFileSync("./data.json"), "utf8");
  myData.contacts.forEach(function(e) {
    if (id == e.id) {
      var contact = e;
      var template = fs.readFileSync("./views/show.html", "utf8");
      var html = ejs.render(template, contact);
      res.send(html);
    }
  });
});

app.get("/contacts/:id/edit", function(req, res) {
  var form = fs.readFileSync("./views/edit.html", "utf8");
  var myData = JSON.parse(fs.readFileSync("./data.json"), "utf8");
  myData.contacts.forEach(function(contact) {
    if (contact.id == req.params.id) {
      var rendered = ejs.render(form,contact);
      res.send(rendered);
    }
  })
});

app.post("/contacts", function(req, res) {
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  var newContact = req.body
  newContact.id = parseInt(myData.counter) + 1;
  myData.counter = parseInt(myData.counter) + 1;
  myData.contacts.push(newContact);
  var zipped = JSON.stringify(myData);
  fs.writeFileSync("./data.json", zipped);
  res.redirect("/");
});

app.put("/contacts/:id", function(req, res) {
  var myData = JSON.parse(fs.readFileSync("./data.json"), "utf8");
  myData.contacts.forEach(function(contact) {
    if (contact.id == req.params.id) {
      contact.contactname = req.body.contactname;
      contact.contactage = req.body.contactage;
      contact.contactemail = req.body.contactemail;
      var json = JSON.stringify(myData);
      fs.writeFileSync("./data.json", json);
      res.redirect("/");
    }
  });
});


app.delete("/contacts/:id", function(req, res) {
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  myData.contacts.forEach(function(contact,index,array) {
    if ( contact.id == req.params.id){
      var index = myData.contacts.indexOf(contact);
      myData.contacts.splice(index,1);
      var json = JSON.stringify(myData);
      fs.writeFileSync("./data.json", json);
      res.redirect("/");
    }
  });
});

