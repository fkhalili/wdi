# Javascript Basics Check In

Record the answers to the following IN THIS FILE where we have indicated 'answer here'. We won't be looking at any other files so make sure you save them in here before submitting!

## Question 1

```javascript
var a = 5
var b = 4
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

```
a === 5 and b === to 4. once (a = b) a was set to b, the value of b is now a. so a === 4.
```

## Question 2

```javascript
var e = 3
var f = 9
var g = e + f
var f === g
var e = 3
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.

```
e = 3 and f = 9 and g = to 12(3 + 9). when the var f was === to g, it only returned false. since === checks if its equivalent wheras = sets a value.
```

## Question 3

```javascript
var weather = "cloudy"
var weather === "cloudy"
```

What is the difference between these two statements? Explain your answer.

```
in weather = "cloudy", the variable weather was set to "cloudy". but when weather === "cloudy", it checks if the weather variable is equivalent to "cloudy", so the return would either be true, false, or null.
```

## Question 4

```javascript
var x = 2

if(x === 3) {
  console.log("sushi is tasty");
} else if (x > 0) {
  console.log("sushi is delicious");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.

```
"sushi is delicious". in the if statement, if x is equivalent to 3 then it would print "sushi is tasty". but since x = 2 it is not equivalent and therefore moves to the else if statement where x > 0, which it is, and prints the second statement.
```

## Question 5

```javascript
var food = "walnut"

if (food === "walnut"){
  console.log("i love walnuts");
}
```

Imagine that you run this code in your browser. What would be the output? Explain your answer.

```
"i love walnuts". because the variable food is set to equal "walnut". then in the if statement, if food is equivalent to "walnut", which it is, prints the statement.
```

## Question 6

```javascript
  var a = "4" + 10
```

What would happen here and why?

```
the variable a is set to a string and a number. though the string is a number it is still a string. because "4" is a string, when "4" + 10 the result isnt 14 but it is 410 with no spaces.
```

## Question 7

```javascript
 var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```

What is the index value of "Michelangelo"?

```
2
```

## Question 8

```javascript
var turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]

for(i = 0; i < 2; i++){
  console.log(turtles[i]);
}
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.
* Would you make any changes to this code?

```
"leonardo""raphael"
the for loop prints each array at turtles[i] starting with turtles[0] which is leonardo. the i is then increased by one which prints the next array. i is then increased again but i is 2 now. since in the for loop it says i < 2  the loop stops and only prints out the first two arrays.
i would probably ad spaces between the names.
```

## Question 9

* Write a function that returns an array with two names as strings inside of it. (don't overthink this)

```
function twoNames (name1,name2) {
    return [name1,name2];
}
```
