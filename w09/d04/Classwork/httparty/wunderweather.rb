require "httparty"


def weather_me(city, state)
	response = HTTParty.get("http://api.wunderground.com/api/c73f350f163e267f/conditions/q/"+state+"/"+city+".json")

	time = response["current_observation"]["local_time_rfc822"]
	weather = response["current_observation"]["weather"]


	puts "In #{city}, #{state} on #{time} the weather has been: #{weather}"
end



if ARGV.length == 0
	weather_me(New_York, NY)
elsif ARGV.length == 2
	city = ARGV[0].capitalize
	state = ARGV[1].upcase
	weather_me(city, state)
else
	puts "please enter the city and state you would like to search :\nFor Example: ruby wunderweather San_Francisco CA\nIf you would like to search for NYC, NY leave the arguements blank\nFor Example: ruby wunderweather"
end


