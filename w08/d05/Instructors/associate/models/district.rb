require_relative("../lib/connection")

class District < ActiveRecord::Base
  has_many :tributes
end