var ejs = require('ejs');
var fs = require('fs');

var myData = fs.readFileSync("./data.json","utf8");
var parsed = JSON.parse(myData);

var template = fs.readFileSync("./template.html","utf8");
var rendered = ejs.render(template, {song: parsed});

console.log(rendered);