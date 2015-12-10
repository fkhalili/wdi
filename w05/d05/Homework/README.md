# Your friendly neighborhood POST office.

Write an Express server which renders a form when the user navigates to `/letters/new`.
The form should take a name, an address, a date, and a letter. Your app should be able to:

1. Use this form to send a letter via a POST request.
2. Persist each letter that gets sent in a JSON file.
3. If the user navigates to `/letters` render a list of all of the letters' dates and recipients.
4. All of the letters in the list should be rendered as links to the specific
   `/letter/:id`
5. If the user navigates to `/letters/:id` render the
   individual letter with that id.

***Remember To***
- Create a seperate EJS template for each route (`/`, `/letters`, and
  `/letters/:id`)
- Give the user a navbar so that they can easily jump between pages

### Bonus

1. If the user leaves the form blank and only fills out the letter portion, grab a person from the
   randomuser api and use their information to generate the blank information https://randomuser.me/
2. Add another field to your form for a gif. Use the Giphy api to get
   a random gif based on what the user inputs https://github.com/Giphy/GiphyAPI
3. Host your post office on Digital Ocean!
