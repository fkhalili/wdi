class Student

	def initialize(name, age, favorite_tech)
		@name = name
		@age = age
		@favorite_tech = favorite_tech
	end

	#getter
	def name
		@name
	end

	def age
		@age
	end

	def favorite_tech
		@favorite_tech
	end


	#setter
	def name=(name)
		@name = name
	end

	def age=(age)
		@age = age
	end
	
	def favorite_tech=(favorite_tech)
		@favorite_tech = favorite_tech
	end

end


