class Song

  attr_reader :title, :lyrics

  def initialize(title, lyrics)
    @title = title
    @lyrics = lyrics
  end

  def play
    puts @lyrics
  end

end
