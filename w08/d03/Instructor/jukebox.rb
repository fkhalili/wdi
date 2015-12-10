require('./music_player.rb')

class Jukebox < MusicPlayer

  @@jukeboxes = []

  def self.all
    @@jukeboxes
  end

  # Jukebox.jukeboxes


  def initialize(media_type, volume_range, list_of_songs, location)
    @media_type = media_type
    @volume_range = volume_range
    @list_of_songs = list_of_songs
    @location = location
    register_self_with_jukebox_gods

    puts 'Bloop'
  end

  def play
    super()
    puts ' more stuff'
  end

  def register_self_with_jukebox_gods
    @@jukeboxes.push(self) if !@@jukeboxes.include?(self)
  end

  # the_instance.register_self_with_jukebox_gods

end


binding.pry
