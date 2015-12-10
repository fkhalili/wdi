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