# Requestin' in the Rain

![singing in the rain](http://media.giphy.com/media/13MIlJjyXbbmnu/giphy.gif)

Write an Express server which renders a form when a user goes to the
root `/`.
The form should have a text input for a location. When a user submits a
location, the server should make a request to the
Weather Underground API for the forecast at the location
specified. Finally, the server should redirect the user to a new page
with the name of the location and the current conditions.

### Bonus

Add 2 radio buttons to the form. One button should be for current
conditions and the other for the forecast. Modify your server to allow
the user to make requests for both options and create a second EJS
template for the forecast.
