class User < ActiveRecord::Base
  validates :password, :real_name, presence: true
  validates :codename, uniqueness: true, presence: true
end
