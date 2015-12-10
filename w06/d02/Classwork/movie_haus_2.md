# Movie Haus 2.0

Wouldn't it be great if we could bring Gerard Von Schtieffel into 2015?

**Task:** Make an an HTTP Express App that implements a CRUD-version of Movie Hause. Use the OMDB to automate most of the data-entry. 

When Mr. Schtieffel visits his movie management app, he is directed to a landing page that lists all of the movies currently playing in his theater. Each movie listing contains a title and list of playing times. Clicking on a movie will direct the user to the show page for that particular movie. Additionally, each movie in the list has two buttons: "Delete", and "Update Movie".

At the bottom of this landing page is a text field and a Search button. When the Mr. Schtieffel clicks the Search button, the server will hit up the OMDB API and search for a movie by the title entered in the text field.  The server will then render a template with all the results (assuming the movie exists).  For each result, show:

 - The movie poster (use width and height to make it fit well on the page).
 - The title of the result
 - The year
 - an "Add Movie" button that allows you to add this new movie to the collection 
 - a "Cancel" button that returns the user to the original landing page

If the "Add Movie" button is clicked, info is submitted via a POST request and the appropriate movie will be added to the collection. Confirmation of this action is given by returning the user to the original landing page.  
 
Clicking on one of the movies listed on the landing page will result in the user being taken to a more detailed description of the movie, including:

 - The movie poster (use width and height to make it fit well on the page). ps - sometimes the link doesn't work :$
 - The title of the movie
 - the year
 - the rating
 - the director
 - a list of actors
 - the plot

Of course, you should also back up the collection of movies to a JSON file so you can read it in if the server has to restart.

You can work on this in pairs on this project.

Wireframe your app: http://inspirationfeed.com/inspiration/25-examples-of-wireframes-and-mockups-sketches/ 

## Bonus - 

1) Allow Mr. Schtieffel to maintain and display a collection of movies for all of his theaters. Instead of landing on a list of movies, create a landing page that maintains a list of theaters. Each theater should maintain a collection of movies in a similar manner. All data related to the entire chain of theaters should be stored in the same 'data.json' file.
