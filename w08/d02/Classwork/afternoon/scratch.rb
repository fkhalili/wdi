def trans (x, y, z)
	puts (x + y) * z
end

trans 1, 2, 3

def intro (name1, name2)
	puts "#{name1}, meet #{name2}"
end

intro "harry", "sally"



def shout (*x)
	x.each do |variable|
		puts variable.upcase 
	end
end

shout "hello there", "hey watsup hello"

def chopped (array) 
	array.pop
	puts array
end

chopped [1, 2, 3, 4, 5]



def how_big (string)
	if string.length < 3
		puts "small"
	elsif string.length > 3 && string.length < 5
		puts "medium"
	elsif string.length > 5
		puts "large"
	end
end


how_big "yolo"


def weatherman (cond, temp)
	if cond === "rainy" && temp == "cold"
		puts "better stay inside!"
	elsif cond == "rainy" && temp == "hot"
		puts "sounds like a gross combo"
	elsif cond == "sunny" && temp =="hot"
		puts "maybe best to go swimming"
	elsif cond == "windy" && temp == "cold"
		puts "bundle up"
	elsif cond == "windy" && temp == "hot"
		puts "tornado warning!"
	else
		puts "dont make sense"
	end	
			
end



weatherman"windy", "hot"

# def start
# puts "do you know what the meaning of life is?"
# 	if ARGV[0] == "y"
# 		meaning_of_life()
# 	else
# 		puts "comeon bruh"
# 		start


# def meaning_of_life
# 	return 42
# end

