var ejs = require('ejs');
var fs  = require('fs');

var template = fs.readFileSync('birds.html.ejs', 'utf8');
var birds = JSON.parse(fs.readFileSync('birds.json', 'utf8'));

var  html = ejs.render(template, {birds: birds});

fs.writeFile('index.html', html, function(error) {
  if(error) {
    console.log(error);
  }
});
