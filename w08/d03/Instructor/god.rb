# singleton pattern

class God

  @@instance = nil

  def self.instance
    if !@@instance
      @@instance = God.new
    else
      @@instance
    end
  end

end

god = God.instance

God.instance

God.instance == god #true

binding.pry

