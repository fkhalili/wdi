require "../lib/connection.rb"
require "pry"

class Cow < ActiveRecord::Base

	def give_birth(number, name= "baby calf", sex= "female", breed= "cow")
		Cow.create({name: name, age: 0, sex: sex, breed: })
	end


end

binding.pry

