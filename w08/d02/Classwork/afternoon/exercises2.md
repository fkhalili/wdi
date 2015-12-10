## Exercises 2

#### Calculator
Create a file called calculator.rb. Inside, define the following methods

 - ```add```: accept two numbers and return their sum
 - ```subtract```: accept two numbers and return their difference
 - ```multiply```: accept two numbers and return their product
 - ```divide```: accept two numbers and return their quotient (you can return 0 if the second number is 0)

After you've defined these methods, write out the rest of this app:

 - Ask the user what operation they want to perform
 - Ask the user for the first value
 - Ask the user for the second value
 - Use the four methods you defined to calculate the answer
 - Display the answer to the user



#### Reinvent the Wheel (or rather, .each)
Re-write the Ruby `.each` method (call it "my_each"). Your method should accept an array as a parameter. Use the `yield` keyword to let your program know when it should invoke the block you plan to pass it when the method is called.



## Further Exercise

Write a simple command line program in Ruby that chooses a random number asks the user to guess it.
  - Allow the user to enter the range of numbers
  - If the user guesses incorrectly, the program should tell them to guess again. The program should also say *"higher!"* or *"lower!"* to guide the user to their next guess.
  - If they guess correctly, the program should congratulate them and tell them how many guesses it took them to get to the answer.

Split this program into methods, where each method is in charge of a small task:
 - ```computer_picks_number```:
  - prompts the user to enter in a range
  - returns a random integer between 1 - range (inclusive)
 - ```player_guess```:
  - prompts the user to enter a number
  - outputs the current guess count
  - returns the guessed integer
 - ```evaluate_guess```:
  - returns true if the guess is correct
  - otherwise:
    - outputs a hint
    - increments the guess count
    - returns false
 - ```give_hint```:
  - outputs either "guess Higher!" or "Guess Lower!".
  - **Bonus**: Also outputs "But, you're warm!" if the user is within 10% of the range
