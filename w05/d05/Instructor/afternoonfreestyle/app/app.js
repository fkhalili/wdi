var express = require("express");
//we need fs to read in our html and templates
var fs = require("fs");
//we need ejs to template (sorry)
var ejs = require("ejs");

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
  var index = fs.readFileSync("./views/index.html", "utf8");
  res.send(index);
})

app.get("/blogs/new", function(req, res) {
  //read in a form and send it as a response
  var form = fs.readFileSync("./views/new.html", "utf8");
  res.send(form);
})

app.get("/blogs/:id", function(req,res){
  //create a variable that grabs the id from params
  var IDtosearch = req.params.id;
  var template = fs.readFileSync("./views/show.html", "utf8");
  //loop through blogs to find the object with the matching id
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  myData.forEach(function(blog){
    if (blog.id == IDtosearch) {
      //render out some html and send it!
      var rendered = ejs.render(template, blog);
      res.send(rendered);
    }
  })
  //write blog post...
  //we need to read in another template for indidvidadfasdfl blogs
  //template something...
});

app.get("/blogs", function(req, res){
  console.log("thsi route will show all blogs soon");
  //we need to read in a template
  //we need to pass some data into a template and render it
  //then we need to send the result back to the user as a response
  var ourTemplate = fs.readFileSync("./views/allblogs.html", "utf8");
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  var rendered = ejs.render(ourTemplate, {blogs: myData});
  res.send(rendered);
});

app.post("/blogs", function(req, res) {
  var myData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
  var currentID = myData.length + 1;
  var myNewBlog = req.body;
  myNewBlog.id = currentID;
  myData.push(myNewBlog);
  var backToJSON = JSON.stringify(myData);
  fs.writeFileSync("./data.json", backToJSON);
  res.send("<a href='/'> go home </a>");
})

app.listen(3000, function(){
  console.log("listening!");
})