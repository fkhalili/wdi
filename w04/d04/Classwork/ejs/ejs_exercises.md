# EJS Exercises

## Birds Exercise

Create a template that accepts and renders a list of birds including the name, feathers, species, diet, and sex. Use the birds.json file for your data.

Use EJS templating to create the complete HTML and write it into an index.html file.

## Tweets Exercise

Use EJS templating to create an index.html page by taking an array of tweet objects, given in pourmecoffee_tweets.json, and rendering it using your own template. The index.html should look similar to a real Twitter feed.

## Bonus
Research the ```include``` function and partial templates on the [EJS Quickstart Guide](https://www.npmjs.com/package/ejs). Refactor the Birds exercise to use a bird_layout.html.ejs and _bird_partial.html.ejs. Refactor Tweets to also use a layout and partial pattern.

```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <% birds.forEach(function(bird){ -%>
      <%- include('_bird_partial.html', {bird: bird})%>
    <% }); -%>
  </body>
</html>
```
