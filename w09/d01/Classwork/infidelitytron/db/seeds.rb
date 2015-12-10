# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

a = Affair.create({name: "sordid", location: "library stacks"})
b = Affair.create({name: "rather tame", location: "barn"})
c = Affair.create({name: "horrifying", location: "church"})
d = Affair.create({name: "idk", location: "swap meet"})