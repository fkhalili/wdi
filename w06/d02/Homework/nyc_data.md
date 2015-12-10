# Start spreadin' the data

New York City is packed with places to eat. Some may say there's
too *much* choice! Some hungry folk like to narrow down their options by
restricting their choices to restaurants with high Department of Health
ratings.

![nom](http://media.giphy.com/media/oTIhwpk2Q6XrW/giphy.gif)

Write an Express CRUD app which utilizes the health inspection results section of the NYC Open Data API.

The user should be able to:

1. Search for results by restaurant name
2. Save a result to a JSON document
3. View a list of all saved restaurants
4. Update a restaurant with a numerical 1-5 rating
5. Delete a restaurant from the user's list

***BONUS:***

1. When searching for a restaurant, only display the most recent health inspections for each eatery so that each restaurant is only returned once.

**Things to remember:**

* When saving a result, make sure to save the name of the restaurant, it's health rating, and the street it's located on
* Make sure that each saved result gets a unique ID.

**Resources:**

Navigate to https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/xx67-kt59 and click on the export button on the top right. Next, click on the SODA API option and you can find the endpoint located there.

SODA API documentation:
http://dev.socrata.com/docs/filtering.html
