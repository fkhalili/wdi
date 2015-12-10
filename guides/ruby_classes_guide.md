# Ruby Style Guide:

Style is important. When in Rome, do as the Romans do.

[https://github.com/airbnb/ruby](https://github.com/airbnb/ruby)

# Ruby OOP Quick Guide:

[https://en.wikipedia.org/wiki/Object-oriented_programming](https://en.wikipedia.org/wiki/Object-oriented_programming)


## Classes

Ruby is an object-oriented language. Everything is an object.

Objects are programming contructs that have attributes and methods.

Classes are like blueprints for objects. They allow us to organize and modularize our code.

Consider a real-life object such as a Car. The blueprint for a Car would include some boilerplate properties that all car will possess. All cars, for instance, will have a color, make, and year when they come off the assembly line.

We also want all of our cars to have certain functionality or behaviors. They should all be able to drive, stop, etc.


## Naming
UpperCamelCase a.k.a PascalCase applies to

- class names
- module names

snake_case applies to

- instances
- methods
- variables unless it falls into one of the other categories
- file names

SCREAMING_SNAKE_CASE

- constants

## More Naming
@instance_variable Instance variables start with a @
@@class_variable   Class variables start with a @@
$global_variable   Global variables start with a $

## More Naming
destructive_unintuitive_method! 
returns_a_boolean_method?

Methods that have unintuitive or destructive behavior end with a bang. They usually have a non-bang counterpart. e.g. `Array#reverse!`

Methods that end with a question mark always return booleans, e.g. `Object#nil?`


## Defining a class

```
class MyClassName
end
```

## Defining the initialize method for a class

```
class MyClassName
  def initialize
    # Add definition here
  end
end
```

## Setting instance variables via the initialize method

```
class Person

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end
end
```

The initialize method is automatically invoked when we use `Person.new('Thomas', 12)`

Instance variables are private to the instance, so we need getter methods if we want them to be accessible to others.

## Getters

No one should be able to reach into another person. Instead we ask others for their information using getter methods.

```
class Person

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end

  # Getters
  def name
    @name
  end

  def age
    @age
  end

  def species
    @species
  end
end
```

## Setters

The same goes for setting attributes on a person. You need to ask.

```
class Person

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end

  # Getters
  def name
    @name
  end

  def age
    @age
  end

  def species
    @species
  end

  # Setters
  def name=(name)
    @name = name
  end

  def age=(age)
    @age = age
  end
end
```

There is no setter for @species because no one should be able to alter a person's species.

# Helper Methods for Attr Getters and Setters

Ruby has a built in shortcut for writing getters and setters for instance variables.

attr_reader is a helper method for creating getters for an attribute
attr_writer is a helper method for creating setters for an attribute
attr_accessor is a helper method for creating getters and setters for an attribute

```
class Person

  attr_accessor :name, :age
  attr_reader :species

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end

end
```

# Instance methods

The getters, setters, and initialize methods are examples of instance methods. They are methods defined on instances of a Class, as opposed to the class itself. These methods are denoted with a hashtag in front of them in documentation, e.g. `Object#class`. 

Class methods on the other hand are denoted with a period, e.g. `Class.new`


# Classical Inheritance

In Ruby, we can establish a relationship between classes called inheritance. Classes established lower in the heiarchy (sub-classes) can get features from those that are higher up (super-classes).

A Cat, for instance, is an animal. We can create an Animal class that has animal attributes that are not specific to only cats. It's also shared with Dogs, or Iguanas, or Spiders, etc.

```ruby
class Animal

  def initialize(species)
    @species = species
    @multi_cellular = true
    @has_breath = true
  end

   def has_breath
    @has_breath
   end

   def multi_cellular
    @multi_cellular
   end

   def breathe
    puts "Inhale and exhale"
   end
end

```

Cat is a subclass of Animal.
First, we require_relative at the top to reference the animal.rb file.
then, we use 'less than' sign to signify that we are inheriting from the animal class.
We can use super in the initalize to inherit the parent's initialize method

```ruby
require_relative('animal.rb')

class Cat < Animal

  def initialize(breed, color)
    super('Feline')
    @name = ""
    @breed = breed
    @color = color
  end

  # Getters
  def name
    if @name == ""
      "this kitty hasn't got a name yet"
    else
      @name
    end
  end

  def breed
    @breed
  end

  def color
    @color
  end

  # Setters

  def name=(new_name)
    @name = new_name
  end

  #instance methods

  def speak
    puts "meow"
  end

end

sherman = Cat.new("american shorthair", "gray")

```

Now, let's make a dog that also inherits from Animal.

```ruby
class Dog < Animal

  def initialize(breed, color)
    super('Canine')
    @breed = breed
    @color = color
  end

  def speak
    puts "woof woof"
  end

end

willy = Dog.new("black lab", "black")
```

We can also continue the chain and make subclasses of Cat and Dog or superclasses of Animal.

# Class Methods and Variables

Class attributes, a.k.a. variables, are prefixed with two at symbols. They are accessible to the class and any instances of the class.

Class methods are prefixed with `self`. This tells the Ruby interpreter that this is a method of the class which is the self in this context.


```ruby

class Cat

  # Class Variables
  @@cats = []

  # Class Methods
  def self.all_cats
    @@cats
  end

  attr_reader :breed, :color
  attr_writer :name

  def initialize(breed, color)
    @name = nil
    @breed = breed
    @color = color
  end

  # Getters
  # We can't use attr helper methods here
  # because this getter has special behavior.
  def name
    if @name.nil?
      puts "this kitty hasn't got a name yet"
      nil
    else
      @name
    end
  end

  # Instance Methods
  def register
    @@cats.push(self) if !@@cats.include?(self)
  end

end

sherman = Cat.new("american shorthair", "gray")
sherman.register

Cat.all_cats #=> [#<Cat:0x007fc4d4089710 @name=nil, @breed="american shorthair", @color="gray">]

```

If we want to make sure all cats are registered at birth, we can call the register method at initialization (birth):

```ruby

class Cat

  # Class Variables
  @@cats = []

  # Class Methods
  def self.all_cats
    @@cats
  end

  attr_reader :breed, :color
  attr_writer :name

  def initialize(breed, color)
    @name = nil
    @breed = breed
    @color = color
    register
  end

  # Getters
  # We can't use attr helper methods here
  # because this getter has special behavior.
  def name
    if @name.nil?
      puts "this kitty hasn't got a name yet"
      nil
    else
      @name
    end
  end

  # Instance Methods
  def register
    @@cats.push(self) if !@@cats.include?(self)
  end

end

sherman = Cat.new("american shorthair", "gray")

Cat.all_cats #=> [#<Cat:0x007fc4d4089710 @name=nil, @breed="american shorthair", @color="gray">]

```

# Self

In the above example of the Cat#register method, self refers to the instance of the cat that is calling the method register.

Simply put, self always refers to the object that you are currently inside.

Fun fact, in Ruby, you are always inside an object. Type self into IRB or PRY and see what happens.

# Public, Private, Protected

Moving forward you'll start to see the `private` and `protected` key words. Methods are public by default. You can make them private or protected for security reasons. You don't want any old object touching your objects in the wrong way. Generally speaking you want to keep the public surface area to a minimum.

Public means that any old object can access that method.

Private means that only that instance can access that method.

Protected means that only instances of the same class can access that method.

Let's make our setters private:
(All methods below the private keyword will now be private)

```
class Person

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end

  # Getters
  def name
    @name
  end

  def age
    @age
  end

  def species
    @species
  end

  private
  # Setters
  def name=(name)
    @name = name
  end

  def age=(age)
    @age = age
  end
end
```

Alternatively, you can use private as if it were a method that takes in the method names as symbols.
```
class Person

  def initialize(name, age)
    @name = name
    @age = age
    @species = 'homo sapien'
  end

  # Getters
  def name
    @name
  end

  def age
    @age
  end

  def species
    @species
  end

  # Setters
  def name=(name)
    @name = name
  end

  def age=(age)
    @age = age
  end

  private :name=, :age=

end
```

```
thomas = Person.new('Thomas', 19)
#=> #<Person:0x007feafb892ab8 @name="Thomas", @age=19, @species="homo sapien"> 
thomas.name
#=> "Thomas" 
thomas.name = 'Hope'
#=> NoMethodError: private method `name=' called for #<Person:0x007feafb892ab8>
```

Protected is used in a similar fashion.