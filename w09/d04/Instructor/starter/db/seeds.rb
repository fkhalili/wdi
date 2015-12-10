# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


ben = User.create({email: "ben@aplin.net", password: "ben"})
riaz = User.create({email: "riaz@bacchus.net", password: "riaz"})
aditi = User.create({email: "aditi@prasad.net", password: "aditi"})

a = Affair.create({name: "great", description: "why did i do this", user_id: ben.id})
b = Affair.create({name: "fun", description: "why oh why", user_id: ben.id})
c = Affair.create({name: "bad", description: "i should just join a club", user_id: ben.id})
d = Affair.create({name: "good", description: "i should take up fencing", user_id: riaz.id})
e = Affair.create({name: "gross", description: "i should learn to swim finally", user_id: riaz.id})
f = Affair.create({name: "smelly", description: "i should eat better or at least less", user_id: riaz.id})
g = Affair.create({name: "perplexing", description: "i should learn to shower properly", user_id: aditi.id})
h = Affair.create({name: "disenchanting", description: "i should learn the ukelele", user_id: aditi.id})
i = Affair.create({name: "funky!", description: "i should learn to play the french horn bbetter", user_id: aditi.id})