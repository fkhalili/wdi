class Student

	def initialize(name, publisher, price, awesomeness)
		@name = name
		@publisher = publisher
		@price = price
		@awesomeness = awesomeness
	end

	#getter
	def name
		@name
	end

	def publisher
		@publisher
	end

	def price
		@price
	end

	def awesomeness
		@awesomeness
	end

	#setter
	def name=(name)
		@name = name
	end

	def publisher=(publisher)
		@publisher = publisher
	end

	def price=(price)
		@price = price
	end

	def awesomeness=(awesomeness)
		@awesomeness = awesomeness
	end


end


