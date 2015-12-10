# Happy Hour Tracker!

![img](http://www.bangitout.com/wp-content/uploads/2015/05/Happy-Hour_V3_SMALLER.jpg)

We all know and love GA's tradition of Friday happy hour... but now we're kicking the sign-in sheet into a new era! You've been assigned the job of creating a web application that will CRUD happy hour attendees and record certain information about them.

You will build this application using Rails. Your app should include:

- An `attendee` model
- An index page that displays all current attendees and link to add a new attendee to the list
- A `new`, `show`, and `edit view`
- Include a way to delete attendees from the list.

Your `attendees` table should track the following information about each attendee:

  - First name (varchar)
  - Last name (varchar)
  - Age (integer)
  - Likes beer (boolean)

**For tonight: DO NOT USE GENERATORS!**

*...except for when you're creating migrations. The timestamp generated when you generate a new migration is essential for making sure your migrations run in order.*

After you set up your database using migrations and seed it, create and code each of the files to create your **model**, **controller**, and **views**.

## Bonus
- Use a [path helper](http://guides.rubyonrails.org/routing.html) to link to the show page for each attendee!
- Use [partials](http://guides.rubyonrails.org/layouts_and_rendering.html) to render out your views.
