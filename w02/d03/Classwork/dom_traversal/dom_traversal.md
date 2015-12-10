# DOM
#### Objectives:
Students will be able to:
- Explain what the DOM (Document Object Model) is
- Query the DOM for specific elements on a page

#### Important Properties and Methods

Window, i.e. ```window```, and Document, i.e. ```window.document``` or ```document```.

Querying:
- [document.querySelector(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [document.getElementById(idString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [document.getElementsByTagName(tagNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
- [document.getElementsByClassName(classNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

Elements: [(Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [element.id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)
- [element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
- [element.outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML)
- [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [element.attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
- [element.hasAttribute(attributeNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)

Nodes: (Elements vs. Nodes)
- [parentNode.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
- [parentNode.firstElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild)
- [parentNode.lastElementChild](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild)
- [parentNode.childElementCount](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount)
- [node.childNodes]()
- [node.parentNode]()
- [node.nextSibling]()
- [node.previousSibling]()
- [node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node.textContent)

#### Exercise: DOM Tree
With a partner, make a DOM tree diagram for the following HTML snippet:
```html
<html>
  <body>
    <article class="story theme-summary lede" id = "marathon-story">
    <div class="image">
        <a href="http://www.nytimes.com/2015/04/19/sports/a-marathoner-outruns-a-childhood-of-poverty.html">
          <img src="http://static01.nyt.com/images/2015/04/19/sports/19marathon-hp/19marathon-hp-largeHorizontal375.jpg">
        </a>
    </div>
    <span class="caption-text">Fernando Cabada training in California last week. He is a child of Mexican immigrants who have middle-school educations.
    </span>

    <h2 class="story-heading">
      <a href="http://www.nytimes.com/2015/04/19/sports/a-marathoner-outruns-a-childhood-of-poverty.html">
        Marathoner Outruns a Childhood of Poverty
      </a>
    </h2>

    <p class="byline">
      By LINDSAY CROUSE
    </p>

    <p class="summary" id = "marathon-summary">
      Fernando Cabada has quietly transformed himself into one of best distance runners in the United States, and one of the best Hispanic athletes the country has ever seen.
     </p>
    </article>
  </body>
</html>
```
tree:
html

body

article

div    span    h2    p   p

a              a
img


#### Exercise: Query the DOM
With a partner, determine the queries to get the following elements from the NYT snippet from earlier:

- The `<article>` element
- The `<div>` elements
- The `<a>` elements
- The `<img>` elements
- The `<p>` elements
- The element with a class of "story"
- The element with a class of "theme-summary"
- The element with a class of "story-heading"
- The element with a class of "summary"
- The element with an id of "marathon-story"
- The element with an id of "marathon-summary"

Test these queries by creating an index.html file, copying the html snippet above, and testing the queries in the browser console.

````javascript

var articleElement = document.querySelector("article");

var divElement = document.querySelector("div");

var aElement = document.querySelectorAll("a");

var imgElement = document.querySelector("img");

var pElement = document.querySelectorAll("p");

var storyElement = document.getElementsByClassName("story");
//or
var storyElement = document.querySelector(".story");

var theme-summaryElement = document.getElementsByClassName("theme-summary");

var story-headingElement = document.getElementsByClassName("story-heading");


var summaryElement = document.getElementsByClassName("summary");

var marathon-storyElement = document.getElementById("marathon-story");
//or
var marathon-storyElement = document.querySelector("#marathon-story");

var marathon-summary = document.getElementById("marathon-summary");

````

## The Terminator

In the 1984 film, The Terminator, a ruthless non-feeling cyborg assassin travels back in time to 1980s Los Angeles to find and terminate Sarah Conner, the woman who will give birth to and raise a son who will someday lead mankind in the War Against the Machines. Trouble is, there are a slew of Sarah Connors in Los Angeles, and the terminator doesn't know which one he's after. There are also some meddlesome cops (and a handsome future soldier) that the Terminator has to deal with. You've been tasked with modeling this scenario.

#### Exercise Objectives
- use JavaScript to query the DOM and manipulate particular elements.
- gain familiarity working with the Chrome JavaScript console.

#### Directions

1. Work within the Chrome Developer console. Once you have a working line of code, copy it over into your `scripts/main.js` file.
2. Query the DOM for the h1, store it in a variable called `topLevelHeader`, and add a console log for it.
3. Query the DOM for the list item with the class of `cop`, store the element in a variable called `cop`, and add a console log for it.
4. Query the DOM for the element with id of `the-one-true-sarah-connor`, save it in a variable called `theOneTrueSarahConnor`, and add a console log for it.
5. Query the DOM for all elements that have the class `victim`, and save the elements in a variable called `poorSouls`.
6. Iterate through `poorSouls`, console.log each poor soul.
