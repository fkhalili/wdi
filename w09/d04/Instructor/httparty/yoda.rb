require 'httparty'
require 'uri'

# Expects the user to type in a sentence wrapped in "quotes"
sentence = ARGV[0]

# Using Ruby's uri module to URL encode our sentence
encoded_sentence = URI.escape(sentence)

# get request using HTTPartyyyy! Notice that we set headers using a hash/key-value pairs on lines 14-16. Also note my ENVIRONMENT VARIABLE!!!
response = HTTParty.get(
  "https://yoda.p.mashape.com/yoda?sentence=#{encoded_sentence}", 
  headers: {
    "X-Mashape-Key" => ENV["mashape_key"], 
    "Accept" => 'text/plain'
    })

puts response