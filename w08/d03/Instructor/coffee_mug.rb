# ###Coffee Mug

# Set up a CoffeeMug class, in coffee_mug.rb

# Attributes
# @color
# @level - a number that starts at 0
# Methods
# initialize method that accepts one argument and creates the required instance variables
# Getter and Setter methods for color
# Getter method for level
# drink - reduce the level by 1. do not reduce below 0
# refill - set the level to 10

class CoffeeMug

  attr_accessor :color
  attr_accessor :level

  def initialize(color)
    @color = color
    @level = 0
  end

  def drink
    if @level > 0
      @level -= 1
    end

    @level
  end

  def refill
    @level = 10
  end

end

binding.pry

