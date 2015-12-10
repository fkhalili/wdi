require "pry"
require "./reptile.rb"

class Turtle < Reptile

	@@fun_facts = ["Turtles also have a lower shell called a ‘plastron’.", "Turtles have existed for around 215 million years", "The largest turtle is the leatherback sea turtle, it can weigh over 900 kg! (2000 lb)", "Many turtle species are endangered.", "Sea turtles have special glands which help remove salt from the water they drink."]
	
	def self.fun_fact
		@@fun_facts[rand(0..@@fun_facts.length-1)]
	end

	attr_reader :age
	attr_accessor :name
	

	def initialize(name, species, num_limbs)
		super(species, num_limbs)
		@name = name
		@age = 0

	end

	def age!
		@age += 1
		@age.to_s
	end

	def swim
		"I love the water"
	end



end


turtle = Turtle.new("tom", "Cheloniidae", 4)

binding.pry