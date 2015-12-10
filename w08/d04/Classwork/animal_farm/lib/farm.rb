require_relative('farm_time')
require_relative("../models/person.rb")
require_relative("../models/cow.rb")
require_relative("../models/pig.rb")
require_relative("../models/sheep.rb")


class Farm

  def initialize
    @time = FarmTime.new
  end

  def run
    while @time.day < 3
      @time.another_day_passes

      case @time.day
      when 1
        james = Person.create({name: "James", age: 29, sex: "Male",  breed: "Human"})
        julie = Person.create({name: "Julie", age: 30, sex: "Female", breed: "Human"})

        daryl = Pigs.create({name: "Daryl", age: 2, sex: "Male", breed: "Berkshire"})
        helen = Pigs.create({name: "Helen", age: 2, sex: "Female", breed: "Berkshire"})

        suzi = Cows.create({name: "Suzi", age: 1, sex: "Female", breed: "Dwarf Lulu"})
        sherman = Cows.create({name: "Sherman", age: 12, sex: "Male", breed: "Dutch Belted"})


      when 2
          
      when 3
        # Fill me in
      end

    end
  end

end

