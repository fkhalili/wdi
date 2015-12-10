require "pry"

class CoffeeMug

	#get access to instances quicker
	attr_accessor :color
	attr_reader :level


	def initialize(color)
		@color = color
		@level = 0

	end


	def drink
		if @level - 1 >= 0
			@level -= 1
		else
			@level = 0
		end
		@level
	end

	def refill
		@level = 10	
	end

end


binding.pry