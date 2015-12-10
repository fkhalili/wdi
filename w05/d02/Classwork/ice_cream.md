# ICE CREAM

![ice-cream](http://media.giphy.com/media/zPujz25YFi88M/giphy.gif)

Sung is opening up an artisanal ice cream shop. He wants his customers
to be able to order their ice cream via telnet. Write a server which
customers can connect to. The customer should be able to type `"buy
[flavor]"` and the server should respond with an order confirmation if the
flavor exists. The server should also keep track of how many servings of
that flavor exist and respond with `"There are 4 servings of chocolate
left".` If Sung runs out of ice cream, the server shoud respond with
`"We're all out!"`

### Bonus
The customers should be prompted to:

1. Pick a flavor
2. Pick cup or cone
3. Pick a topping
4. If a customer picks a flavor, topping, or vessel that Sung's shop
   does not carry, make sure to notify them and prompt the user again
5. Once the customer finishes their order the server should deliver
   their order

```
$ telnet someIP port
> Welcome to Sung's Ice Cream Shoppe!
> What flavor ice cream would you like?
> chocolate
> Would you like a cup or a cone?
> cone
> What toppings would you like?
> sprinkles
> Here you go! A chocolate ice cream in a cone with sprinkles on top!
