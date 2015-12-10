require "pry"

numbers = [5, 2, 12, 7, 56, 42, 34]

#ascending funtions
def sort(numbers)
	(1..numbers.length-1).each do |i|
		if numbers[i] < numbers[i-1]
			numbers[i], numbers[i-1] = numbers[i-1], numbers[i]
		end
	end
	check numbers

end


def check(numbers)
	sorted = true
	(1..numbers.length-1).each do |i|
		if numbers[i] < numbers[i-1]
			sorted = false
			sort numbers
		end
	end

	if sorted == true
		return numbers
	end
end
#end ascending functions




#command line arguements
if ARGV[0] == "ascending"
	check numbers
	puts numbers
elsif ARGV[0] == "descending"
	check numbers
	puts numbers.reverse()
else
	puts "Please enter asceding or descending: ruby bubble.rb [ascending/descending]"
end








