3# Programming in Ruby
### Same Concepts, Different Syntax

We know how to CRUD data stored in arrays and hashes using JavaScript - fill in the table below by writing code to perform the same tasks using **Ruby**!

| Task | Javascript | Ruby |
| ---- | ---------- | ---- |
| Create an array literal | `var arrayThing = [ 1, 2, "three" ]` | `` |
| Read a single item in an array | `arrayThing[0]` | `` |
| Add an item to an array | `arrayThing.push("hi")` | `` |
| Delete an item from an array | `arrayThing.splice(2, 1)` | `` |
| Update an element in an array | `arrayThing[0] = "one"` | `` |
| Create an object/hash | `var objThing = { name: "Dude", email: "thedude@dude.dude"}` | `` |
| Read a single item in a hash | `objThing.name` | `` |
| Add an item to a hash | `objThing.age = 32` | `` |
| Delete an item from a hash | `delete objThing.name` | `` |
| Update an element in a hash | `objThing.age = 12` | `` |

Fill out the table below by writing Ruby code to accomplish the following tasks:

| Task | Javascript | Ruby |
| ---- | ---------- | ---- |
| Print out all numbers from 1-10 | `for (i = 1; i < 11; i++) {  console.log(i); }` | `for num in 1..10 puts num end` |
| Print out all the names in an array of objects  | `otherArray.forEach(function(el){ console.log(el.name) });` | `other_array.each do |element| puts element|"name"| end` |
| Do something if a condition evaluates to `true` | `if ( aVariable === true ) { /* do a thing */ }` | `if a_variable == 5 puts a_variable end` |
| Perform logic based on the value of a variable (control flow) | `if ( aVariable === 1 ) { /* do a certain thing */ } else if (aVariable === 2) { /* do a different thing */ } else { /* perform a default action */ }` | `

if a_variable == 1
  puts"1"
else if a_variable == 2
  puts"2"
else puts "doesnt work"
  end

` |

## Exercise By the Numbers

Write a simple command line program in Ruby that chooses a random number between one and ten and asks the user to guess it.
  - If the user guesses incorrectly, the program should tell them to guess again.
  - If they guess correctly, the program should congratulate them and tell them how many guesses it took them to get to the answer.

\`

num = rand(1..10)
guess = nil

while guess != num do
  puts "Guess a number between 1 and 10"
  guess = gets.to_i
end

puts ("Congrats! you got it")



`\  
