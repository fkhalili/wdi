# Bookie App

Let's pretend that we've been hired by a local bookie to create an app that helps bookies track all the action they take from degenerate gamblers.

### Spec
- Bookies should be able to add a name and an amount
- Bookies should be able to mark a debt as paid.
- Bookies should be able to delete debts from the list.
- Bookies should be able to edit a debt amount if the client makes a partial payment.

### Model

**Debt**

  - client_name (string)
  - amount (integer)
  - paid (boolean)

### Wireframes

Before beginning, create a series of wireframes so that you have a precise vision of how the application will work

### The Setup

1. **Your first task is to get your Rails-backed API up and running!**
  - Create a new Rails application `bookieApp` in your Homework folder.
  - Set up your `Debt` model. Create a schema and seed file for your database based on the model above. Example debts are included in the `db.json` file.
  - Create and set up your `DebtController` file. You should have methods available to fully CRUD your debts. *Make sure your controllers respond with properly formatted JSON data!*
  - Test out your endpoints with diligence and enthusiasm.
- **Your second task is to set up the front end of your application using Backbone.**
  - Determine what you'll need and define the "blueprints" for your model(s), collection(s) and views.
  - Create a single page application that allows the user to perform all of the actions listed above in the Specs.

### Bonus

If you're feeling courageous... Choose any of the following bonuses to push your application further!

- Add a strikethrough when an item is checked
- Add a running counter to the top of the page that shows all currently uncollected gambling debt.
- If a gambler's debt is more than $10,000, then their name will be shown in red so the bookie remembers to break their legs.
- Clean up your styling with Semantic UI
- Use a [Backbone router](http://backbonejs.org/#Router) to make your SPA bookmark-able and link-able!
