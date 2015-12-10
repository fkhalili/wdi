## Exercises #1

#### Transmogrifier
Write a method called transmogrifier that accepts 3 numbers as input arguments and returns the transmogrified result. The common mathematical operation known as transmogrification is when you add the first two numbers and multiply the sum by the third number


#### Introduce
Write a method called introduce that accepts two names as strings, and return a string that introduces the two people. For example, introduce("Harry", "Sally") should return the string "Harry, meet Sally."
`
#### Shout
Write a method called shout that accepts a varying number of strings and puts the uppercased version of each string. For example, shout("is anybody there", "are you listening?") should display "IS ANYBODY THERE" and "ARE YOU LISTENING?" on the screen.


#### Chopped
Write a method called chopped that takes an array as an argument and returns an another array with the last element removed.


#### how_big
Define a method called how_big that takes a string as its lone parameter. The method returns:

 - "small" if the string is less than 3 characters long
 - "medium" if it is between 3 and 5 characters long
 - "big" if it is greater than 5 characters long


#### Weatherman
Write a method that takes a weather condition and a temperature. Weather can be "rainy", "sunny", "windy". Temperature can be "hot" or "cold".

- If the condition is rainy and the temperature is cold, tell the user, "better stay inside!"
- If the condition is rainy and the temperature is hot, tell the user, "sounds like a gross combination"
- If the condition is sunny and the temperature is hot, tell the user, "maybe best to go swimming"
- If the condition is windy or the temperature is cold tell the user, "bundle up!"
- If the condition is windy and the temperature is hot, tell the user "Tornado warning!"


####The meaning of Life
Write a method called `meaning_of_life` which returns the number 42 to you.
Use this method to write a Ruby program that:
 - Asks the user whether they want to know what the meaning of life is
 - If the user enters 'y', then the meaning of life is displayed to them using the `meaning_of_life` method
 - Otherwise, the program displays a disappointed message to the user and quits


#### string_info
Define a method called string_info that takes a string as a parameter and returns a hash with the following key-value pairs:

 - original: WHATEVER_THE_STRING_IS
 - length: WHATEVER_THE_LENGTH_OF_THE_STRING_IS
 - snaked: the string in all lower case with spaces replaced by underscores, example (for example "Cool Dude" would look like "cool_dude")


#### Fives
Write a method called `mult_five?` which accepts one number argument.
Returns true if the argument is divisible by five, otherwise return false.

Use this method within a while loop. Within the while loop, ask the user to enter a number or enter the word "quit".  If the user enters a number, use mult_five? to check the number and let the user know if their number was divisible by five
If the user entered quit, exit the program.
