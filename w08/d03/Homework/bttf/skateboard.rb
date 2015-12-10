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