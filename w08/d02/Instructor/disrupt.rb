age = ARGV[0].to_i
dynamic = ARGV[1]

if dynamic == 'yes' && age > 25
    puts "Shame, but he's too old"

elsif dynamic == 'no' && age < 25
    puts "Fire him."

elsif dynamic == 'yes' && age < 25
    puts "OK. Let's disrupt the carpet market. Carpet is unjustifiably expensive, there is huge potential there"

else
    puts "Alright, let's just raise more money."
end