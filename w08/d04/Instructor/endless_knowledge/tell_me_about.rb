
# ------------ SETUP STUFF ------------

require 'pry'
require "./dictionary.rb"

# This is the raw data for my dictionary. Every time my program runs, it will take every definition hash in this array and... (go to line 18!)
method_definitions = [
 { :term => "each", :definition => ".each is a Ruby term that can be called on an array. It takes a block of code and calls it once for each element, passing that element to the block."},
 { :term => "push", :definition => "pushes new element in array" },
 { :term => "select", :definition => "Returns a new array containing all elements of ary for which the given block returns a true value."},
 { :term => "reverse", :definition => "reverses your array" },
 { :term => "pop", :definition => "Removes the last element in your array" },
 { :term => "length", :definition => "Tells you how long an array or string is"},
 { :term => "inspect", :definition => "creates a string representatin of itself" },
 { :term => "map", :definition => "Like each but returns a new array"},
 { :term => "shuffle", :definition => "return a new array with elements shuffled" },
 { :term => "sort", :definition => "return a new array with self sorted"}
]

# ...feed it into my Dictionary instance generator (or, in actual terms, create a new instance of my Dictionary class). Check out dictionary.rb to see what happens when the new Dictionary is initialized with .new.  
dict = Dictionary.new(method_definitions)


# ------------ HERE BEGINNITH THE CLI ------------

command = ARGV[0]

case command
  when "define"
    term = ARGV[1].downcase
    # its_in_there will either be a number (the index of the correct term) or false (see dictionary.rb)
    its_in_there = dict.in_dictionary? term
    if its_in_there
      # Gives the definition of a term at the index returned from .in_dictionary? on line 33
      puts dict.give_definition its_in_there
    else
      puts dict.not_in_here
    end

  when "list"
    dict.list

  when "add"
    term = ARGV[1].downcase
    # Grabbing the rest of the array after dropping the first two elements
    definition = ARGV.drop(2).join(" ")
    dict.add_word term, definition
    # NOTE: WE ARE NOT PERSISTING DATA, so when we run our program again, it will not have our new word saved in the dictionary.
    index_of_new_term = dict.in_dictionary? term
    puts dict.give_definition index_of_new_term
  else
    puts "Whoops! You can enter the following commands:\n - define TERM\n - list\n - add TERM DEFINITION"
end