## Fellowship of the Ring DOM Manipulation

Create a function for each of the following steps to practice DOM Manipulation and JavaScript. These should each be called in order after the window has loaded.

#### Exercise Objectives
- practice querying and manipulating the DOM with JavaScript
- gain experience manipulating the DOM with JavaScript

### Thoughts
- You will need to use loops in your functions to do things like dynamically adding or removing list items from an unordered list.
- Always keep in mind the parent/child node relationship on the DOM. This is key for understanding and manipulating objects on the DOM.

### Setup
- Everything within this directory should be linked properly. You don't need to serve any files, simply open index.html in Chrome and access the developer console to begin work.
- You should see the word "LINKED" at the top of the console.
- Do all of your work in the fellowship.js file included in the scripts folder.

## 1

```

function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    // add each land as an article tag (add them one by one in a loop)
    // inside each article tag include an h1 with the name of the land
    // each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
    // append middle-earth to your document body
}

```

## 2
```
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}
```

## 3
```
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
}
```

## 4

```
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
```

## 5

```
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}
```

## 7
```
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}
```

## 8

```
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
}
```

## 9

```
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // add a gray 3px border with
}
```

## 10
```
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
```

## 11
```
    function itsDangerousToGoAlone(){
      // take Frodo and Sam out of the fellowship and move them to Mordor
      // add a div with an id of 'mount-doom' to Mordor
    }
```

## 12
```
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
```

## 13
```
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
```
