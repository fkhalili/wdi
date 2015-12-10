# I'm going to need my Definition class for this - better require it
require './definition.rb'

# My Dictionary class contains the methods I need to respond to my user's commands - it's a blueprint for 
class Dictionary

# This method sets up the dictionary to take in an array of hashes. Each hash should contain the :term and :definition keys. 
  def initialize(words)
    # Create a new instance of Definition class for every element in the words array, saves it to @words instance variable. See definition.rb for the Definition class's.... DEFINITION
    @words = words.map do |word|
      Definition.new(word[:term], word[:definition])
    end
  end

  def words
    @words
  end

  def list
    @words.each do |word|
      puts word.term
    end
  end

# Checks to see if the word's in the @words array, returns false if it's not.
  def in_dictionary?(term)
    # Default value of "index" is false.
    index = false
    @words.each_with_index do |word, i|
      if word.term == term
        # If the word is found in my array, set index equal to the index of the word!
        index = i
      end
    end
    # Return index either way.
    index
  end

# Adds a new word definition to our instance's @words array
  def add_word(term, definition)
    @words.push(Definition.new(term, definition))
  end

# takes the index of a definition in the @words array and returns a pretty string!
  def give_definition(i)
    "#{@words[i].term}: #{@words[i].definition}"
  end

  def not_in_here
    "Word not found :("
  end

end

# Testing out the Dictionary class:
# test_dict = Dictionary.new([{term: "Anna", definition: "a person"}, {term: "Sung", definition: "ok"}])

# You can throw a binding.pry down here and try creating/interacting with new instances of the Dictionary class. Things to try:

# - Create a new instance
# - Add a word to your instance's repertoire
# - Search for a word that IS and one that IS NOT in your dictionary.

# binding.pry
