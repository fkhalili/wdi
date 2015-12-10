
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
  //send form over here
  var form = fs.readFileSync("./views/new.html", "utf8");
  res.send(form);
});

app.get("/contacts/:id", function(req, res) {
  //read in and parse our data
  //loop through, and use control flow to find our object
  var id = req.params.id
  var myData = JSON.parse(fs.readFileSync("./data.json"), "utf8");
  myData.contacts.forEach(function(e) {
    if (id == e.id) {
      var contact = e;
      var template = fs.readFileSync("./views/show.html", "utf8");
      var html = ejs.render(template, contact);
      res.send(html);
      //read file in as template
      //render with ejs
      //send off to user
    }
  });
});

app.get("/contacts/:id/edit", function(req, res) {
  //read in a form
  //read in our data and find the object we need based on id
  //ejs to render data with our form and make html
  //send form over
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
  //read json in
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  //parse it
  console.log(req.body);
  //grab new contact from req.body
  var newContact = req.body
  //assign new object an id based off the counter
  console.log(myData.counter);
  newContact.id = parseInt(myData.counter) + 1;
  console.log(newContact);
  //increment the counter
  myData.counter = parseInt(myData.counter) + 1;
  //push new contact into array within object
  myData.contacts.push(newContact);
  //stringify
  var zipped = JSON.stringify(myData);
  //write the file
  fs.writeFileSync("./data.json", zipped);
  //redirect
  res.redirect("/");
});

app.put("/contacts/:id", function(req, res) {
  //bring in our data and parse it
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
  console.log("delete route hit");
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

