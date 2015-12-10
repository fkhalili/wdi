#call a function that turn a variable of numbers into an aarray
#map the array of numbers to double each other numbers
#now with an array of doubled numbers, find the sum method
#once youve gotten a sum modul it to see if its divisible by 10
#if yes return true if now return false

numbers = 1234567891
reversed = numbers.to_s.reverse.split("")

organized = reversed.map do |number|
	
	if reversed.index(number) % 2 == 1 || reversed.index(number) == 0 && reversed.length % 2 == 0
		number.to_i * 2
	else
		number.to_i
	end

end

puts organized

# def valid?(array)

# end	