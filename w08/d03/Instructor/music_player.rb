class MusicPlayer

  def initialize(media_type, volume_range)
    @media_type = media_type
    @volume_range = volume_range
    @something = 'awoo'
  end

  def play
    puts @media_type
  end

  def pause
  end

  def skip
  end

  def previous
  end

end


