# CSS All-Star Revue!

## The Questions:
1. Why put CSS externally?
  - Allows us to re-use CSS stylesheets
2. Absolute vs. relative positioning
  - It's all about the flow, man [resource](http://www.cssbasics.com/css-positioning/)
3. Best ways to do responsive images/keep all the same size?
  - Use divs with a `background: url(imgurl)`
4. Hovering! (CSS Tricks & the googs)

## Styling: Process Walkthrough

Example code for Riazopedia

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title~!!!</title>
  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
<!-- Putting custom style in the header just for quick example, this is bad practice generally -->
  <style>
    body {
    /* Setting the default font size for our page */
      font-size: 12px;
    }
    /* setting up a main containing div that will hold all of our content & be centered on the page */
    .container {
      max-width: 60em;
      margin: 0 auto;
      /* salmon hell yeah */
      background-color: salmon;
      /* vh stands for view height. Actually pretty well supported http://caniuse.com/#feat=viewport-units */
      height: 100vh;
    }
    /* Box shadow! From css-tricks */
    .shadow {
    -webkit-box-shadow: 3px 3px 15px 16px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    3px 3px 15px 16px #ccc;  /* Firefox 3.5 - 3.6 */
    box-shadow:         3px 3px 15px 16px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }
  /* Content of our header div (which is nested inside the pure-u-1) */
  .header-content {
    text-align: center;
    padding: 1em;
  }
  /* Specifically targeting the h1's inside the div w/ class of header-content */
  .header-content h1 {
    font-size: 50px;
  }
  /* div that contains Riaz's photo */
  .riaz-photo {
    padding: 5%;
    width: 200px;
    float: left;
  }
  /* applies to any <img> element inside the riaz-photo div */
  .riaz-photo img {
    max-width: 100%;
  }
  </style>

</head>
<body>

<!-- Added a shadow to our container -->
  <div class="container shadow pure-g">
<!-- DO NOT change the margins/border/padding of your pure-u-whatever elements! This will mess up the grid layout (things won't fit) -->
    <header class="pure-u-1">
    <!-- Div containing the content goes inside the div that defines how much space -->

      <div class="header-content">
        <h1>Riaz-o-pedia</h1>
      </div>
    </header>

    <nav class="pure-u-1-5">
    <!-- Using the pure-menu classes to style our menu -->
      <div class="pure-menu">
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><a class="pure-menu-link" href="#">stuff</a></li>
          <li class="pure-menu-item"><a class="pure-menu-link" href="#">stuff</a></li>
          <li class="pure-menu-item"><a class="pure-menu-link" href="#">stuff</a></li>
          <li class="pure-menu-item"><a class="pure-menu-link" href="#">stuff</a></li>
          <li class="pure-menu-item"><a class="pure-menu-link" href="#">stuff</a></li>
        </ul>
      </div>
    </nav>

    <section class="pure-u-4-5">
      <div class="content-section">
        <div class="riaz-photo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Riaz_at_Banani_top_of_the_own_flat_bldg._4.jpg" alt="OMG RIAZ">
        </div>
        <div class="content-header">
          <h3>RIAZ</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ullam modi consequatur, quo magnam officia eaque neque! Quas, animi quos voluptatum optio hic voluptas reiciendis? Temporibus asperiores, fugiat nostrum architecto!</p>
        </div>
        <div class="article-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facere. Magnam consectetur, rem numquam hic odit placeat quasi fugiat sunt nobis veniam tempore nostrum quaerat sed esse error mollitia eum.</p>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
```


### Grid Tipz

- Work outside-inside, largest piece to smallest piece
- Add background colors to yo divs (or black borders) to help w/layout

## Fun Resources

- [CSS Basics](http://www.cssbasics.com/) - super awesome overview/tutorial, gets in-depth
- [CSS Tricks](https://css-tricks.com/snippets) - great resource for code snippets and explanations! Also has good articles
- [Sitepoint: Basic Structure of a Web Page](http://www.sitepoint.com/web-foundations/basic-structure-of-a-web-page/) - in-depth explanations of the different main parts of an HTML doc. Short read.
- [Dive Into HTML 5](http://diveintohtml5.info/) - fantastic overview of HTML 5. First, second, and fourth topics in particular may be applicable
