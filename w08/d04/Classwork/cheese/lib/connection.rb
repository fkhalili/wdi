require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "cheese.db"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)