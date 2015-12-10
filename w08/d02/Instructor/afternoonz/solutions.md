
## Exercises

#### Transmogrifier
Write a method called transmogrifier that accepts 3 numbers as input arguments and returns the transmogrified result. The common mathematical operation known as transmogrification is when you add the first two numbers and multiply the sum by the third number

```ruby
def transmogrifier(num1, num2, num3)
  (num1 + num2) * num3
end
```
#### Introduce
Write a method called introduce that accepts two names as strings, and return a string that introduces the two people. For example, introduce("Harry", "Sally") should return the string "Harry, meet Sally."

```ruby
def introduce(name1, name2)
  "#{name1} meet #{name2}"
end
```
#### Shout
Write a method called shout that accepts a varying number of strings and puts the uppercased version of each string. For example, shout("is anybody there", "are you listening?") should display "IS ANYBODY THERE" and "ARE YOU LISTENING?" on the screen.

```ruby
def shout(*text)
  text.each{|word| puts word.upcase}
end

shout("hey", "you", "what", "are", "you", "doing?")
```
#### Chopped
Write a method called chopped that takes an array as an argument and returns an another array with the last element removed.

```ruby
def chopped(array)
  popped = []
  counter = 0
  while counter < array.length - 1
    popped.push(array[counter])
    counter += 1
  end
  popped
end
```

#### how_big
Define a method called how_big that takes a string as its lone parameter. The method returns:

 - "small" if the string is less than 3 characters long
 - "medium" if it is between 3 and 5 characters long
 - "big" if it is greater than 5 characters long

```ruby
def how_big( text)
   if (text.length > 5)
   	return "big";
   elsif (text.length < 3)
   	return "small";
   else
   	return "medium";
   end
end

 puts how_big("Winter is coming")
 puts how_big("Hey")
 puts how_big("Yo")
```

#### Weatherman
Write a method that takes a weather condition and a temperature. Weather can be "rainy", "sunny", "windy". Temperature can be "hot" or "cold".

- If the condition is rainy and the temperature is cold, tell the user, "better stay inside!"
- If the condition is rainy and the temperature is hot, tell the user, "sounds like a gross combination"
- If the condition is sunny and the temperature is hot, tell the user, "maybe best to go swimming"
- If the condition is windy or the temperature is cold tell the user, "bundle up!"
- If the condition is windy and the temperature is hot, tell the user "Tornado warning!"

##### Ruby
```rb
def weather(condition, temperature)
  if condition == "rainy"
    puts "Better stay inside!"
  end

  if condition == "rainy" && temperature == "hot"
    puts "Sounds like a gross combination"
  end

  if condition == "sunny" && temperature == "hot"
    puts "Maybe best go swimming"
  end

  if condition == "windy" && temperature == "cold"
    puts "Bundle up!"
  end

  if condition == "windy" && temperature == "hot"
    puts "Tornado warning!"
  end
end

weather("rainy", "hot")
weather("windy", "cold")
weather("sunny", "hot")
```
##### JavaScript
```js
var weather = function(condition, temperature) {
  if(condition === "rainy") {
    console.log("Better stay inside!");
  }

  if(condition === "rainy" && temperature === "hot") {
    console.log("Sounds like a gross combination");
  }

  if(condition === "sunny" && temperature === "hot") {
    console.log("Maybe best go swimming");
  }

  if(condition === "windy" && temperature === "cold") {
    console.log("Bundle up!");
  }

  if(condition === "windy" && temperature === "hot") {
    console.log("Tornado warning!");
  }
};

weather("rainy", "hot")
weather("windy", "cold")
weather("sunny", "hot")
```

####The meaning of Life
Write a method called `meaning_of_life` which returns the number 42 to you.
Use this method to write a Ruby program that:
 - Asks the user whether they want to know what the meaning of life is
 - If the user enters 'y', then the meaning of life is displayed to them using the `meaning_of_life` method
 - Otherwise, the program displays a disappointed message to the user and quits

##### Ruby
```rb
def meaning_of_life
  return 42
end

puts "Do you want to know the meaning of life?"
user_wants_to_know = gets.chomp
if(user_wants_to_know == "y")
  puts meaning_of_life
else
  puts "Oh, how disappointing!"
end
```

###### JavaScript
```js
var meaning_of_life = function() {
  return 42;
};

console.log("Do you want to know the meaning of life?");
process.stdin.on("data", function(data) {
  if(data.toString().trim() === "y") {
    console.log(meaning_of_life());
    process.stdin.end()
  }
  else {
    console.log("Oh, how disappointing!");
    process.stdin.end()
  }
});

```


#### string_info

Define a method called string_info that takes a string as a parameter and returns a hash with the following key-value pairs:

 - original: WHATEVER_THE_STRING_IS
 - length: WHATEVER_THE_LENGTH_OF_THE_STRING_IS
 - snaked: the string in all lower case with spaces replaced by underscores, example (for example "Cool Dude" would look like "cool_dude")

```ruby
def string_info( text)
  hash=Hash.new
  hash["original"]=text
  hash["length"]=text.length
  hash["snaked"]=text.downcase.gsub(" ", "_")
  return hash
end

 newHash= string_info(" What Is Up?!")

 puts newHash
```
#### Fives
Write a method called `mult_five?` which accepts one number argument.
Returns true if the argument is divisible by five, otherwise return false.

Use this method within a while loop. Within the while loop, ask the user to enter a number or enter the word "quit".  If the user enters a number, use mult_five? to check the number and let the user know if their number was divisible by five
If the user entered quit, exit the program.

##### Ruby
```rb
def mult_five(number)
  return number % 5 == 0
end

get_fives = true
while get_fives
  puts "Enter a number or quit:"
  number = gets.chomp
  if number == "quit"
    puts "Goodbye"
    get_fives = false
  else
    multiple_of_five = mult_five(number.to_i)
    if multiple_of_five
      puts number + " is a multiple of 5"
    else
      puts number + " is not a multiple of 5"
    end
  end
  puts
end

```

##### JavaScript
```js
var mult_five = function(number) {
  return number % 5 === 0;
};

console.log("Enter a number or quit:");
process.stdin.on('data', function(data) {
  var input = data.toString().trim();
  if(input === "quit") {
    console.log("Goodbye");
    process.stdin.end();
  }
  else {
    var number = parseInt(input);
    var multiple_of_five = mult_five(number);
    if(multiple_of_five) {
      console.log(number + " is a multiple of 5");
    }
    else {
      console.log(number + " is not a multiple of 5");
    }
    console.log();
    console.log("Enter a number or quit:");
  }
});

```


#### Calculator

Create a file called calculator.rb. Inside, define the following methods

 - add: accept two numbers and return their sum
 - subtract: accept two numbers and return their difference
 - multiply: accept two numbers and return their product
 - divide: accept two numbers and return their quotient (you can return 0 if the second number is 0)

After you've defined these methods, write out the rest of this app:

 - Ask the user what operation they want to perform
 - Ask the user for the first value
 - Ask the user for the second value
 - Use the four methods you defined to calculate the answer
 - Display the answer to the user

```ruby
def add(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def multiply(num1, num2)
  num1 * num2
end

def divide(num1, num2)
  if num2 == 0
    0
  else
    num1 / num2
  end
end

puts "Enter add, subtract, multiply or divide:"
operation = gets.chomp.strip
puts "Ok, now gimme the first number:"
num1 = gets.chomp.to_i
puts "Ok, now gimme the second number:"
num2 = gets.chomp.to_i
puts "THE ANSWER:\n----------"

if operation == "add"
  puts add(num1, num2)
elsif operation == "subtract"
  puts subtract(num1, num2)
elsif operation == "divide"
  puts divide(num1, num2)
elsif operation == "multiply"
  puts multiply(num1, num2)
else
  puts "Your operation is wrong."
end
```


#### Reinvent the Wheel (or rather, .each)

Re-write the Ruby `.each` method (call it "my_each"). Your method should accept an array as a parameter. Use the `yield` keyword to let your program know when it should invoke the block you plan to pass it when the method is called.

```ruby
def my_each(array)
  i = 0
  while i < array.length
    yield array[i]
    i += 1
  end
end

def my_each_2(array)
  for i in 0...array.length
    yield array[i]
    i += 1
  end
end

my_each([1,2,4,6,8,0]) { |el| puts el }
my_each_2(["ahh", "ee", "ooaaah", "ioio"]) { |el| puts el }
```

## Further Exercise

Write a simple command line program in Ruby that chooses a random number asks the user to guess it.
  - Allow the user to enter the range of numbers
  - If the user guesses incorrectly, the program should tell them to guess again. The program should also say *"higher!"* or *"lower!"* to guide the user to their next guess.
  - If they guess correctly, the program should congratulate them and tell them how many guesses it took them to get to the answer.

Split this program into methods, where each method is in charge of a small task:
 - ```computerPicksNumber```:
  - prompts the user to enter in a range
  - returns a random integer between 1 - range (inclusive)
 - ```playerGuess```:
  - prompts the user to enter a number
  - outputs the current guess count
  - returns the guessed integer
 - ```evaluateGuess```:
  - returns true if the guess is correct
  - otherwise:
    - outputs a hint
    - increments the guess count
    - returns false
 - ```giveHint```:
  - outputs either "guess Higher!" or "Guess Lower!".
  - **Bonus**: Also outputs "But, you're warm!" if the user is within 10% of the range

```Ruby

#Write a simple command line program in Ruby that chooses a random number asks the user to guess it.

#Allow the user to enter the range of numbers
#If the user guesses incorrectly, the program should tell them to guess again. The program should also say "higher!" or "lower!" to guide the user to their next guess.
#If they guess correctly, the program should congratulate them and tell them how many guesses it took them to get to the answer.
#Split this program into methods, where each method is in charge of a distinct task


def computerPicksNumber
  #prompts the user to enter in a range
  #returns a random integer between 1 - range (inclusive)
	puts "Enter in a range for your guesses:"
	range = gets.chomp
    rand(range.to_i) + 1;
end

#prompts the user to enter a number
#outputs the current guess count
#returns the guessed integer
def playerGuess(guessCount)
	puts "Enter guess # #{guessCount}:"
	guess = gets.chomp
	guess.to_i
end

#returns true if the guess is correct
#otherwise:
#   outputs a hint
#   increments the guess count
#   returns false
def evaluateGuess(guess, compGuess, guessCount)
if (guess == compGuess)
	 puts "It took you #{guessCount} guesses! Nice job :)"
	 true
	else
	  guessCount+=1
	  giveHint(guess, compGuess)
	  return false, guessCount
	end
end

#outputs either "Guess Higher!" or "Guess Lower!"
#Bonus: Also outputs "But, you're warm!" if the user is within 10% of the range
def giveHint(guess, compGuess)
	if (guess > compGuess)
		puts "Next time guess lower!"
	else
		puts "Next time guess higher!"
	end
end

puts "Welcome to Number Guesser 2.0!"
gameOver=false
guessCount = 1
compGuess = computerPicksNumber

while(!gameOver)
	guess = playerGuess(guessCount)
	gameOver, guessCount = evaluateGuess(guess, compGuess, guessCount)
end

puts "Thanks for playing Number Guesser 2.0!!"
```
