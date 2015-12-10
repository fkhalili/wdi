class Jukebox

  def initialize(list_of_songs = [], location = 'nowhere')
    @list_of_songs = list_of_songs
    @location = location
  end

  # Getter
  def location
    @location
  end

  # Also a Getter
  def list_of_songs
    @list_of_songs
  end

  # Setter
  def location=(location)
    @location = location
  end

  # Another Setter
  def list_of_songs=(songs)
    @list_of_songs = songs
  end

  def reset_songs_to(songs)
    @list_of_songs = songs
  end

  # Instance Method that is not a getter or setter
  def add_a_song(song)
    @list_of_songs.push(song)
  end

  def remove_a_song(song)
    @list_of_songs.delete(song)
  end

end

jukebox_zero = Jukebox.new()
jukebox = Jukebox.new(%w{awoo jukebox_hero why}, 'GA NYC 2B')


binding.pry
