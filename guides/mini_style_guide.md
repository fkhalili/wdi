#Mini Style Guide

####On convention:
_"..what side of the road should we drive on? There's not a compelling reason for driving on the left or the right as long as we all drive on the same side. If we don't, then bad things'll happen."_ - Doug Crockford, _JavaScript: The Good Parts_

## Indentation

If you plan on having other human beings reading your code (or re-reading it yourself at some point in the future), it's important to indent your code - HTML, CSS, JavaScript, Ruby, and everything else - properly.

Improperly indented code:

```javascript
var greeting = "hello";
  if (typeof(greeting) == "string"
){
  console.log("It's a string");
    }else{
    console.log("Nope not a string";
            ) };
```

Still hard to read:
```javascript
var greeting = "hello"; if (typeof(greeting) == "string" ){ console.log("It's a string")}else{console.log("Nope not a string")}
```

Fixed:


```javascript
var greeting = "hello";

if ( typeof( greeting ) == "string" ){
  console.log("It's a string");
}else{
  console.log("Nope not a string");
};

```

## Variables: Semantic Naming

Using semantic (meaningful) names in your code is vital to making your code readable. Choose names that will make the purpose of the variable clear:

```javascript
//bad naming:
var x = 45990

//better naming
var dogYears = 49
```

## jQuery Variables

A common convention when using jQuery in your projects is to include a dollar sign in the name of certain variables - particularly, any variable that points to a jQuery object. This is a convention, not a requirement - it helps us keep track of which of our variables are jQuery objects rather than vanilla JS DOM nodes, strings, integers, or other data types.

```javascript
// Yes! Now I'll remember that $coolInput refers to a DOM element I grabbed with jQuery!

var $coolInput = $('input#cool-input');

/* NO. The example below is confusing - $textFromMyInput
is NOT a jQuery object, it's just a string. I can't use
jQuery methods, like .text() or .append(), on it.
*/
var $textFromMyInput = $coolInput.val()

```


## Whitespace

To keep your code compact, use two spaces in your indentation. We'll also convert our tabs into spaces to avoid peppering our code with whitespace characters. (Is this right? I know it messes with Node.)

_In Sublime text, set your default tab spacing by including the following lines in your **user preferences** file:_

```
"tab_size": 2,
"translate_tabs_to_spaces": true
```

## Javascript-Specific Formatting

### Semicolon Use

![img](http://dbackeus.github.io/overcoming-fud-presentation/images/semicolon1.png)
#### Semicolons. Why.

Sometimes in JavaScript, using a semicolon is optional - in certain cases, they're automatically inserted when your code is parsed. However, computers are not that great at guessing what your intentions are. Forgetting a semicolon in the wrong place can break your code or lead to unexpected results. In class, we will use semicolons in the following cases:

- After statements:
  - When declaring a variable: `var i = 0;`
  - When changing a variable's value: ` i = i + 1;`
  - After we define a function: `var myFunc = function() {...}; `
- If you have two statements on the same line, you **MUST** use a semicolon or your code will break.  ` var i = 9; console.log("Wheee") `
- Anywhere the syntax requires them - for example, inside of `for` loops: `for (i = 0; i < 10; i++) {...}`

**Remember, when writing code, it's always better to be explicit.**

#### Linters

A linter is a tool or program that looks for incorrect syntax or other mistakes in your code. One such tool you may find helpful is [JSLint](https://github.com/fbzhong/sublime-jslint), a plugin for Sublime Text. These programs can help alert you to errors and inconsistencies in your code until you are familiar enough to catch them on your own.

<!-- \*_if you're ~~ever bored~~ super interested in why, check out [this post on ASI (Automatic Semicolon Insertion).](http://inimino.org/~inimino/blog/javascript_semicolons)_

OR actually look at the docs that's probably better http://www.ecma-international.org/ecma-262/6.0/index.html#sec-examples-of-automatic-semicolon-insertion

-->

### Commenting in your code

Leaving appropriate, explanatory comments in your code is another way to make your program more understandable.

#### Single-line comments:

```javascript

// Creating an array full of kittens
var kittens = ['Ginger', 'Munchkin', 'Tufts'];

// Logging the name of second kitten in the array
console.log( kittens[1] )

```

#### Block comments:

```javascript

/*
* Below is a list of the words
* an adorable puppy might use in
* everyday conversation
*/

var puppyWords = ['ruff', 'woof', 'bark', 'aroo', 'grr'];

```

#### Brackets and Callbacks:
Some developers find it helpful to include comments at the end of callbacks in javascript to help them keep track of where they are in the asynchronous world of JavaScript:

```javascript
someFunction(function(){
  anotherFunction(function(){
    yetAnotherFunction(function(){
      console.log('Stairway to Hell')
    }) // end of yetAnotherFunction callback
  }) // end of anotherFunction callback
}) // end of someFunction callback
```



## HTML and CSS Formatting

### Indentation

HTML indentation is especially important when dealing with larger documents with many nested elements. Child nodes should be indented within their parent elements for instance:

```html
<html>
  <head>
    <title>
      My Awesome Site
    </title>
  </head>
  <body>
    <div id="content">
      <h1>Welcome</h1>
      <p>
        Welcome to my awesome site!
      </p>
    </div>
  </body>
</html>
```

This code is easy to read and it is apparent where each element lives in the DOM.

### Comments

Comments in html have a simple syntax and help organize the layout of your page:

```html
<!-- HEADER -->
<nav>
  <a href="/">Home</a>
  <a href="/cart">Cart</a>
</nav>

<!-- BODY -->
<div id="content">
  <p>Lorem ipsum</p>
</div>

<!-- FOOTER -->
<span id="footer">
  <p>&copy;2015 My Awesome Company</p>
</span>
```

This markup is easy to read and navigate when editing.

## Capitalization & Naming

Different languages have different conventions for naming variables and files.

#### javaScript uses camelCase!

Ex:  
```javascript
var theNumberThatWillBeAVariable = 2
```

#### ConstructorFunctions use UpperCamelCase!
*(sometimes called PascalCase)*

Ex:

```javascript
var Thing = function Thing() {
  // constructor function is defined here
};

var anotherInstanceOfThing = new Thing();
```

#### file_names use snake_case!

Ex:
```
$ node my_awesome_program.js
```

#### html-and-css use train-case!

Ex:

```css
#super-cool-div { background: papayawhip; }
```

```html
<div id="super-cool-div">
  <p>Oh hai there</p>
</div>
```


<!-- newline at end of file -->
<!-- - Constructors are Capitalized -->
