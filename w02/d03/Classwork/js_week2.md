# Javascript Week 2 Check In

Record the answers to the following IN THIS FILE where we have indicated
'answer here'. We won't be looking at any other files so make sure you
save them here before submitting!

## Question 1
```javascript
var b = "cat";
var a = "dog";
a = b;
a === "duck";
```
At the end of this program, what is the value of a? Try to explain,
in plain English, how you got your answer

```
the answer is false.
if b is cat and a is dog. when you set a to b, a is now whats inside of b which is cat.
when you compare a to duck, youre checking if they are equivalent to eachother. which is false.

```

## Question 2
```javascript
var myFunc = function myFunc() {
  console.log("hello world");
};

myFunc;
```
A student is trying to write an application which logs "hello world", however, the application is not working properly.
In plain English, explain what changes need to be made to the student's code.
```
when you call the function you need to have a () to input the arguements. even though myFunc doesnt use any arguements, when you call it, it must be called as myFunc();
```

## Question 3
```javascript
var myFunc = function myFunc(name) {
  console.log("Hi, my name is " + name);
};
```
Given the function myFunc, how would you use this function to log your
name to the console? Please answer using JavaScript.
```
myFunc("Daniel");
```

## Question 4
```javascript
var a = 1;
var b = 2;
var myFunc = function myFunc() {};

if (a = b) {
  console.log('error!');
} else {
  myFunc();
}
```
A student is trying to write a conditional which is supposed to return
false and run myFunc, however, the student keeps getting an error
message. Rewrite the conditional in the space below to fix the student's
conditional. Using a JavaScript comment, explain why the student
was getting an error message

```
var a = 1;
var b = 2;
var myFunc = function myFunc() {};

//instead of setting a to b youre checking if it is equivalent. a = b sets a to b which will //always happen, that is why it will always return "error!". But if you compare it a === b, if //its true it will print error, but when its false it will run the empty function myFunc.
if (a === b) {
  console.log('error!');
} else {
  myFunc();
}
```

## Question 5
```javascript
var rangers = {
  red: "Jason",
  black: "Zack",
  yellow: "Trini",
  blue: "Billy",
  pink: "Kimberly",
  green: "Tommy"
};
```
Given the object of rangers, how would you access the yellow ranger?
Please answer using JavaScript.
```
rangers.yellow;
rangers["yellow"];
```

## Question 6
```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
```
Write an application using `for` which loops through turtles and logs
each turtle name plus the string " likes pizza".
```bash
> "Donatello likes pizza"
> "Leonardo likes pizza"
...
```
```
for (var i = 0; i < turtles.length; i++) {
  console.log(turtles[i], "likes pizza")
}
```

## Question 7
```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
```
Similar to the question above, write an application using `forEach` which loops through turtles and logs each turtle name plus the string " likes pizza".
```bash
> "Donatello likes pizza"
> "Leonardo likes pizza"
...
```
```
turtles.forEach(function (element) {
    console.log(element);
})

```

## Question 8
```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"];
var i = 0;
while (turtle !== "Michelangelo") {
  var turtle = turtles[i];
  console.log("This is not the turtle you are looking for");
  i++;
}
```
How many times will this program tell you "This is not the turtle you are looking for"?
```
three times
```

## Question 9
```javascript
var crimefighters = {
  turtles: ["Leonardo", "Raphael", "Michelangelo", "Donatello"],
  rangers: {
    red: "Jason",
    black: "Zack",
    yellow: "Trini",
    blue: "Billy",
    pink: "Kimberly",
    green: "Tommy"
  }
};
```
Given the crimefighters object, how would you access Donatello?
Please answer using JavaScript.
```
crimefighters.turtles[3];

```

## Question 10
```javascript
var crimefighters = {
  turtles: ["Leonardo", "Raphael", "Michelangelo", "Donatello"],
  rangers: {
    red: "Jason",
    black: "Zack",
    yellow: "Trini",
    blue: "Billy",
    pink: "Kimberly",
    green: "Tommy"
  }
};
```
Given the crimefighters object, how would you access the red ranger's
name?
Please answer using JavaScript.
```
crimefighters.rangers.red;
```
