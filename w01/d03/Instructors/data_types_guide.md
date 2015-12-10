#Day 3 Morning - Primitive Data, Variables, and Operators

##Objectives

* Use both Node and the Command Line to Execute JavaScript Code
* List and Describe the JavaScript Primitive Data Types
* Define and Use Variables
* Apply the Basic Arithmetic and Boolean Operators
* Use the typeof Operator to Determine the Data Type of a Variable
* Change Strings into Numbers, and vice versa
* Interpret JavaScript Expressions using the Correct Order of Operations



#### What is JavaScript?
- The programming language of the internet. JavaScript has traditionally been "run" by web browsers.
- Great for dynamic interaction with HTML and CSS. JavaScript has exploded with high-powered libraries over the past few years.
- But... it's a very sloppy language. This makes JavaScript a relatively "hard" first programming language to learn.
- Node.js allows you to run JavaScript on a machine... without a browser!



#### Using a Sublime Versus Using the Command Line
Running Node.js in Terminal lets you interpret JavaScript without a browser.

The command line is great for entering one liners. We'll use it for today's lesson to make small demonstrations:

```javascript
>node
>'Hello World!'
'Hello World'
```

You can also type your programs using a text editor (like Sublime), and use Node to run the code conatined within that file:

```javascript
> node hello.js
'Hello World'
>
```


#### JavaScript Primitive Data Types
Data is information. JavaScript divides data three basic categories:

1. **Number**: Integers, Decimals. No Fractions.
  - ```NaN``` (Not a Number) represents things that are not a number such as the value of 1/"zero"
  - ```Infinity``` represents the idea of infinity which is returned for statements like 1/0
  - ```var x = 34.00;    // A number with decimals```
  - ```var y = 34;       // A number without decimals```
  - ```var x = 123e5;    // 12300000```
  - ```var y = 123e-5;   // 0.00123```
  - ```Number.MAX_VALUE``` is approximately   ```1.79E+308```.
  - ```Number.MIN_VALUE``` is approximately   ```5e-324```.


2. **String**: Words. Single letters. Lots of built-in functionality.
  - Enclosed in either ```"double quotes"``` or ```'single quotes'```
  - ```var firstName = "Justin";``   or ``var firstName = 'Justin';```
  - ```var lasttName = "Timberlake";``   or ``var lastName = 'Timberlake';```
  - ```var fullName = firstName + " " + lastName;```
  -  Escape Sequences: ```\'```,``` \"```, ```\n```,```\t```
  - ```var openingStatement = '"Hello," ' + firstName+' said. "It\'s me!"';```
  - ```openingStatement.toUpperCase()```
  - ```openingStatement.toLowerCase()```
  - ```openingStatement.indexOf("Hello")```
  - ```openingStatement.substring(9, openingStatement.length)```
  - ```openingStatement.charAt(0)```

3. **Boolean**: True/False
  - ```var playGame = true;```

#### JavaScript Trivial Data Types *(More about these in the next few days)*

4. **Undefined**
5. **Null**

####Aggregate/Composite Data Type *(More about these in the next few days)*

6. **Object**

####Special Operator to Determine Data Type
* ```typeof```

####Changing Numbers into Strings and Strings into Numbers
* ```5 + "" //converts 5 into "5"```
* ```parseInt('5'); //converts  '5' into 5```



####  Variables

What if you want to remember data? You have to reserve a place for that information in memeory.

Use the ``var`` keyword to reserve your variable name. You can name variables whatever you like as long as you follow these rules:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _ (but we will not use it in this tutorial)
- Names are case sensitive (y and Y are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

Good programming practice is to make your variable names "self-documenting" i.e. give them a name that refers to their purpose!

####Basic Operators

Arithmetic operators:

* ```+```  add Numbers or concatentate Strings
* ```-```  subtract
* ```/```  divide
* ```*```  multiply
* ```%```  modulus (integer divide provides remainder after division)
* ```()``` parentheses (used to specify order of operations)

Increment/Decrement Operators:
* ```x++``` return the current value of x, then add 1 and update value of x
* ```x--``` return the current value of x, then subtract 1 and update value of x
* ```++x``` add 1 and update value of x, then return the new value of x
* ```--x``` subtract 1 and update value of x, then return the new value of x

Assignment operators:

* ```=``` assignment ...**Does not say 'are these values equal?'**
* ```+=```  add value to variable, then update the variable with this result
* ```-=```  subtract value from variable, then update the variable with this result
* ```/=```  divide variable by the value, then update the variable with this result
* ```*=```  multiply value by variable, then update the variable with this result
* ```%=```  modulus (integer divide provides remainder after division), then update variable with this result

Boolean operators

* ```!``` not
* ```!!``` not. not. (Identity)
* ```==``` loosely equal to? (Don't use this.)
* ```!=``` loosely not equal to? (Don't use this.)
* ```===``` exactly equal to? (Use this.)
* ```!==``` exactly not equal to? (Use this.)
* ```>```  greater than?
* ```<```  less than?
* ```>=``` greater than or equal to?
* ```<=``` less than or equal to?

Logical operators
* ```&&``` and
* ```||``` or
* "Lazy Evaluation"






#### The JavaScript Order of Operations
![](http://collegelabs.co/clabs/nld/images/expressionTee.png)

Languages can ask you to "read" using different protocols. For instance, English instructions are read from left-to-right, top-to-bottom. However, Arabic script is read from right-to-left. JavaScript also has a protocol for reading instructions: "inside out" and maybe "out of order" (i.e. asynchronous).

| Precedence  | Operators |
| ------------- | ------------- |
| 1  | ( )  |
| 2  | Function Call |
| 3  | postfix ++, postfix --  |
| 4  | !, -, prefix ++, prefix--, typeof |
| 5  | *, /, % |
| 6  | +, - |
| 7  | <, <=, >, >= |
| 8  | ==, !=, ===, !== |
| 9  | && |
| 10  | \|\| |
| 11 | *=, /=, %=, +=, -=, =|


## HW/CW
