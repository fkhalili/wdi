###Knighter

- define a function, `knighter`, that takes a name and returns it (and logs it) after being knighted.

```javascript
var knight = function knighter(name) {
  console.log("sir " + name);
  return ("sir " + name);
}
//Sir Andy
```

###royalizer

- define a function, `royalizer`, that takes a gender and name as arguments, and returns (and logs) a title based on the gender.

```javascript
var royalizer = function royalizer(gender, name) {
  if (gender === "male") {
    console.log("His majesty " + name);
    return ("His majesty " + name);
  }
  else if (gender === 'female'){
    console.log("Her majesty " + name);
    return ("Her majesty " + name);
  }
  else {
    return "error";
  }
}
```

###adder

- define a function, `adder`, that takes two numbers and returns their sum. Log it as well.

```javascript

var adder = function adder(x,y) {
  console.log(x + y);
  return (x + y);
}

```
