require 'httparty'

# Grab the city & state from command line
city = ARGV[0].gsub(" ", "_")
state = ARGV[1]

# Make that get request! Notice the environmental variable I'm using to protect my api key.
data = HTTParty.get("http://api.wunderground.com/api/#{ENV["wunderground_key"]}/conditions/q/#{state}/#{city}.json")

# Getting the current time & formatting it with the .strftime method (http://ruby-doc.org/core-2.2.0/Time.html)
time = Time.now.strftime "%H:%M"

# Diving into our nested data structure (it's just a hash of hashes/arrays/etc)
location = data['current_observation']['display_location']['full']
weather = data['current_observation']['weather']

# YEAH
puts "The weather in #{location} as of #{time} is #{weather}."