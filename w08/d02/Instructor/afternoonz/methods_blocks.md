# Methods

### Learning Objectives

- Write and call simple Ruby methods
- Explain how variable scope works in Ruby methods
- Explain the fundamentals of Ruby blocks

## Definition
A method is reusable chunk of code that returns a value. It is useful for DRYing up code. Why is DRY good?

 - If something goes wrong in your code, it's much easier to find and fix bugs if you've organized your program well. Assigning specific tasks to separate methods helps with this organization.

 - By assigning specific tasks to separate methods (an idea computer scientists call separation of concerns), you make your code more reusable

**Question - What do we use to accomplish this in Javascript?**

Function in JavaScript:

**Basic Syntax:**
```javascript
var methodName = function(){
  //Do something!
};
```


```js
var generateWelcomeString = function(name) {
  var prefix = "Hello ";
  var postfix = ". Have a nice day.";
  var welcomeString = prefix + name + postfix;
  return welcomeString;
};
```

Method in Ruby:

The keyword ```def``` starts the method definition, then we give our method a name, followed by optional parameters. Inside, write a block of code to execute, then close it off with the word ```end```.

**Basic Syntax:**
```ruby
def method_name
  # Do something!
end
```


```ruby
def generate_welcome_string(name)
  prefix = "Hello "
  postfix = ". Have a nice day."
  welcome_string = "#{prefix} #{name} #{postfix}"
  welcome_string
end
```

## Using a Method

We *call* or *invoke* a Ruby method like this:

``generate_welcome_string("George")``

Remember: There's no hoisting in Ruby, so you must define your method in Ruby before you call it!

Things to try:

```ruby
generate_welcome_string

puts generate_welcome_string("George")

user_name = "George"
welcome_message = generate_welcome_string(user_name)
puts welcome_message
```

* point out the arguments, the body, the return statement
* see the function as a mini-program or a machine
* point out how the arguments get bound to what's passed in
* Change the order of teh call and definition
* can I puts prefix or postfix from outside of the method?
* can I access user_name from inside the method
* can I have something after return statement
* can I get rid of the return statement


## Scope

Scope refers to where you can access the value of a variable. Scoping in Ruby is more restrictive than in Javascript. Every time the Ruby interpreter encounters ```def```, it enters a new scope. This means simultaneously that it is capturing the code its about to read into a name but also that it is creating a new context in which that code will be read. That context is the local scope, and it cuts both ways: variables defined inside the method cannot be changed or read outside the method -- variables defined outside the method cannot be changed or read inside the method

```ruby
outside_variable = 12

def some_method
  puts outside_variable
end

def some_other_method
  inside_variable = 24
  puts "I am some other method. I just made a variable in here."
end

some_method  #NameError: undefined local variable or method `outside_variable'
some_other_method

puts inside_variable
```

**Question: How could we modify some_method to gain access to outside_variable?**

## Arguments/Parameters
You can pass information *into* a function by using arguments/parameters.

Parentheses are usually optional in Ruby, but it's a good idea to put your parameters and arguments in parentheses for readability.

```Ruby
def magic(x)
	puts "#{x} is the best"
end

magic 5

magic(5)
```

***The 'splat' argument***
The `*` ('splat') is used to tell Ruby that you don't know exactly how many arguments you might have:

```Ruby
def magic(x, *other_stuff)
	puts "#{x} is the best"
	other_stuff.each { |thing| puts "...but #{thing} ain't bad either!" }
end

magic("VA", "NY", "CA", "NC")
```

## The ```return```

You can pass information *out of* a function by using arguments/parameters.

The use of ```return``` in Ruby to end a method is actually optional. In fact, most Ruby programmers don't use return.
```Ruby
def generate_welcome_string(name)
  prefix = "Hello "
  postfix = ". Have a nice day."
  welcome_string = "#{prefix} #{name} #{postfix}"
end

puts "Enter in a name"
name = gets.chomp
puts generate_welcome_string(name)

def generate_welcome_string2(name)
  prefix = "Hello "
  postfix = ". Have a nice day."
  welcome_string = "#{prefix} #{name} #{postfix}"
  return welcome_string
end

```

## Calling methods inside another methods:

```ruby

def h
  "hello"
end

def name(name)
  name
end

def hi
  "#{h} #{name("Fritz")}"
end

puts hi

```

## Blocks

Ruby **blocks** allow you to create methods that don't have names. Ruby blocks are like anonymous functions in JavaScript.

In fact, you've been using them a lot this morning:
```Ruby
[1,2,3].each {|value| print value} # prints "123"
[1,2,3].map {|value| 2**value}    # returns [2, 4, 8]
```

Blocks can be defined with either the keywords ```do``` and ```end``` or with curly braces ({}).
```Ruby
5.times do |n|
  print "#{5-n} little monkeys jumping on the bed"
  puts ", 1 fell off and broke his head :("
  print "Mama called the doctor and the doctor said,"
  puts "'NO MORE MONKEYS JUMPING ON THE BED!'"
  puts " "
end

5.times{ |n|
  print "#{5-n} little monkeys jumping on the bed"
  puts ", 1 fell off and broke his head :("
  print "Mama called the doctor and the doctor said,"
  puts "'NO MORE MONKEYS JUMPING ON THE BED!'"
  puts " "
}
```
**Note that unlike `methods`, blocks don't care how many parameters you pass to them - they'll work whether you use what you're `yield`ing or not.**

#### Example:

```ruby
# Neither method will throw an error.
5.times {|i| puts "hi"}
5.times {puts "hi"}
```

## Yield
Passing a block to a method is a great way of abstracting certain tasks from the method and defining those tasks when we call the method. In JavaScript this is accomplished easily (via callbacks). In Ruby, you would use a ```yield``` statement.

```ruby
def do_this_5_times
  i = 0
  while i < 5
    yield
    i += 1
  end
end

do_this_5_times do
  puts "hihi"
end
```

We can call `yield` multiple times within a method.

```ruby
def test(x)
   puts "Do stuff to #{x} in the method"
   yield
   puts "Do more stuff to #{x} in the method"
   yield
end

test(5) { puts "Do stuff in the block"}

# Passing a parameter to the block:
def example(x)
  5.times do |n|
   yield n
   answer=n*x
   puts "You are in the method test:#{answer}"
  end
end

example(10) {|i| puts "You are in the anonymous method (i.e. the block) #{i}"}

```
