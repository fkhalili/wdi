# Week Seven and Eight Weekend Review

* [SQL Joins](#sqljoins)
* [Ruby Basics](#ruby)
* [Ruby OOP](#oop)
* [Active Record & Postgres](#arpg)
* [Sinatra](#sinatra)

## <a name=sqljoins>SQL Joins</a>

* A normalized set of tables
 ![](https://camo.githubusercontent.com/cfb9ca77c6840a46cc0e7aa9e02cca99ba52c71a/687474703a2f2f646f63732e6f7261636c652e636f6d2f68746d6c2f4231333931355f30342f696d616765732f7461626c65732e676966)
 
* Part of data normalization is ensuring data *integrity*. This usually means that there should be a formal relationship between tables that depend upon one anther. **Foreign keys** and **primary keys** help enforce relational integrity. 

* Strengths:
	- Stronger overall database organization
	- Reduction of redundant data
	- Data consistency within the database i.e. data is always represented the same way
* Trade-Offs:
	- Heavier CPU and memory requirements 

##### You can combine data from multiple tables by performing a ```Join```

  - **department**:
  
  |dept|employee_id|
  |-----|------|
  |operations|1|
  |operations|2|
  |marketing|3|
  |engineering|4|
  |sales|5|
  |sales|6|

  - **employee**:
  
  |name|age|salary|state|
  |-----|------|------|------|
  |Ted|37| 65000 | VA |
  |Sally|30| 55000 | VA |
  |Sam|27| 85000 |NY |
  |Yu|25| 55000 |CA |
  |Eddie|25| 35000 |NY |
  |Carly|26| 45000 |CA |



##### The ```ORDER BY``` clause

How would you form this table?

|name|salary|monthly|
|-----|------|------|
|Eddie|35000| 2916 |
|Carly|45000| 3750 |
|Sally|55000| 4583 |
|Yu|55000| 4583 |
|Ted|65000| 5416 |
|Sam|85000| 7083 |

The ```ORDER BY``` clause gives you a way of ordering your results

```
db.all('SELECT name, salary, salary/12 AS monthly FROM employee ORDER BY monthly', function(err, table){
	if(err) throw err;
	else{
		console.log("--------Table Salary---------");
		console.log(table);
	}
});
```

##### Combining Data from multiple tables

Combining data from multiple tables is actually pretty easy: 

```
db.all('SELECT employee.name, department.dept FROM department, employee', function(err, row){
	if(err) throw err;
	else{
		console.log("--------Cartesian Product---------");
		console.log(row);
	} 
});

```

Each row of the first table is combined with each row of the second table (a 'Cartesian Product'... like the multiplication table). This way of combining tables is actually not that useful.

What if we only want the intersection of certain rows per employee? For instance, how could we print out a table that looks like this:

| name | department |
| ----- | ----- |
| Ted | sales |
| Sally | sales |
| Sam | engineering |
| Carly | opeerations |
| Eddie | operations |
| Yu | marketing |

```
db.all('SELECT employee.name, department.dept FROM department, employee WHERE department.employee_id = employee.id', function(err, row){
			if(err) throw err;
			else{
				console.log("--------Combine with WHERE Clause---------");
				console.log(row);
			} 
});
```

##### JOIN your Tables

* The `JOIN` operation describes the process of forming a new table from multiple other tables. There are [several different](https://o5k4r.files.wordpress.com/2014/02/joins.jpg) built-in `JOIN` operations, but we'll focus on one: ```INNER JOIN```

* But first, the `JOIN` operation that would produce the cartesian product is called the `CROSS JOIN`:

```
db.all('SELECT employee.name, department.dept  FROM department CROSS JOIN employee', function(err, row){
			if(err) throw err;
			else{
				console.log("--------CROSS JOIN---------");
				console.log(row);
			} 
});

```

##### The INNER JOIN

By far the most useful `JOIN`, `INNER JOIN` makes forming tables via primary keys and foreign keys super easy!

Try to make this table again:

|name|department|
|-----|------|
|Ted|operations|
|Sally|operations|
|Sam|marketing|
|Yu|engineering|
|Eddie|sales|
|Carly|sales|


```
db.all('SELECT employee.name, department.dept FROM department INNER JOIN employee ON department.employee_id = employee.id', function(err, row){
			if(err) throw err;
			else{
				console.log("--------INNER JOIN---------");
				console.log(row);
			} 
});
```

## <a name=ruby>Ruby Basics</a>

##### Other

* pry vs irb - both are for terminal use. similar to REPL in node
* `.rb` - the extension for ruby files
* ` ruby file.rb` - run a ruby file

##### Data Types

* JS
	* Booleans 
	* Numbers
	* Strings
	* Arrays
	* Objects

 * Ruby
	* Booleans - true and false
	* Integer - 12 (a whole number)
	* Floats - 9.45 (decimal)
	* Strings - "You Are Beautiful"
	* Arrays - ['x', 'y', 'z']
	* Hashes - {key: value, key2: value2} (Objects with key value pairs)

* Variables
	* Can be declared without "var" 
	* We don't need semi colons
	* use one equal sig
* String Interpolation
	* JS - first + " " + last
	* Ruby - "#{first} #{last}"
* Booleans - same as JS

##### Control Flow

* Methods for terminal use:
	* puts: gives you a new line after the string
	* print: prints out the string without a new line afterwards
	* gets: gets input from a user
	* chomp: removes the extra line
	
```
puts "What is your name?"
user = gets.chomp
puts user
```
* if else statements
	* Logically similar to JS with minor syntax differences
	* Remember Ruby is a language meant to mirror english. Here are some syntax differences:
		* No need for ()
		* No need for ;
		* else if is not `elsif`
		* finish the statement with `end` (well get into `do` later)
		* Comparisons only need `==` not `===`

```
puts "give me a number"
num = gets.chomp.to_i

if num % 5 == 0 && num % 3 == 0
    puts "fizzbuzz"
elsif num % 5 == 0
    puts "fizz"
elsif num % 3 == 0
    puts "buzz"
else
    puts "#{num} is not fizzable"
end
```

##### Loops / Arrays / Hashes

* For Loops
	* using ".." gives you up to and including the last number
	* using "..." gives you up to BUT NOT including the last number
	
```
for x in 1..5
	puts x
end
```
* While Loops
	* Notice incrementation is +=1 instead of ++ from JS
	* You cannot increment and decrement with (++) and (--)
	
```
x = 0
while x < 10
	puts x
	x += 1
end
```
* Arrays same as JS
	* Many similar methods
	* Indexes is the same as JS
	* Arrays nested into Arrays are the same
	* .push is different 
		* You can use `<<` instead of writing .push.
		* This works for both arrays and strings

```
people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

x=0
while x < 3

arr = []
people.each do |i| 
    arr.push(i[x])
end

    if arr[0] == "Maria"
        puts "#{arr[0]}'s favorite color is #{arr[1]}, and she loves #{arr[2]}"
    else
        puts "#{arr[0]}'s favorite color is #{arr[1]}, and he loves #{arr[2]}"
    end

x+=1 
end
```
***

* Hashes are like the Objects in JS. 
	* They are written in snake case (my_hash)
	* They can be written in several ways
		* put quotes around keys
		* use a hash rocket between key and value
		* make the key name a symbol

```
my_self = {
	"name" => "Jason",
	"age" => 27,
	"color" => "red",
	"hungry" => true
}

OR

my_self = {
	:name => "Jason",
	:age => 27,
	:color => "red",
	:hungry => true
}

OR 

my_self = {
	name: "Jason",
	age: 27,
	color: "red",
	hungry: true
}
```
**Quick Sidenote**

* Symbols are names in ruby. They are defined using ":"
	* Following the ":" must be a letter or an underscore. 
	* Do not put any spaces in the name of your symbols
* See the above example about hashes keys being declared as symbols instead of quotes
* Symbols are unique, there can be only one. This is why they are ideal for hashes
* ".to_s" method turns a value to a string
* ".to_sym" OR ".intern" method turns a value to a symbol

**Other hash things**

* You can use "Hash.new" to make a new hash. Make sure Hash is capitalized

```
pets = Hash.new
```
* You can also create a hash with predetermined data

```
puts Hash["a", 100, "b", 50]
```
* Add keys/values to hash just like JS

```
food = Hash.new
food["fruit"] = "apple"
food["meat"] = "bacon"
```
***
##### Enumerables
* Ruby gives us a lot of methods which will reduce the need for loops
* Enumerables: .times, .each, .upto, .downto, .map
* .each is similar to the forEach method in JS however you can put two parameters inside of the each method when dealing with hashes.
	* The syntax is `object.each{|item| do something}`
	* It's not required to have two parameters
	* What happens when you only put one argument in?
	* What happens when you put two arguments in?
	
```
tomCruz = {
  :Pilot => "Top Gun",
  :Racer => "Days of Thunder",
  :Spy => "Mission Impossible",
  :Sports Agent => "Jerry Maguire"
}

tmnt.each do |x|
 	puts "Hello #{x}"
end

tomCruz.each do |key, value|
	puts "Tom Cruize was a #{key} in the movie #{value}"
end
```
**Side Note**

* Jumping very quickly back to arrays, the .each method works similarly with arrays as the forEach in JS

```
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  puts "#{x}"
end
//11 12 13 14 15
```
* The times method: iterate something a specific number of times
	* number.times{do this}
	
	```
	10.times{puts "I Am Beautiful"}
	```
* Other ways of looping: `.upto`, `.downto`, `.each`

	```
	"L".upto("P"){|letter| puts letter}
	
	90.downto(72){|num| puts num}
	```

* now lets move to the `.map` method
	
	```
	arr.map { |a| 2*a }   #=> [2, 4, 6, 8, 10]
	arr                   #=> [1, 2, 3, 4, 5]
	arr.map! { |a| a**2 } #=> [1, 4, 9, 16, 25]
	arr                   #=> [1, 4, 9, 16, 25]
	```
* The map method will return a new array with the new values. The original array is not changed
* if we use the map! it will mutate the original array

##### Methods

* Methods act like functions in JS. 
	* Reusable code that returns a value. 
	* We use methods to keep things DRY
	* Helpful in debugging. Well organized methods allows us to follow where an error comes from
* Method Syntax
	* `def` starts the method
	* `method_name` follows the def keyword. Make sure it is in snake case
	* `end` closes out your method

```
def method_name
  # Do something!
end
```
* We *call* or *invoke* a Ruby method like this:

```
my_name("George")
```
* NOTES
	* Remember: There's no hoisting in Ruby, so you must define your method in Ruby before you call it!
	* Ruby will return the last value in a method, even if you do not use the `return` keyword
	* Variables defined inside the method is local to that method. We'll talk about scope now

##### Scope

* Scope refers to where you can access the value of a variable. Scoping in Ruby is more restrictive than in Javascript. Every time the Ruby interpreter encounters `def`, it enters a new scope. This means simultaneously that it is capturing the code its about to read into a name but also that it is creating a new context in which that code will be read. That context is the local scope, and it cuts both ways: variables defined inside the method cannot be changed or read outside the method -- variables defined outside the method cannot be changed or read inside the method

```
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
* You can pass information *into* a function by using arguments/parameters.

```
def magic(x)
	puts "#{x} is the best"
end

magic(5)
```
* The `*` ('splat') is used to tell Ruby that you don't know exactly how many arguments you might have:

```
def magic(x, *other_stuff)
	puts "#{x} is the best"
	other_stuff.each { |thing| puts "...but #{thing} ain't bad either!" }
end

magic("VA", "NY", "CA", "NC")
```
* Again, return is optional. It is good practice to include a return statement so yourself and others know what to expect.

```
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
##### Blocks

* Ruby **blocks** allow you to create methods that don't have names. Ruby blocks are like anonymous functions in JavaScript.
* Blocks are defined with curly braces `{}` or the `do` and `end` keywords
* Blocks do not care how many parameters you pass (methods do) and will run regardless.

```
[1,2,3].each {|value| print value} # prints "123"

[1,2,3].map do
	|value| 2**value
end 
    # returns [2, 4, 8]
```
##### Yield

* We can pass a block to a method. Thats exactly what we did in the above with the `.each` and `.map` examples
* Passing a block to a method is a great way of abstracting certain tasks from the method and defining those tasks when we call the method. In JavaScript this is accomplished easily (via callbacks). In Ruby, you would use a ```yield``` statement.
* We can also call `yeild` multiple times within a method

```
def example(x)
  5.times do |n|
   yield n
   answer=n*x
   puts "You are in the method test:#{answer}"
  end
end

example(10) {|i| puts "You are in the anonymous method (i.e. the block) #{i}"}
```

## <a name=oop>Ruby OOP</a>

* Ruby is an object-oriented language. Everything is an object.
* Objects are programming contructs that have attributes and methods.
* Before we go over classes lets visit some scoping ideas with variables and methods
	* Local Variables - available in specific method
	* Class Variables `@@` - available in specific class. Belongs to a class, NOT the instance of a class.
	* Instance Variables `@` - available in specific instances of a class. These variables are specific to a object, not the class itself. We will go over making objects that are instances of specific classes below
	* Instance Methods - These are defined during an instance of a class. Some great examples of this are getter and setter methods. Those will be explained below. 

#### Classes

* Classes are blueprints for objects. 
* created using the `class` keyword followed by the classname
	* The classname will be capitalized and camelcase
	* finish with `end` keyword
	* Every class should belong to it's own `.rb` which will have the same name
* By convention we start with an initialize method
	* This should take a few parameters
* `.new` is the keyword for creating new instances of a class

```
inside car.rb

class Car
	def initialize(color, year, model)
		@color = color
		@year = year
		@model = model
		@location = ""
	end

	def color 
		@color
	end
	
	def year
		@year
	end
	
	def start=(location)
		@location = location
		puts "You have driven to #{@location}"
	end
	
	
	def paint_job=(new_color)
		@color = new_color
		puts "Nice paint job, your car is now #{@color}"
	end
end

my_toyota = Car.new("red", 1973, "Charger");

puts my_toyota.drive("New York")
```
##### New Object Creation

* When we make a new object using `.new` we need the `initialize` method. 
* This method is automatically invoked when the class is called followed by `.new`
* In the above example we stick instance variables inside the initialize method. Now whenever we create a car using `Car.new` each instance will have it's own `color`, `year`, `model`, and `location`.

##### Getter Methods

* Methods which will `get` us the information on specific instance variables
* In the above example the methods `color` and `year` will return to us the value of that object/car color and year

##### Setter Methods

* These methods will `set` attributes in our class. 
* In the above example the method `paint_job` and `start` allows us to set/change color and location
* By convention setter methods have an equal sign betwen the method name and the new value

##### Helper Methods for Attr Getters and Setters

* Ruby has a built in shortcut for writing getters and setters for instance variables.
	* attr_reader is a helper method for creating getters for an attribute
	* attr_writer is a helper method for creating setters for an attribute
	* attr_accessor is a helper method for creating getters and setters for an attribute

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
##### Naming

* UpperCamelCase a.k.a PascalCase applies to
	- class names
	- module names
* snake_case applies to
	- instances
	- methods
	- variables unless it falls into one of the other categories
	- file names
* SCREAMING_SNAKE_CASE
	- constants
* Methods that end with a question mark always return booleans

##### Classical Inheritance

* In Ruby, we can establish a relationship between classes called inheritance. Classes established lower in the heiarchy (sub-classes) can get features from those that are higher up (super-classes).
* Below we have an Animal class

```
class Animal

  def initialize(species)
    @species = species
    @multi_cellular = true
    @has_breath = true
  end

   def has_breath
    @has_breath`
   end

   def multi_cellular
    @multi_cellular
   end

   def breathe
    puts "Inhale and exhale"
   end
end

```
* But what if we want to make a cat with it's own methods.
* We can make a subclass for Cat that will inherit some properties from the Animal class
* First, we require_relative at the top to reference the animal.rb file.
then, we use 'less than' sign to signify that we are inheriting from the animal class.
* We can use super in the initalize to inherit the parent's initialize method

```
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
##### Class Methods and Variables

* Class variables are prefixed with two at symbols. They are accessible to the class and any instances of the class.
* Class methods are prefixed with `self`. This tells the Ruby interpreter that this is a method of the class which is the self in this context.

```
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
* If we want to make sure all cats are registered at birth, we can call the register method at initialization (birth):

```

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
##### Self

* In the above example of the Cat#register method, self refers to the instance of the cat that is calling the method register.
* Simply put, self always refers to the object that you are currently inside.
* Fun fact, in Ruby, you are always inside an object. Type self into IRB or PRY and see what happens.

## <a name="arpg">Active Record & Postgres</a>
##### Active Record

* Active Record is an ORM (Object-relational mapping) which helps our Ruby applications talk to our SQL database
* Active Record is dependent on the use of classes in order to point to specific table in a database
* The class names in your application must be singular, capitalized, and camel cased, and the table names must be pluralized, lowercased, and snake cased

```
	#turtle.rb
class Turtle < ActiveRecord::Base
  attr_accessor :name, :color
  has_one :weapon

  def initialize(name, color)
    @name = name
    @color = color
  end
end
```
* Given the class `Turtle`, Active Record will map it to a table named `Turtles`.
* We can use our `Turtle` model to create a new turtle

```
turtle = Turtle.create({name: "Donatello", color: "Purple"})
```
* Now, we'll create a set of weapons and give them a relation to `Turtle`

```
	#weapon.rb
class Weapon < ActiveRecord::Base
  attr_accessor :type
  belongs_to :turtle

  def initialize(type)
    @type = type
  end
end
```
* Finally, we need to grab Donatello from the database and create a weapon for him

```
turtle = Turtle.find_by({name: "Donatello"})
turtle.weapons.create({type: "Bo Staff"})
```
* Remember how Active Record is an ORM?
  * **Object:** `Turtle` and `Weapon`
  * **Relation:** `has_one` and `belongs_to`
  * **Mapping:** The connection between the models `Turtle` and `Weapon`, and their database tables

## <a name=sinatra>Sinatra</a>

* Now that we're able to persist data using Active Record and postgres how would we make a CRUD application? There is a Ruby server framework called Sinatra
* You can think of Sinatra as "Express" but for Ruby
* Sinatra allows us to serve up data the same way as Express, but since it is in Ruby it allows us to write our routes in a much more convenient manner. Below is an example of making a `GET` http request and rendering a file

```
get '/' do
	redirect '/artists'
end

get '/artists' do
	items_list = Item.all
	erb :index, locals: {items: items_list}
end
```
* You might recognize the markdown below as a similar structure to how we have been setting up our Sinantra apps

```
root
	app.rb
	db
		schema.sql
	lib
		connection.rb
	models
		album.rb
		artist.rb
	views
		artists
			index.erb
			show.erb
			edit.erb
		album
			index.erb
			show.erb
			edit.erb	
```
* db - store your schema where you make the "blueprint" for your tables. The table names are the plural version of the class name (we will be touching class later)

```
DROP TABLE if exists artists;

CREATE TABLE artists(
id integer PRIMARY KEY,
name VARCHAR,
instrument VARCHAR, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
* lib - the connection.rb is where you tell sinatra what type of db you are using and what the name is. This will be connected to Active Record

```
require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "music.db"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
```
* model - In here we are creating one file per table. Each file will have a class that is the `SINGULAR` noun of the table. (table = artists, class = artist). Each class will also be a child class of `ActiveRecord::Base`. Active Record is a module and in it is a class called `Base`. This allows you to use very 'easy' methods to access database information.

```
require_relative('../lib/connection')

class Artist < ActiveRecord::Base
end
```
* app.rb - your server.rb. This is where you'll store your RESTful routes. 
* views - where you are storing your templating files that will be called upon when a specific route is hit
	* Youre `.erb` files are the same as `.ejs` files. 




