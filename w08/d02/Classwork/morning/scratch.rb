#Kardashian
=begin
word = ARGV[0]

if word.length > 3 
	puts "Ugh, that's #{word.length} letters. Just have 'Ye read it to me'"
end
=end


#CEO
age = ARGV[0].to_i 
dynamic = ARGV[1]

if dynamic == "true" && age > 25 
	puts "Shame, but he's too old"

elsif age < 25 && dynamic == "false"
	puts "Fire him"

elsif age < 25 && dynamic == "true"
	puts "OK. Let's disrupt the carpet market. Carpet is unjustifiably expensive, there is huge potential there"

else
	puts "Alright, let's just raise more money"
end