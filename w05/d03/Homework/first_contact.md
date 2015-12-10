# First Contact

Write a server which accepts GET requests and responds with JSON. For
this exercise you will be using the sightings.json file as a dataset.
The user's request should go to `youripaddress/sightings[query]`. The user should be able to:

1. Request a list of UFOs by location
2. Request a list of UFOs by date
3. Request a list of UFOs by their shape
4. Request a specific sighting by its ID

### Bonus
1. Allow the user to send multiple parameters in their query string and
   return a list of sightings which matches only those parameters.
If the user sends a request to
`youripaddress/sightings?shape=sphere&location=henderson%2C%20nv` your
server should respond with a list of all of the sphere shaped UFOs in
Henderson, NV. Remember that `%20` is a space and `%2C` is a comma.
2. Make a new repo outside of your students directory and host your API
on Digital Ocean
