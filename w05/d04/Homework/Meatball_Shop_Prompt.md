# The MeatBall Shop

Write an HTTP server that facilitates the process of ordering a Meatball sandwich.

Respond to client requests via the  `GET` "/" route with an HTML form that accommodates the following order:

  - **Name**
  - **Phone Number**
  - **Meat**: beef, pork, turkey, chicken, veggie, special (dropdown menu)
  - **Sauce**: classic meat sauce, spicy meat sauce, mushroom gravy, parmesan cream, pesto, special (checkbox)
  - **Sides**: risotto, white beans, polenta, mashed potatos (radio buttons)
  - **Toppings**: Lettuce, Tomatoes, Onions, etc (checkbox)

When a customer places an order your app should auto-generate a unique order id# for the order and save it in a JSON file.

When the user submits the form, format the order as a JSON object. Save it in a file called "current_orders.json".

Use EJS and templating to respond to the client with a nicely-formatted HTML page summarizing the order.

Create an  `GET` "/outstandingOrders" route that returns a simple HTML page of all of the orders in "current_orders.json".

**Bonus/Extensions**

1) Create a kitchen array and include only beef, pork, and special. Imagine that you don't know what's in the kitchen. If a request comes in for veggie or turkey, check in the kitchen to see if it's available. If it is not, send back the message 'I'm sorry, your order is temporarily unavailable', otherwise serve the meatball via the typical response.

2) Allow the user to choose 'Delivery' or 'Pick Up' on the first page that they see. If they choose 'Delivery', make them fill out an address form before they fill out an order. Create a user object in addition to an order object if delivery is selected.

3) Add input validation on the text fields for the address to ensure that the user inputs a valid address.
