require_relative "../lib/connection"

class Kill < ActiveRecord::Base
  belongs_to :tribute
  belongs_to :weapon
end