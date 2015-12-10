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