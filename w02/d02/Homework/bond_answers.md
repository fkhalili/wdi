```` javascript

bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
]

````

## Solution 1

````javascript

var totalGross = 0;
var grossArray =

//loops through bondFilms to calculate each gross
bondFilms.map(calculateGross);

//function to remove non-integers and parse the string
function calculateGross(element){
    var initialGross = element.gross.split("$").join("");
    initialGross = initialGross.split(",").join("");
    return parseInt(initialGross);
}
//calculating the sum
for (var i = 0; i < grossArray.length; i++) {
    totalGross += grossArray[i];
}
console.log(totalGross);

````

## Solution 2

````javascript

//Storing all actor names into an array names
var names = bondFilms.map(function(element) {
    return element.actor;
});

//pushing the element into the array uniqeNames if there are duplicates
var uniqeNames = [];
names.map(function(element) {

//if the indexOf the element is not found, push it in the uniqe name
  if (uniqeNames.indexOf(element) === -1){
      uniqeNames.push(element);
  }
});

console.log(uniqeNames);

````

## Solution 3

````javascript

var titles = bondFilms.map(function(element) {
    return element.title;
});

console.log(titles);

````

## Solution 4

````javascript

var oddBonds = bondFilms.filter(function(element) {
    return element.year % 2 === 1;
})

console.log(oddBonds);

````

## Solution 5

````javascript

var newBonds = bondFilms.filter(function(element) {
  return element.year > 1980;
})

console.log(newBonds);

````

## Bonus 1

````javascript

var leastActor = bondFilms.filter(function(element) {
  return element.actor === "George Lazenby"
})
console.log(leastActor);

````

## Bonus 2

````javascript

var highestGrossingBond = bondFilms.map(function(element) {

})



````
