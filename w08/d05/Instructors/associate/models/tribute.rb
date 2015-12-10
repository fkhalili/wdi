require_relative("../lib/connection")

class Tribute < ActiveRecord::Base
  belongs_to :district
  has_many :kills
  has_many :weapons, through: :kills
end