require 'active_record'

ActiveRecord::Base.establish_connection({
    :adapter => "postgresql",
    :database => "todo.db"
  })

ActiveRecord::Base.logger = Logger.new(STDOUT)