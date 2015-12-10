# Week Three and Four Weekend Review



* [Scope](#scope)
* [setInterval vs. setTimeout](#set)
* [Constructors](#constructors)
* [Regex](#regex)
* [File I/O](#fs)
* [JSON](#json)
* [NPM](#npm)
* [EJS](#ejs)


### <a name=scope>Scope</a>

##### Global Scope

* Any variable initialized outside of a function is in the global scope. It is accessible throughout the entire code by any function
* If a variable is created without the "var" keyword and does not exist in the global scope that variable is then added to the global scope. Below is an example.

```
var handsome = function(){
	person = "John Stamos"
	console.log(person);
}

handsome() // "John Stamos"

console.log(person) //"John Stamos"
```

##### Local Scope

* Local Scope takes precedent over Global Scope. Be careful what you name your variables and where you intend to use them. See the below example for Local vs Global Scope

```
var pet = "dog";

var house = function(){
	var pet = "cat";
	console.log(pet) 	//This will return "cat"
}

console.log(pet) 	//This will return "dog"
```


##### Lexical Scope

### <a name=set>setInterval vs. setTimeout</a>

* setTimeout takes a callback function and executes it after a specified timed delay
* The below example will console log "BAM" five seconds after the function is invoked

```
setTimeout(function(){
	console.log("BAM")
}, 5000)
```

* setInterval takes a callback function and executes that function repeatedly after every specified timed interval.  
* "clearInterval" is used to STOP the interval method from executing the function
* The below example will console log "When will this end?" every five seconds after the function is invoked and stop when the count variable hits 10. 

```
var count = 0

var fiveSeconds = function(){
	console.log("When will this end?");
	count++;
	
	if (count === 10){
		clearInterval(fiveSeconds);
	}
}

setInterval(fiveSeconds, 5000);
```

### <a name=constructors> Constructors</a>

##### Constructor Function

A constructor function acts as a blueprint which you can create objects with.

Below is an example of a "turtle" constructor

```
var Turtle = function(name, color, weapon){
	this.name = name;
	this.color = color;
	this.weapon = weapon;
	this.pizza = function(){
		console.log("cowabunga");
	};
};

var raphael = new Turtle("Raphael", "red", "sai");
```

```
console.log(raphael);

RETURNS
{ name: 'Raphael',
  color: 'red',
  weapon: 'sai',
  pizza: [Function] }
```

```
console.log(raphael.pizza());

RETURNS
cowabunga
```

##### THIS keyword

The "this" keyword in JS refers to the refers to the specific object a function is using at that time. 

Let's see how Richard Bovell of www.javascriptissexy.com explains it:

```
"First, know that all functions in JavaScript have properties, just as objects have properties. And when a function executes, it gets the this property—a variable with the value of the object that invokes the function where this is used.
```

The this reference ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method, although it can be used outside a function in the global scope. 

We may use this in a scenario where what we want such as an object's name is not known yet. We want to keep our code DRY and not have to create a new individual object from scratch. With the turtles constructor example above now we can create multiple turtles with all the same properties. 

### <a name=regex>Regex</a>

Regex stands for Regular Expressions. These are a combination of characters we use to target specific elements or patterns in a string. Below are the two resources we used in class today. 

* [Regex Cheat Sheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
	* This site breaks down some command regex commands into readable categories
* [Scriptular](http://scriptular.com/)
	* Scriptular is a service that helps to provide you with specific searching abilities to figure out regex commands
* [Our Notes](https://github.com/ga-students/diana_students/blob/master/w04/d03/Instructor/regex_students.md)
	* This is the markdown I created just for your beautiful people. It covers the exercises we did during our first regex lesson. 
* Below is an example of how we may use regex to remove items from a string to return to us a desired value, in this case a number

```
var earnings = [
  "$243,000",
  "$138,000",
  "$367,000",
  "$275,000,000"
];
```

The below code targets the fourth index of the earnings variable and replaces all the commas and "$" in the string. The "g" at the end stands for global and is how we target all the commas and not just the first one. 
 
```
earnings[3].replace(/\,|\$/g, "");
```

Another way to do this is to target all the numbers in the string. The "^" inside the bracket stands for "NOT" therefore the "[^0-9]" tells javascript to target all the characters which are NOT a number between 0 and 9

```
earnings[3].replace(/[^0-9]/g, '');
```

### <a name=fs>File I/O</a>

* In class we use the "fs" package that comes with node to read and write files. 
* To use the fs package we must require it at the beginning of our code

```
var fs = require('fs');
```

##### Blocking vs. Non Blocking (Sync vs Async)

* Blocking is synchronous. This means your code waits for whatever is currently running to finish before going to the next step.
	* Both fs.readFileSync and fs.writeFileSync are blocking
* Non-Blocking is Asynchronous. All your processes run at the same time. 
	* Both fs.readFile and fs.writeFile are non-blocking
* Why do we want to use async?
	* With async code you can produce data faster than synchronous code. If you are serving up a webpage you and you want to load all the objects on that page at once, writing your code asynchronously will do that. Otherwise, your objects will load one at a time, producing things slower.  

##### Writing code Asynchronously

If you do not want some specific code to execute after another piece of code is run (in an async file), remember callback functions are not invoked until requested. 

```
var fs = require('fs')
var filePath = process.argv[2]

fs.readFile(filePath, function(err, fileContents){
  if(err) {
    console.log(err);
  } else { 
   console.log(fileContents.toString());
  } 
});
```

Another async file with using the "writefile" method

```
var fs = require('fs');

var txt = "hello";

fs.writeFile("blah.txt", txt, function (err) {
  if (err)
    console.log(err)
  } else {
    console.log("it worked!")
  }
});
```

### <a name=json>JSON</a>

JSON allows us to create lightweight data structures in the form of strings which we can parse and manipulate. We can also write code to validate certain parameters we want about the data. 

We stringify values to send out, and we parse values when receiving data.

##### Stringify 

This is a method we use to convert a javascript value into a JSON string. 

```
JSON.stringify(object);
```

##### Parse

This is a method we use to convert a JSON string back into an actual javaScript object:

```
JSON.parse(JSONvalue);
```

### <a name=npm>NPM</a>

NPM is known as "Node Package Manager" but as we discussed it's true meaning is a complete mystery. Every time it's referenced on the npm website you get something new and for the most part funny. 

ANYWAY back to your review. NPM is a package manager that allows us to download and utilize libraries that were created by other people or groups. These libraries are sometimes for fun, and other times they provide us new methods we can use. 

Two commands to know are:

* package.json = this is a file that holds data on what packages you have installed for this directory
	* We use this file as a way to organized our code for ourselves and others. If future you or other people look at your project, the package.json file tells them what packages were used to create your awesome application.
	* To create your package.json file lets type the following into our terminal
	
```
npm init
```

* -g = install this package globally
	* The below example will install the cowsay package globally

```
npm install -g cowsay
```

* --save = install this package locally and put it in your "package.json" file
	* The below example will install the cowsay package locally and put it in your package.json file

```
npm install --save cowsay
```



### <a name=ejs>EJS</a>

EJS stands for Embedded JavaScript. This is a node package that you must install separately. It does not come with node. EJS is a package that allows us to create dynamic html markup, also known as templating. This allows us to present dynamic/changing/updating data without having a million different html pages, or rendering a new page every time a user asks for new data. 

Let's first require the ejs package in our JS file so we can use it's built in methods. (make sure to follow the rules above in the NPM section for creating your package.json and node modules)

```
var ejs = require('ejs')
```

In your JS file you can create some strings that will append to an ejs file. This ejs file will look like and be written in the same format as your html file, but the format will be "index.ejs" instead of "index.html". This ejs file will then render those items into the browser just like an html file would. 

Check out the [EJS NPM page](https://www.npmjs.com/package/ejs). The documentation provides very clear examples and which "clown hats" are used for what. 

Below is our own example of what you can create in a JS file to append to an ejs file. 

Using string concatentation for templating:
```javascript
var turles = [
    {
        "color": "red",
        "name": "Raphael"
    },
    {
        "color": "blue",
        "name": "Leonardo"
    },
    {
        "color": "purple",
        "name": "Donatello"
    },
	{
        "color": "orange",
        "name": "Michelangelo"
    }
]

var html = "<h1>Teenage Mutant Ninja Turtles</h1>"
html += "<ul>"

for(var i = 0; i < turtles.length; i++){
    html += "<li>" + turtles[i]["name"] + "</li>"
}

html += "</ul>"
```



Using EJS for templating (the better method):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
</head>
<body>
    <h1>Teenage Mutant Ninja Turtles</h1>
        <ul>
            <% turtless.forEach(function(turtle){ %>
                <li>
                     <h2><%= turtle.name%> wears a <%= turtle.color %> bandana</h2> 
                </li>
            <% }) %>
        </ul>

</body>
</html>
```


