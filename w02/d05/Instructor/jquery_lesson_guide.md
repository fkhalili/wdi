#jQuery

#### Prerequisites

- Javascript Fundamentals
- Javascript Callbacks
- HTML/CSS Fundamentals
- DOM
- Browser console

#### Learning Objectives

- Use jQuery to traverse and manipulate the DOM
- Use jQuery for Event Handling
- Use setTimeout


#### Docs

[https://api.jquery.com/](https://api.jquery.com/)

#### Common Methods

Delay Functions:

- setTimeout(callbackFunction, delayInMilliseconds)

Main Function:

- ```$('p')``` // returns a jQueryCollection of domNodeElements (selection)
- ```$('<p>')``` or ```$('<p>cupcakes</p>')``` returns a new element wrapped in a jQueryObject (creation)
- ```$(domNodeElement)``` returns a jQueryObject (coercion)
- ```$(function(){})``` is an alias for ```$(document).ready(function(){})``` (awesomesauce)

Selection:

- jQueryObject.find(cssSelectorString) returns the descendants of the jQueryObject's element that matches the CSS selector string
- jQueryObject.children()

Selecting from a jQueryCollection:

- jQueryCollection.eq(index) returns a jQueryObject
- jQueryCollection.get(index) returns a domNodeElement

Property Lookup & Manipulation:

- jQueryObject.html()
- jQueryObject.empty()
- jQueryObject.attr()
- jQueryObject.css()
- jQueryObject.val()
- jQueryObject.prop()
- jQueryObject.text()
- jQueryObject.addClass()
- jQueryObject.removeClass()
- jQueryObject.toggleClass()
- jQueryObject.width()
- jQueryObject.height()


Add and Remove from DOM:

- jQueryObject.append()
- jQueryObject.appendTo()
- jQueryObject.prepend()
- jQueryObject.prependTo()
- jQueryObject.after()
- jQueryObject.before()
- jQueryObject.remove()


Show and Hide:

- jQueryObject.show()
- jQueryObject.hide()
- jQueryObject.toggle()
- jQueryObject.fadeIn()
- jQueryObject.fadeOut()


Events:

- jQueryObject.on()
- jQueryObject.off()
- jQueryObject.click()
- jQueryObject.keypress()
- jQueryObject.keydown()
- jQueryObject.keyup()

Other:

- $(document).ready()
- jQueryObject.delay()
- jQueryCollection.each() remember that a jQueryCollection contains bare domNodeElements
- jQueryCollection.filter()
- jQueryCollection.slice()

###How to Use:

**Download and Include in your project**
http://jquery.com/download/

**CDN - Content Delievery Network**

Link to a cdn in your html file:

[here](https://developers.google.com/speed/libraries/)
[or here](http://cdnjs.com/libraries/jquery/)
