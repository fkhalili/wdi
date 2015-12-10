var ejs = require("ejs");
var fs = require("fs");

// var duck = {name: "Harrison", bill: "waxed"};

var myData = fs.readFileSync("./data.json", "utf8");
var parsed = JSON.parse(myData);

// var html = "<h1> <%= bill %> </h1> <h2> <%= name %> </h2>";
var template = fs.readFileSync("./template.html", "utf8");

var rendered = ejs.render(template, {augustine : parsed});

fs.writeFileSync("./taylorSwift.html", rendered);
console.log(rendered);