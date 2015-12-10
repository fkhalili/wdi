# Repository of Endless Knowledge

#### Objectives

1. Write a simple command line program that accepts one command line argument.
2. Use conditionals and/or a switch statement to accomplish control flow.
3. Practice writing separate methods to perform specific jobs in Ruby.

It's time to make your own repository of knowledge! Your job, should choose to accept it (or not) is to create a simple program that can be run from the command line that spits out information about different Ruby methods.

  - Include at least 10 different enumerable methods in your program's dictionary.
  - Your program should be able to take in the name of a method as a command line argument and spit back its definition.
  - Your program should return a gentle corrective message if the user enters a method not defined in your program's data.
  - The user should be able to enter a command to list out the different methods your program has definitions for.
  - Keep **scope** in mind throughout the assignment! Make sure you know where any given variable is accessible from/not accessible.

### Step One

Write a program that accepts the name of a built-in Ruby method as a command line argument and returns information about that method.

```
$ ruby tell_me_about.rb each
> *----------~ WOW ~----------*
>
> .each is a Ruby method that can be called on an array. It takes a block
> of code and calls it once for each element, passing that element to the
> block.
>
> *---~ The more you know ~---*
```
### Step Two

Now modify your application to use classes! Store each Ruby method's title and definition as an instance of a `Definition` class.
- Your Definition class should have a method that allows you to read the class's title and definition.

## Additional Features

1. Allow a user to add new definitions to your program.
2. Allow mispellings! Suggest a similar word to a user if they enter a term that does not exist.
