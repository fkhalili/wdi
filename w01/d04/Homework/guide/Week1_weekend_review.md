# WDI 6/29 WK1 JavaScript Fundamentals

## Comparison vs. Assignment

* When assigning a value we use ONE equal sign. 

```
var a = 8;

var name = "Jason";

var city = "New York";

var lotr = "Sam";

var correct = false;
```

* When comparing values such as in your if/else statements, loop statements, and the like we use THREE equal signs. 

```
if (a === 5){
	console.log(a)
} else if (city === "New Orleans"){
	console.log("Drew Brees is DA BESSS");
} else {
	console.log("look ma, no equal signs in this last else");
}


while (correct === false){
	var guess = prompt("Who is the real hero in the quest to Mordor")
	if(lotr === "Sam"){
		console.log("Good Choice Adventurer");
	} else if (lotr === "Legolas") {
		console.log("Orlando Bloom is pretty but NO guess again");
	} else if (lotr === "Aragorn"){
		console.log("Hildalgo was a dumb movie");
	} else if (lotr === "Gandalf"){
		console.log("He lost to Saruman, what a bad guess");
	} else {
		console.log("Try again");
	}
}
```


## Control Flow

* This week we covered some JavaScript Control Flow. JS provides you a set of statements which you can use to control the activity within your application. 

##### If / Else  Statements
* These statements are pretty self explanatory. It checks to see if a statement is true, and there is an optional "else" condition you can add on. 

```
var height = process.argv[2];

if (height > 6){
	console.log("Can you dunk a basketball");
} else if (height < 5){
	console.log("You're not short, you're fun size");
} else {
	console.log("hah you're just normal :P");
}

```

##### Booleans and Logical Operators

* This week you guys also learned about Booleans and Logical Operators. These are handy when we use control flow operators because we need to check if a condition or value is true. Below is an example of testing the value of turtle (true or false) and using the OR (||) operator

```
var turtle = prompt("who is the coolest turtle");

if (turtle === "Raphael"){
	console.log("you are correct, here's your invitation to the cool club");
} else if ((turtle === "Leonardo") || (turtle === "Michealangelo") || (turtle === "Donatello")){
	console.log("NO they just get in the way of Ralphs coolness");
} else if (turtle === "splinter"){
	console.log("seriously? they aren't even the same species");
} else {
	console.log("guess again");
}
``` 
* Check out the other operators here at the [MDN Logical Operators Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


##### Process.argv[2]

* Process.argv creates an array from your node command line call. The reason we used the numbers "2" or higher is because we are grabbing the value from the SECOND index or higher of this array. 

```
var name = process.argv[2];

(in the terminal)

node filepathname Jason

var name = "Jason";
```
* Remember that process.argv also returns the value as a string. There are ways to change this should you want to grab an integer and the like. (think "parseInt").

 
##### While Loops

* While loops will take a condition and run a block of code as long as that condition is true. Make sure to include a way to make the condition false so you do not fall into an infinite loop

* Below will be an infinite loop

```
var tmnt = 0;

while (tmnt < 4){
	console.log("where are the rest of the turtles?");
}

```

* How can we make sure to close the loop?

```
var tmnt = 0;
var team = "none"

while (team === "none"){
	if (tmnt === 4){
		console.log("The turtles are back");
		team = "here";
	} else {
		console.log("Where are the turtles?");
		tmnt+=1;
	}
}

```

## Arrays

* Arrays are a data type in JavaScript that will hold your data which you can in turn manipulate that information.
* It may be easier to think of an Array as an ordered list. Below is an example of how we may initialize an array, and manipulate that array and "push" more values inside of it

```
var powerRangers = ["Jason", "Kimberly", "Billy", "Zack", "Trini"];

powerRangers.push("Zordon", "Alpha");

powerRangers is now ["Jason", "Kimberly", "Billy", "Zack", "Trini", "Zordon", "Alpha"];
```

* For more methods on what you can do with arrays check out the MDN documentation here: [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


## Objects

* Objects are a collection of key value pairs.

```
var pokemon = {
	"Squirtle" : "Water",
	"Charmander" : "Fire",
	"Bulbasaur" : "Grass"
}
```

* To call the values of one of the keys in the objects you can use square brackets "[]" or dots ".". Remember if you store an object within another object and would like to call something the dot notation will not work. 

```
pokemon["Charmander"]

OR 

pokemon.Charmander

returns "Fire"
```

* You can also add or edit values within an object
* Adding

```
pokemon.Hitmonchan = "Fighter";
	OR
pokemon[Hitmonchan] = "Fighter";

```
* Edit

```
pokemon.Charmander = "Flame";
	OR
pokemon[Charmander] = "Flame";
```
