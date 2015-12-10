require_relative "../lib/connection"

class Weapon < ActiveRecord::Base
  has_many :kills
  has_many :tributes, through: :kills
end