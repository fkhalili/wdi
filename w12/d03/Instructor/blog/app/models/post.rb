class Post < ActiveRecord::Base

	validates :author, presence: true
	validates :content, presence: true
	validates_length_of :content, maximum: 500
	validates :title, uniqueness: true

end
