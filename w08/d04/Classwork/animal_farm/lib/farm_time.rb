class FarmTime

  attr_reader :day

  def initialize
    @day = 0
  end

  def another_day_passes
    puts "The sun sets on another day on the farm."
    @day = @day + 1
    puts "Cockle-dooodle-doo. It's a brand new day on the farm."
  end

end
