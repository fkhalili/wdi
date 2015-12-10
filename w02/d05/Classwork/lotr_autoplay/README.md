## Fellowship of the Ring DOM Manipulation

Create a function for each of the following steps to practice DOM Manipulation and jQuery. These should each be called in order after the window has loaded.

#### Exercise Objectives
- Practice querying and manipulating the DOM with jQuery!

### Thoughts
- You will need to use loops in your functions to do things like dynamically adding or removing list items from an unordered list.
- Always keep in mind the parent/child node relationship on the DOM. This is key for understanding and manipulating objects on the DOM.

### Setup
- Everything within this directory should be linked properly. You don't need to serve any files, simply open index.html in Chrome and access the developer console to begin work.
- You should see the word "LINKED" at the top of the console.
- Do all of your work in the **fellowship.js** file included in the scripts folder.

## 1

```
var makeMiddleEarth = function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  // use setTimeout to delay the execution of the next function (in this case, makeHobbits) by several seconds
}
```

## 2
```
var makeHobbits = function makeHobbits() {
  // display an unordered list of hobbits in the shire (the first article tag on the page)
  // give each hobbit a class of 'hobbit'
  // use setTimeout to delay the execution of the next function
}
```

## 3
```
var keepItSecretKeepItSafe = function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  // use setTimeout to delay the execution of the next function
}
```

## 4

```
var makeBuddies = function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of Rivendell
  // use setTimeout to delay the execution of the next function
}
```

## 5

```
var beautifulStranger = function beautifulStranger() {
  // change the 'Strider' textnode to read 'Aragorn' and make the text green
  // use setTimeout to delay the execution of the next function
}
```

## 6
```
var leaveTheShire = function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // use setTimeout to delay the execution of the next function
}
```

## 7

```
var forgeTheFellowShip = function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  // use setTimeout to delay the execution of the next function by several seconds
}
```

## 8

```
var theBalrog = function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element, adding a 3px solid white border to gandalf
  // use setTimeout to delay the execution of the next function
}
```

## 9
```
var hornOfGondor = function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on Boromir's name and fade his opacity to 0.3 (he lives on in spirit)
  // use setTimeout to delay the execution of the next function
}
```

## 10
```
var itsDangerousToGoAlone = function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  // use setTimeout to delay the execution of the next function
}
```

## 11
```
var weWantsIt = function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  // use setTimeout to delay the execution of the next function
}
```

## 12
```
var thereAndBackAgain = function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
```

#### Bonus

- Within the callback for clicking event '#the-ring", make it not only call nazgulScreech, but also cause Frodo to fade out, only to fade in 3 seconds later
  - look up jquery's `fadeOut` and `fadeIn` methods
- If the ring is clicked 3 times, make Sauron's eye expand in size. Then after a slight delay, the entire body element should disappear, to be replaced with the text "The Ring has been returned to Sauron and the world is over."

#### Resources

- [Official jQuery Documentation](http://jquery.com)
- [MDN](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
