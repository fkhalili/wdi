
require_relative("../models/tribute")
require_relative("../models/district")
require_relative("../models/weapon")
require_relative("../models/kill")


brooklyn = District.create({name: "Brooklyn", location: "East Coast"})
white_plains = District.create({name: "White Plains", location: "Upstate (slightly)"})
fargo = District.create({name: "Fargo", location: "The once great plains"})
moms_house = District.create({name: "Dobbs ferry", location:"basement"})

megan = Tribute.create({name: "Megan", district_id: brooklyn.id})
thompson = Tribute.create({name: "Thompson", district_id: white_plains.id})
peter = Tribute.create({name: "Peter", district_id: fargo.id})
steven = Tribute.create({name: "Steven", district_id: fargo.id})
jeff = Tribute.create({name: "Jeff", district_id: moms_house.id})
ethan = Tribute.create({name: "Ethan", district_id: moms_house.id})

gun = Weapon.create({name: "revolver"})
machete = Weapon.create({name: "machete"})
flamethrower = Weapon.create({name: "flamethrower"})

megan_kills = Kill.create({weapon_id: flamethrower.id, tribute_id: megan.id})
steven_kills = Kill.create({weapon_id: machete.id, tribute_id: steven.id})
peter_kills = Kill.create({weapon_id: gun.id, tribute_id: peter.id})
ethan_kills = Kill.create({weapon_id: machete.id, tribute_id: ethan.id})
thompson_kills = Kill.create({weapon_id: gun.id, tribute_id: thompson.id})