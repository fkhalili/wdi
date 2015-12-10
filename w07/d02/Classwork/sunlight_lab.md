# Sunlight

For today's lab, you will be using the [Sunlight API](https://sunlightlabs.github.io/congress/).  The Sunlight API gives you access to all sorts of information about congress and legislation going back to 1789.  You will need to register for an API Key [here](http://sunlightfoundation.com/api/accounts/register/) (It's free).

Write an Express application that does the following:
- Uses a zipcode to find all legislators in an area.
- Prints out each legislator's Twitter handle and party affiliation next to their name.
- The user should be able to click a button to save a legislator to their database.
- The user should be able to see a list of saved legislators.
- The user should be able to delete legislators from their list.
- When the user clicks on a legislator's name, find the bills they have sponsored and list the bill's official title, as well as the names and Twitter handles for each co-sponsor.
- The user should be able to save the bills.
- The user should be able to see a list of saved bills.
- The user should be able to delete bills from their list.
- For each Twitter name, print it in blue if the legislator is a Democrat or red if the legislator is a Republican.

### Think about the following:
- Use the documentation for the Sunlight API. You know for the first one that you are getting `legislators`.  If you look through the resources, you can find the `/legislators`.  That will lead to more documentation that will show examples of how to use the API.

- Think about this step by step and work on one thing at a time.
    - First you have to find all the legislators in a zipcode.
    - Then you have to print each legislator's Twitter name.  You'll have to look at your response to see what information will give you this.
    - Then you have to find the bills they've sponsored.  Bills will be a separate resource to look at documentation for, but you'll need to figure out the relationship between legislators and bills (say, from the bills responses), and the relationship between those bills and the other legislators.
    - **Remember:** Always Be Breaking It Down!

# BONUS: Google Maps Geocoding
Use the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/) to get the lat/long for the following cities:

- Los Angeles, CA
- San Fransisco, CA
- Chicago, IL
- Atlanta, GA
- Boston, MA

Use the results of those queries to query the Sunlight API for the legislators for those cities.  You can then run them through your existing code to render their Twitter handles, all the bills they have sponsored and co-sponsored, and the co-sponsors' Twiter handles.
