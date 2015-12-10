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