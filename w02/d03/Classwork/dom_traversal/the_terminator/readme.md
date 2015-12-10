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
6. Iterate through `poorSouls`, ```console.log``` each poor soul.

#### Important Properties and Methods

Window and Document, i.e. window.document.

Querying:
- [document.querySelector(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll(cssSelectorString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [document.getElementById(idString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [document.getElementsByTagName(tagNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
- [document.getElementsByClassName(classNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

Elements: [(Docs)](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)
- [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
- [outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML)
- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)
- [hasAttribute(attributeNameString)](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes)

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

