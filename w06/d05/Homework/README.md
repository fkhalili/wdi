# Foreign Keys to the Kennel

![puppies!](http://www.greenleafpetresort.com/wp-content/uploads/2011/11/banner_pet_boarding.jpg)

You've been tasked with setting up a SQLite database for **Percy's Pet Palace**, a high-class pet boarding facility, to help them keep track of their kennels and of which pets are staying where. After a few "unfortunate incidents" involving misplaced puppies and kittens, they've decided that what they need is a custom **web application** that allows them to view, add and remove pets and kennels.

## Directions

### Part One: The Setup

1. Draw a simple ERD showing the relationship between `kennels` and `pets`. Include column names & foreign key relationship between the two tables.
2. Create a schema file that:
  - Creates a `kennels` table
  - Creates a `pets` table
  - Creates a foreign key constraint
3. Create a seed file to fill up your database with kennels and pets!
  - Make sure each kennel has at least one pet.

### Part Two: Build Your Server

Build an Express server using the sqlite3 npm module that meets the following requirements:

1. A user can see a list of all kennels and their details.
2. A user can see a list of all the pets inside of a particular kennel.
3. A user can add a pet to a kennel.
4. A user can remove a pet from a kennel.

**Note:** Make sure that foreign key support is turned on with the `PRAGMA foreign_keys = ON;` command!

## Bonus

1. Add functionality so that a user can move a pet from one kennel to another.
2. Add an `owners` table to your schema file.
  - What information might that table contain?
  - How are your `owners` records related to your other data?
  - Determine if/where you'll need a foreign key.
