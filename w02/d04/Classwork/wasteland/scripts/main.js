console.log("main.js linked");


var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];

<<<<<<< HEAD
var house = document.createElement("div");
house.className = "dwelling";

var body = document.querySelector("body");
body.appendChild(house);

var topLevelHeader = document.createElement("h1");
var span = document.createElement("span");

span.textContent = "seeming wasteland";
=======

var house = document.createElement('div');
house.setAttribute('class', 'dwelling');

var body = document.body;
body.appendChild(house)

var topLevelHeader = document.createElement('h1');
var span = document.createElement('span'); 

span.textContent = "Seeming Wasteland";
>>>>>>> 72a1badc931672193918598ee6abb2c349e543cb

span.className = "shadowed";

topLevelHeader.appendChild(span);

body.appendChild(topLevelHeader);

<<<<<<< HEAD
var waldo = document.createElement("div");
=======
var waldo = document.createElement('div');
>>>>>>> 72a1badc931672193918598ee6abb2c349e543cb

waldo.id = "waldo";

body.appendChild(waldo);

<<<<<<< HEAD
createUl = document.createElement("ul");

for (var i = 0; i < birds.length; i++) {
	var list = document.createElement("li");
	list.className = "bird";
	list.textContent = birds[i];
	createUl.appendChild(list);
}

body.appendChild(createUl);

var div = document.createElement("div");
div.className = "news0";
body.appendChild(div);

var article = document.createElement("article");
article.className = "news1";
body.appendChild(article);

var h1 = document.createElement("h1");
h1.className = "news2";
body.appendChild(h1);

var h2 = document.createElement("h2");
h2.className = "news3";
body.appendChild(h2);

var h3 = document.createElement("h3");
h3.className = "news4";
body.appendChild(h3);

span.textContent = "Teeming Funland";

=======
var thisList = document.createElement('ul');

birds.forEach(function(birdy) {
  var newLi = document.createElement('li');
  newLi.className = "bird";
  newLi.textContent = birdy;
  thisList.appendChild(newLi);
});

// var unorderedList0 = document.createElement('ul');
// for (var i = 0; i < birds.length; i++){
//     var birdLi = document.createElement('li');
//     birdLi.className = 'bird';
//     birdLi.textContent = birds[i];
//     unorderedList0.appendChild(birdLi);
// }
// document.body.appendChild(unorderedList0);


body.appendChild(thisList);

var image = document.createElement('img');
body.appendChild(image);

var newDeeev = document.createElement('div');
body.appendChild(newDeeev);

var h2 = document.createElement('h2');
body.appendChild(h2);

var h3 = document.createElement('h3');
body.appendChild(h3);

var article = document.createElement('article');
body.appendChild(article);

span.textContent = 'TEEMING FUNLAAAANND!!!!'
>>>>>>> 72a1badc931672193918598ee6abb2c349e543cb





