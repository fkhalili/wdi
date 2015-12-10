# DBZ Abridged

#### RESTful routes and nested resources in the world of Dragonball Z

### Objectives:

- **Write an Express application** which will allow users to CRUD the various hero and villain characters from Dragonball Z tv show.
- Continue to **practice writing SQL commands** and using the sqlite3 npm module.
- Try using a **SQL JOIN** to access related resources within your database instead of making two queries.
- Use your knowledge of REST and HTTP verbs to write **RESTful routes** that your server will use to CRUD **nested resources**.

### The Story

Start with the DB file we have provided for you. Note that SQLite does *not* support booleans as a datatype, so we will be using integers instead. `0` is false, `1` is true. Each character will have a unique `id`, a `name`, a `team_id`, and a `dead` integer/boolean (keep in mind that half of the characters that die in DBZ are only temporarily dead). There will also be a table called `teams`, which will help track `good_guys` and `bad_guys`.

| teams | *data types* |
| ---- | ------------ |
| id | *INTEGER, unique identifier* |
| name | *VARCHAR, good_guys/bad_guys* |

| characters | *data types* |
| ---- | ------------ |
| id | *INTEGER, unique identifier* |
| name | *VARCHAR, character's name* |
| dead | *INTEGER, either 1 (true) or 0 (false)* |
| team_id | *INTEGER, foreign key which refers to teams(id)* |

The `dead` attribute should be false (`0`) whenever you create a new character. The `team_id` will serve as a foreign key that tells us whether or not the character is a good guy or a dastardly villain!

### Directions

Now, write an server which allows a user to perform the following CRUD actions using the browser:
  - Create & Delete a single character
  - View & Update a single character's attributes
  - View all members of a given "team" (all good guys, all bad guys)

**Before you start coding** - plan out the flow of your application and write out your routes. What route would you use to create a character as part of a particular team? To get all members of a particular team?

![dbz](http://media.giphy.com/media/mp0MD85ur1yOQ/giphy.gif)

### Testing your Application

It's time to test out your application! Using your interface, your user should be able to carry out the prompts below:
(We can look through these and pick out what CRUD action/objective each accomplishes)

1. Villain Raditz from the planet Saiyan comes to Earth. Create Raditz and add him to the bad guys team.
2. Our hero, Goku, teams up with bad guy Piccolo, who has a change of heart! Change Piccolo's team affiliation to the good guys.
3. Oh no! Raditz kills Goku! Change Goku's `dead` boolean to true.
4. However, Raditz dies in the battle. Delete him from your database PERMANENTLY.

**One year later...**

5. A year has passed and evil Saiyans Nappa and Vegeta are coming to Earth. Create them as a part of the bad guys team.
6. Goku's friends assemble the magical Dragonballs wish him back to life! Change Goku's `dead` boolean back to false
7. Oh no. Piccolo is killed by the new baddies... change his `dead` boolean to true.
8. Goku arrives at the scene and after an epic fight, kills Nappa. Remove Nappa from your database forever.
9. Vegeta is defeated but Goku convinces his friends to let him live. He escapes! Change Vegeta's name to "Undercover Vegetable."


***BONUS:***

1. Style your app with some CSS
2. Use Bootstrap, Skeleton, or any library of your choosing to help style your page.
