# Contact List

---

## Problem

Byron had an idea to build a user friendly contacts list application that was web based. Since he wasn't a developer, he hired a friend to build it for him. His friend figured that building a single page application was the best way to achieve Byron's goal, but then his friend was killed in a freak Segway accident. Now Byron has hired you.

## MVP Requirements

- Byron wants to be able to create, edit, and delete contacts
- In addition to working well, Byron is really concerned with his application looking nice
- Byron wants a full, RESTful, rails JSON API for this. He said that he will fire you if you try and use the JSON-server NPM.
- Byron doesn't want any poorly organized jQuery spaghetti to affect the long-term scaling of his application, so he'd like you to use Backbone. Also, Byron is a sadist.
- Byron really liked what he heard from his friend about single page applications and wants you to continue in that vein
- When adding new contacts, Byron wants them to nicely fade in.
- Finally, he wants a button to an `About` 'page' that has some information about you, since you are developing the application.

## Bonus Requirements
- Byron wants to be able to create, edit, and delete categories.
- He would like to be able to organize his contacts by category


## Thoughts
- The Bonus will require somehow nesting contacts within categories. Backbone is a small library, and doesn't have any built-in scheme for handling nested resources. This is an opinionated area, and there is no 'correct' solution for this. Implementing this will be a bit of a FIFO! Wee!
- Check these links out

  -  <a href="http://codrspace.com/vote539/nested-models-and-collections-in-backbone-js/"> Nested Models and Collections in Backbone </a>
  - <a href="http://backbonejs.org/#FAQ-nested"> Official backbone "position" on nested resources</a>
  - <a href="http://backbonerelational.org/"> A well-maintained library for relational things in BB </a>
