# Movie Haus 3.0

Gerard Von Schtieffel discovered Asynchronous Javascript and XML (AJAX) last night and is demanding that this Movie Hous Application be upgraded to be a single-page app so that it never has to load the site more than once.

He's pissed at all of the Digital Ocean charges showing up on his credit card and wants to push as much processing to the client as possible. 

**Task:** Use AJAX to create a single-page app.

- Use ```json-server``` to run a RESTful JSON database in 30 seconds.

```
  /project-directory
    /public
      index.html
      styles.css
      scripts.css
      flavicon.ico
      jQuery.min.js
    db.json
    package.json
```

- Add a db.json file with the resources that you want
    e.g.
    ```
    {
      movies: [],
      theatres: []
    }
    ```
- Put your ```index.html``` and other resource files in the ```./public``` folder so that it is hit via the root (```'/'```) route.

- This single-page app will have 4 sections:
    - List of current movies playing
    - Detail view of the currently selected movie
    - A search field
    - A list of search results

**```current-movies-list```**

When Mr. Schtieffel visits his movie management app, he is directed to a landing page that contains a ```current-movies-list``` on the left side that contains all of the movies currently playing in his theater. Each movie list item contains a title and a list of playing times. 

**```movie-details```**

Clicking on a movie will bring up the movie-details on the right side of the page and will replace or load the movie-details part of the page with the description of the movie that was clicked on, including:

 - The movie poster (use width and height to make it fit well on the page). 
 - The title of the movie
 - the year
 - the rating
 - the director
 - a list of actors
 - the plot

At the bottom of the ```movie-details``` section, the movie will have both edit and delete buttons.

**```search-details```**

At the bottom of this landing page is a text field and a Search button. When the Mr. Schtieffel clicks the Search button, an AJAX call will hit up the OMDB API and search for a movie by the title entered in the text field. List the results below the search bar.

For each result, show:

 - The movie poster (use width and height to make it fit well on the page).
 - The title of the result
 - The year
 - The plot
 - an "Add Movie" button that allows you to add this new movie to the collection of current movies playing at the theatre

If the "Add Movie" button is clicked, info is submitted via a POST request and the appropriate movie will be added to the collection. The success of this action is shown through the addition of the movie to the ```current-movies-list```.
 