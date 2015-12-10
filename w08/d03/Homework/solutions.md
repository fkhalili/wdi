#BTTF

##back_to_the_future.rb

````ruby

require "./vehicle.rb"
require "./train.rb"
require "./skateboard.rb"
require "./bicycle.rb"
require "./car.rb"

require "pry"

#Vehicle

v1 = Vehicle.new("horse and buggy", 4, "Burton, OH")
v1.description
#=> "horse and buggy"
v1.passengers
#=> []
v1.go_to('the barn dance!')
#=> "This horse and buggy is empty!"
v1.location
#=> "Burton, OH"
v1.add_passenger('Jacob Miller')
v1.add_passenger('John Miller')
v1.add_passenger('Isaac Miller')
v1.add_passenger('Mark Yoder')
v1.in_danger?
#=> false
v1.passengers
#=> ['Jacob Miller','John Miller','Isaac Miller','Mark Yoder']
v1.add_passenger('Sarah Hershberger')
v1.in_danger?
#=> true
v1.go_to('the barn dance!')
#=> "The horse and buggy is off to the barn dance!"

v2 = Vehicle.new('skateboard', 1, 'Asbury Park, NJ')
v2.add_passenger('Jerry Viatelli')
v2.go_to('the Boardwalk') # to grind...
v2.location
#=> the Boardwalk
v2.add_passenger('Marky Longello')
v2.in_danger?
#=> true



#Train

orient_express = Train.new('passenger train', 100, 'Istanbul')
orient_express.pull_the_rope
#=> Woo woooo!



#Skateboard

my_sweet_deck = Skateboard.new('SantaCruz™', 'Washington Square Park')
my_sweet_deck.grind
#=> "This Santa Cruz skateboard is empty!"
my_sweet_deck.add_passenger('PJ')
my_sweet_deck.goofy?
#=> false
my_sweet_deck.goofy = true
my_sweet_deck.goofy?
#=> true
my_sweet_deck.grind
#=> "khkhkhkhkh klunck khkh"
my_sweet_deck.kickflip
#=> "Rad! I can kickflip!"
my_sweet_deck.go_to('Chelsea Piers')




#Bicycle

hot_ride = Bicycle.new('Huffy', 'Milwaukee, WI')
hot_ride.add_passenger('Travis')
hot_ride.add_passenger('Taryn') # pegs!
hot_ride.in_danger?
#=> true
hot_ride.go_to('Rich\'s Restaurant')
#=> "Crash!!"
hot_ride.passengers
#=> []




#Car

delorean = Car.new(2, 1981, 'DeLorean', 'DMC-12', 'gray', 'Hill Valley')
delorean.add_passenger('Marty McFly')
delorean.refuel
delorean.go_to('the dance')
#=> "You're now at the dance."




````


##vehicle.rb

````ruby

class Vehicle


	attr_reader :description
	attr_reader :passengers
	attr_reader :capacity
	attr_reader :location


	def initialize(description, capacity, location)
		@description = description
		@passengers = []
		@capacity = capacity
		@location = location
	end


	def in_danger?
		if @passengers.length > @capacity
			true
		else
			false
		end
	end


	def add_passenger(passenger)
		@passengers.push(passenger)
	end

	def go_to(location)
		if @passengers.length > 0
			@location = location
			"This #{description} is going to #{location}!"
		else
			"This #{description} is empty!"
		end
	end

end

````


##train.rb

````ruby

require_relative "./vehicle.rb"


class Train < Vehicle

	def initialize(description, capacity, location)
		super
	end


	def pull_the_rope
		"woo woooo!"
	end


end

````


##skateboard.rb

````ruby

require_relative "./vehicle.rb"

class Skateboard < Vehicle

	def initialize(description, location)
		super(description, capacity, location)
		@capacity = 1
		@goofy = false

	end

	def grind
		if @passengers.length > 0
			"khkhkhkhkh klunck khkh"
		else
			"This #{description} is empty!"
		end
	end

	def kickflip
		if @passengers.length > 0
			"Rad! I can kickflip"
		end
	end

	def goofy?
		@goofy
	end

	def goofy=(boolean)
			@goofy = boolean
	end

	def description
		"#{@description} skateboard"
	end


end

````


##bicycle.rb

````ruby

require_relative "./vehicle.rb"

class Bicycle < Vehicle

	def initialize(description, location)
		super(description, capacity, location)
		@capacity = 2
	end


	def in_danger?
		if @passengers.length >= @capacity
			true
		else
			false
		end
	end


	def add_passenger(passenger)
		if @passengers.length < 2
			@passengers.push(passenger)
		end
	end

	def go_to(location)
		if @passengers.length > 0
			random = (rand < 0.5)
			if random == false
				@location = location
				"This #{description} is going to #{location}!"
			else
				@passengers = []
				"crash!!"
			end
		else
			"This #{description} is empty!"
		end
	end
end

````


##car.rb

````ruby

require_relative "./vehicle.rb"

class Car < Vehicle

	attr_writer :color
	attr_reader :year_produced
	attr_reader :make
	attr_reader :model
	attr_reader :color
	attr_reader :fuel

	def initialize(capacity, year_produced, make, model, color, location)
		super(description, capacity, location)
		@year_produced = year_produced
		@make = make
		@model = model
		@color = color
		@fuel = false
	end

	def description
		"#{@color} #{@year_produced} #{@make} #{@model}"
	end

	def refuel
		if @fuel == true
			"no need to top off!"
		elsif @fuel == false
			@fuel = true
		end

	end

	def go_to(location)
		if @passengers.length > 0 && @fuel == true
			@fuel = false
			@location = location
			"This #{description} is going to #{location}!"
		elsif @fuel == false
			false
		else
			"This #{description} is empty!"
		end
	end

end

````
