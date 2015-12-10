# FS + JSON Exercises

Tonight, you'll be practicing reading data and text files into your JavaScript programs as input, then console logging or writing new files as output. Create a new .js file to do your homework in and use the files in this folder to complete these exercises.

### Exercise 1 (I Choose You)

1. Read `charizard.json` into your program, pull information out of the file and parse it.
2. Use the parsed information to put together the following string:

```
"You caught Charizard. This is a pokemon which is both flying and fire type. It has a pokemon index (pkdx_id) of 6. Its attack and defense are 84 and 78."

```

### Exercise 2 (Make Fetch Happen)

1. Using the information in the `mean_girls.json`, create and console log the following string when your program is run.

```
"Mean Girls was released in 2004 and starred Lindsay Lohan, Rachel McAdams, and Tina Fey. This hilarious 97 min comedy is rated PG-13."

```

### Exercise 3 (Sherlock!)

1. Write a command line application that will count the number of lines in the `sherlock.txt`.
2. Modify your command line application to take a single word as an argument and console log the number of times that word is used in `sherlock.txt`.

### Exercise 4 (Netflix)

1. Write a command line application called `netflix.js`. This application will take a single (or multiple) tv show name as an argument and put them into a new file. When you run your application, it should list out your shows:

**Example**
```
node netflix.js Daredevil Sense8 "Orange is the New Black"

node netflix.js show

	Daredevil
	Sense8
	Orange is the New Black
```

### Exercise 5 (1-2-3 Combo)

1. Create two .txt files with a series of words, each on a new line. The first file could look like:
```
Hey
Beautiful
Attractive
Being
```
The second file could look like:
```
You
Smart
Human
```
2. Write a command line application that will take two files as arguments and forms a new file with the words mixed together, one after the other:
The program will take the two files above as input and spit out the below as a console log:
```
Hey
You
Beautiful
Smart
Attractive
Human
Being
```
3. Refactor this code! Now, your output should be a new file called `compliments.txt` rather than a console log.

### Exercise 6 (Tommy Croozes)

```
var cruise = [
	{
	"role": "Pilot",
	"movie": "Top Gun"
	},
	{
	"role": "Race car driver",
	"movie": "Days of Thunder"
	},
	{
	"role": "Bartender",
	"movie": "Cocktail"
	},
	{
	"role": "Sports agent",
	"movie": "Jerry McGuire"
	}
]
```

Write a command line application to "stringify" the `cruise` variable and save it as a file called `cruise.json`

### Exercise 7 (Moar Tommy Croozes)

Write a command line application that takes in `cruise.json` and...

1. ...parses the file,
2. ...matches the appropriate roles to their movies,
3. ...and console logs each role and movie as a string.

**Example:**
```
"Tom Cruise played a pilot in Top Gun"
"Tom Cruise played a race car driver in Days of Thunder"
"Tom Cruise played a bartender in Cocktail"
"Tom Cruise played a sports agent in Jerry Mcguire"
```

### Exercise 8 (Rob Schneider)

```
var desc = ["Fastidious", "Poorly Drawn", "Velveteen", "Multiversal", "Nervous", "Honest"]
var thing = ["Linecook", "Subway Conductor", "Ringleader", "Actor", "Rescue Ranger", "Sherpa", "Yoko Ono Impersonator", "Batman", "Coffee Guy"]
```

Write a command line application that takes the two arrays above and...

1. ...pushes a random item from each array into a single new array,
2. ...wraps the new array up as JSON,
3. ...and writes the JSON to a file called `schneider.json`

Then, write a separate command line application that reads in `schneider.json` and...

1. ...parses the JSON,
2. ...and logs "This summer, Rob Schneider is The " + (the two items from the JSON file).
