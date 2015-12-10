##MTA

````ruby


#lines array
lines = [
	{:lines => "n", :stops => ["times_square", "34th", "28th", "23rd", "union_square", "8th"]},
	{:lines => "l", :stops => ["8th", "6th", "union_square", "3rd", "1st"]},
	{:lines => "6", :stops => ["grand_central", "33rd", "28th", "23rd", "union_square", "astor_place"]},
	{:lines => "q", :stops => ["times_square", "herald_square", "union_square", "canal_st"]},
	{:lines => "f", :stops => ["rockefeller_center", "42nd", "herald_square", "23rd", "14th", "west_4th"]}
]



#functions

#show lines
def show_lines(lines)
	lines.each do |line|
		puts line[:lines].upcase
	end
end

#show stops for line
def show_stops(lines, line1)
	lines.each do |line|
		if line[:lines] == line1
			puts line[:stops]
		end
	end
end






#show total number of stops

def show_total(lines, line1, stops1, line2, stops2)
	index1 = []
	index2 = []

	#get index for first stop
	lines.each do |line|
		if line[:lines] == line1
			index1.push(line[:stops].index(stops1))
			if line1 == "f"
				index1.push(line[:stops].index("herald_square") + 1)
			else
				index1.push(line[:stops].index("union_square"))
			end
		end
	end

	#get index for second stop
	lines.each do |line|
		if line[:lines] == line2
			index2.push(line[:stops].index(stops2))
			if line2 == "f"
				index2.push(line[:stops].index("herald_square") + 1)
			else
				index2.push(line[:stops].index("union_square"))
			end
		end
	end

	#calculate number of stops
	if index1[0] == index1[1]
		index1 = 0
	else
		index1 = (index1[0] - index1[1]).abs
	end

	if index2[0] == index2[1]
		index2 = 0
	else
		index2 = (index2[0] - index2[1]).abs
	end

	puts index1 + index2
end


#input logic

command = ARGV[0].downcase

if command == "lines" && ARGV.length == 1
	show_lines(lines)
elsif command == "stops" && ARGV.length == 2
	line1 = ARGV[1].downcase
	show_stops(lines, line1)
elsif command == "calculate" && ARGV.length == 5
	line1 = ARGV[1].downcase
	stops1 = ARGV[2].downcase.delete(".")
	line2 = ARGV[3].downcase
	stops2 = ARGV[4].downcase.delete(".")
	show_total(lines, line1, stops1, line2, stops2)
else
	puts "
	The following are your options:

	LINES : You must provide 0 arguements - lines

	STOPS : You must provide the 1 arguement - stops LINE

	CALCULATE : You must provide the 4 arguments - calculate STARTINGLINE STOP ENDINGLINE STOP
	"
end



````
