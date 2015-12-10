require "pry"

class Reptile



	attr_reader :species
	attr_reader :cold_blooded

	def initialize(species, num_limbs)
		@species = species
		@cold_blooded = true
		@num_limbs = num_limbs

	end



	def num_limbs 
		if @num_limbs == 0 || @num_limbs == 4
			@num_limbs
		else
			"this is probably not a reptile"
		end
	end


end