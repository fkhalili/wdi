require('./song.rb')
require('./jukebox.rb')

songs = [Song.new('', ''), Song.new('', ''), Song.new('', ''), Song.new('', ''),]
jukebox = Jukebox.new(songs, 'GA')

binding.pry
