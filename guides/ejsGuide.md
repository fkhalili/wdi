
###EJS and Templating

Templating is a key component of any web application. Templating allows us to dynamically 'mix' our data and HTML to ultimately render a string of HTML dynamically. Here is how to use EJS to take objects representing humans and generate some HTML!

**`Don't forget to npm install ejs`**

###Part One: A Single Object.

1. Look at your Data. This could be read in from a file, or just be formatted as an object. Notice we have two keys in the object: name and age

```javascript
var myObject = {name: "andy", age: 28};
```

2. Create a template.
  - This can be either a string within your program, or more commonly an outside file which is read in as a string. It should be formatted like HTML.
  - We use Templating to dynamically SWAP values (shout out to Swap). In order that EJS knows where to make this swap happen, we need to DELIMIT the point where the HTML should stop and the swapping logic should begin. For now, our delimiter is this `<%=` and `%>`
  - EJS will look for delimited words that match the KEYS in the object holding our data. Above, we have the keys of `name` and `age`. Look at the HTML below. The keys there match the keys in the object we will be passing in.


  ```html
  <h1> My name is <%= name %> </h1>
  <h2> I am <%= age %> years old </h2>
  ```
  - let's make a js variable pointing at that string:

  ```javascript
  var myTemplate = "<h1> my name is <%= name %> </h1> <h2> I am <%= age %> years old </h2>"
  ```

  3. Render some HTML!
    - Now that we've got a template variable and an object variable, let's marry the two!

    ```javascript
    var renderedHTML = ejs.render(template, myObject);
    ```

###To Review
  ```javascript
  //we have an object with keys and values
  var myObject = {name: "andy", age: "28"};
  //we have a template with delimited keys matching our object
  var myTemplate = "<h1> my name is <%= name %> </h1> <h2> I am <%= age %> years old </h2>"
  //we call the render method and pass in our template string and the object as arguments. Tada!
  var renderedHTML = ejs.render(template, myObject);
  ```


###Part Two: An Array of Objects

We can also use EJS to handle an array of objects.


1. Look at our data. Now we have an array of people objects, with `name` and `age` for keys

```javascript
var arrayOfPeople = [
  {name: "andy", age: "28"},
  {name: "alf", age: "300"},
  {name: "rick steves", age: "50"}
]
```

2. Create a template. We can now use javascript logic to iterate through our objects and render HTML for each one.

```javascript
var template = "<% people.forEach(function(person){ %>" +
  "<h1> My name is <%= person.name %> </h1>" +
  "<h2> I am  <%= person.age %> years old </h2>" +
  "<% }) %>"
```
- Notice that this template has TWO delimiters `<%=` and `<%`. The `<%` is used to tell EJS that we are performing some js logic (control flow, or a forEach), but not rendering anything on that line. The `<%=` tells ejs that it will need to render something out.

3. Render some HTML!

```javascript
var html = ejs.render(template, {people: arrayOfPeople})
```

- Once again, we use the EJS render method, only this time we pass in a key value pair as our second argument, rather than a single object. The Key in that pair will be referenced within EJS. Here, we use the key `people`

###To Review

```javascript
//we have an array of objects, called arrayOfPeople
var arrayOfPeople = [
  {name: "andy", age: "28"},
  {name: "alf", age: "300"},
  {name: "rick steves", age: "50"}
];
//we create a template with TWO delimters, one to control logic, one to render HTML.
var template = "<% people.forEach(function(person){ %>" +
  "<h1> My name is <%= person.name %> </h1>" +
  "<h2> I am  <%= person.age %> years old </h2>" +
  "<% }) %>"
//we call the render method again, and this time pass a key value pair to pass a whole array of objects into the template
var html = ejs.render(template, {people: arrayOfPeople})

```
