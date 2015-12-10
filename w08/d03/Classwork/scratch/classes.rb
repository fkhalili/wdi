require "pry"

class Jukebox

	#setting the arguements to something here (list_of_songs = []) it makes a default, that if you dont set @list_of_songs to anything itll go to default
	def initialize(list_of_songs = [], location ="nowhere")
		@list_of_songs = list_of_songs
		@location = location
	end

	#getter
	def location
		@location
	end

	def list_of_songs
		@list_of_songs
	end

	#setter

	def location=(location)
		@location = location
	end

	#instance method, not setter or getter
	def add_a_song(song)
		@list_of_songs.push(song)
	end

	def remove_a_song(song)
		@list_of_songs.delete(song)
	end
	
end

#%w{} is a shortcut to make and array of strings
jukebox = Jukebox.new(%w{song1 song2 song3}, "bar")


binding.pry