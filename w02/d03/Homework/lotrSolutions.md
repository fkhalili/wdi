##premise

````javascript
console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];
// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];
// Starter code for the body
var body = document.querySelector('body');

````

### solution 1

````javascript
// create a section tag with an id of middle-earth
    // add each land as an article tag (add them one by one in a loop)
    // inside each article tag include an h1 with the name of the land
    // each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
    // append middle-earth to your document body
var makeMiddleEarth = function makeMiddleEarth() {
	var middleEarth = document.createElement("section");
	body.appendChild(middleEarth);
	middleEarth.id = ("middle-earth");
	for (var i = 0; i < lands.length; i++) {
		var makeLands = document.createElement("article");
		middleEarth.appendChild(makeLands);
		makeH1 = document.createElement("h1");
		makeH1.textContent = lands[i];
		makeLands.appendChild(makeH1);
		makeLands.className = lands[i];
	}
}
makeMiddleEarth();
````


###solution 2

````javascript
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit
var makeHobbits = function makeHobbits() {
	var makeUl = document.createElement("ul");
	var shire = document.querySelectorAll("article")[0];
	shire.appendChild(makeUl);
	for (var i = 0; i < hobbits.length; i++) {
		var makeLi = document.createElement("li");
		var ul = document.querySelector("ul");
		makeLi.textContent = hobbits[i];
		ul.appendChild(makeLi);
	}

}
makeHobbits();

````

###solution 3

````javascript
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
var keepItSecretKeepItSafe = function keepItSecretKeepItSafe() {
	var makeDiv = document.createElement("div");
	makeDiv.id = "the-ring";
	makeDiv.className = "magic-imbued-jewelry";
	var frodo = document.querySelector("li");
	frodo.appendChild(makeDiv);

}
keepItSecretKeepItSafe();

````


###solution 4

````javascript
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var makeBuddies = function makeBuddies() {
	var makeAside = document.createElement("aside");
	var rivendell = document.querySelectorAll("article")[1];
	rivendell.appendChild(makeAside);
	var makeUl = document.createElement("ul");
	var aside = document.querySelector("aside");
	aside.appendChild(makeUl);
	for (var i = 0; i < buddies.length; i++) {
		var makeLi = document.createElement("li");
		var ul = document.querySelectorAll("ul")[1];
		makeLi.textContent = buddies[i];
		ul.appendChild(makeLi);
	}
}

makeBuddies();
````


###solution 5

````javascript

  // change the 'Strider' textnode to 'Aragorn'
var beautifulStranger = function beautifulStranger() {
	var Aragorn = document.querySelectorAll("li")[7];
	Aragorn.textContent = "Aragorn";
}
beautifulStranger();

````


###solution 6

````javascript

  // assemble the hobbits and move them to Rivendell
var leaveTheShire = function leaveTheShire() {
var ul = document.querySelectorAll("ul")[1];
	for (var i = 0; i < hobbits.length; i++) {
		var people = document.querySelector("li");
		ul.appendChild(people);

	}
}

leaveTheShire();

````

###solution 7

````javascript

  // create a new div with an id of 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
var forgeTheFellowShip = function forgeTheFellowShip() {
	var div = document.createElement("div");
	div.id = "the-fellowship";
	var rivendell = document.querySelectorAll("article")[1];
	rivendell.appendChild(div);
	var fellowship = document.querySelector("#the-fellowship");
	var makeUl = document.createElement("ul");
	fellowship.appendChild(makeUl);
	var ul = document.querySelectorAll("ul")[2];

	for (var i = 0; i < 9; i++) {
	var people = document.querySelector("li");
	ul.appendChild(people);
	alert(people.textContent + " has joined the fellowship!");
	}


}

forgeTheFellowShip();

````



###solution 8

````javascript

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // add a gray 3px border with
function theBalrog() {
	var gandalf = document.querySelector("li");
	gandalf.style["border"] = "3px solid gray";
	gandalf.style["width"] = "65px";
}

theBalrog();

````

###solution 9

````javascript

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
function hornOfGondor() {
	alert("The Horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!!");
	var boromir = document.querySelectorAll("li")[4];
	var ul = document.querySelectorAll("ul")[2];
	boromir.style.textDecoration = "line-through";
	ul.removeChild(boromir);
}

hornOfGondor();

````


###solution 10

````javascript
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
function itsDangerousToGoAlone(){
	var makeDiv = document.createElement("div");
	var mordor = document.querySelector(".Mordor");
	mordor.appendChild(makeDiv);
	var div = document.querySelectorAll("div")[3];
	var ul = document.createElement("ul");
	div.id = "mount-doom";
	mordor.appendChild(ul);
	var frodo = document.querySelectorAll("li")[4];
	var sam = document.querySelectorAll("li")[5];
	ul.appendChild(frodo);
	ul.appendChild(sam);
}

itsDangerousToGoAlone();

````

###solution 11

````javascript

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
var weWantsIt = function weWantsIt() {
	var makeDiv = document.createElement("div");
	var mordor = document.querySelector(".Mordor");
	makeDiv.className = "gollum";
	mordor.appendChild(makeDiv);
	var gollum = document.querySelector(".gollum");
	var ring = document.querySelector("#the-ring");
	gollum.appendChild(ring);
	var mountDoom = document.querySelector("#mount-doom");
	mountDoom.appendChild(gollum);
}

weWantsIt();

````


###solution 12

````javascript
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
thereAndBackAgain = function thereAndBackAgain() {
	var gollum = document.querySelector(".gollum");
	var mountDoom = document.querySelector("#mount-doom");
	mountDoom.removeChild(gollum);
	var shire = document.querySelector("article");
	var hobbits = document.querySelectorAll("ul")[3];
	shire.appendChild(hobbits)

}

thereAndBackAgain();

````
