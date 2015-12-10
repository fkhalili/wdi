# Data Structures

## Prerequisites

- Basic data types
- Variables
- Variable assignment and definition
- ```process.argv```

##Learning Objectives

- Perform basic operations on an array
- Perform basic operations on an object
- Differentiate between the use case for an array vs an object
- Bracket notation
- Dot notation
- Nesting within arrays and objects

### Array Methods

- push
- pop
- slice
- splice
- shift
- unshift

### Object Methods
- delete

#Part One

## Arrays

 Sometimes it is useful to have a collection of things that logically go together, perhaps a nicely ordered list.  This is where Arrays come in.  For example, let's say we wanted a reference to the Beatles.  This would look like:

```js
var beatles = ['John', 'Paul', 'George', 'Ringo'];
```

Arrays can contain Strings, integers, booleans, etc.

For example, we could have

```js
var names = ['Sung', 'Andy', 'Anna', 'Paul'];
var lotteryNumbers = [7, 2, 45, 15, 9, 66];
var a = [1, 'two', 3, 'four'];
```

Arrays have a `length` property, just like Strings.

```beatles.length ``` will return 4, for example.

Each element in the array has an index (like characters in a String), and, just like Strings, these indexes start at 0.

```beatles[0]``` returns ```'John'```
```beatles[1]``` returns ```'Paul'```, and so on.


Q: In the following array, how would I access "Jeremy"? "Diol"? "Win"?

``var arcadeFire = ['Win', 'Regine', 'Richard', 'William', 'Tim', 'Jeremy', 'Sarah', 'Owen', 'Diol', 'Tiwill', 'Stuart', 'Matt'];``

# Objects

Maybe we want to be more specific about the data we're storing with this array. It would be cool to keep track of each members instrument.

This is a great use case for an Object.

An object is essentially a key value pair.

```js
var nirvana = {
  'Kurt Cobain': 'Guitar',
  'Aaron Burckhard': 'Drums',
  'Krist Novoselic': 'Bass'
};
```
```nirvana['Kurt Cobain']```

Another example:

```js
var nirvana = {
  kurt: 'Guitar',
  aaron: 'Drums',
  krist: 'Bass'
};
```

Or:

```js
var nirvana = {
  'kurt': 'Guitar',
  'aaron': 'Drums',
  'krist': 'Bass'
};
```

now, we can also access values with dot notation

``nirvana.kurt``

Add Jason Everman to the object

``nirvana.jason = 'Guitar';``

or

``nirvana['jason'] = 'Guitar';``

delete "aaron"

``delete nirvana.aaron;``
