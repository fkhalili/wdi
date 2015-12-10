require_relative "./vehicle.rb"


class Train < Vehicle

	def initialize(description, capacity, location)
		super
	end


	def pull_the_rope
		"woo woooo!"
	end


end