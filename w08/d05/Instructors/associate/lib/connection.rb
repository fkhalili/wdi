require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :host => "localhost",
  :username => "fritzy",
  :database => "peterandsteven"
})


ActiveRecord::Base.logger = Logger.new(STDOUT)