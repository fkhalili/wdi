# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Farm.create(name: 'Twin Oaks', location: 'Virginia')
Animal.create(name: 'Charlotte', age: 2, sex: 'Female', breed: 'Wolf', farm: Farm.first)
