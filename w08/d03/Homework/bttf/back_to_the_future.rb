require "./vehicle.rb"
require "./train.rb"
require "./skateboard.rb"
require "./bicycle.rb"
require "./car.rb"

require "pry"

#Vehicle

v1 = Vehicle.new("horse and buggy", 4, "Burton, OH")
v1.description
#=> "horse and buggy"
v1.passengers
#=> []
v1.go_to('the barn dance!')
#=> "This horse and buggy is empty!"
v1.location
#=> "Burton, OH"
v1.add_passenger('Jacob Miller')
v1.add_passenger('John Miller')
v1.add_passenger('Isaac Miller')
v1.add_passenger('Mark Yoder')
v1.in_danger?
#=> false
v1.passengers
#=> ['Jacob Miller','John Miller','Isaac Miller','Mark Yoder']
v1.add_passenger('Sarah Hershberger')
v1.in_danger?
#=> true
v1.go_to('the barn dance!')
#=> "The horse and buggy is off to the barn dance!"

v2 = Vehicle.new('skateboard', 1, 'Asbury Park, NJ')
v2.add_passenger('Jerry Viatelli')
v2.go_to('the Boardwalk') # to grind...
v2.location
#=> the Boardwalk
v2.add_passenger('Marky Longello')
v2.in_danger?
#=> true



#Train

orient_express = Train.new('passenger train', 100, 'Istanbul')
orient_express.pull_the_rope
#=> Woo woooo!



#Skateboard

my_sweet_deck = Skateboard.new('SantaCruz™', 'Washington Square Park')
my_sweet_deck.grind
#=> "This Santa Cruz skateboard is empty!"
my_sweet_deck.add_passenger('PJ')
my_sweet_deck.goofy?
#=> false
my_sweet_deck.goofy = true
my_sweet_deck.goofy?
#=> true
my_sweet_deck.grind
#=> "khkhkhkhkh klunck khkh"
my_sweet_deck.kickflip
#=> "Rad! I can kickflip!"
my_sweet_deck.go_to('Chelsea Piers')




#Bicycle

hot_ride = Bicycle.new('Huffy', 'Milwaukee, WI')
hot_ride.add_passenger('Travis')
hot_ride.add_passenger('Taryn') # pegs!
hot_ride.in_danger?
#=> true
hot_ride.go_to('Rich\'s Restaurant')
#=> "Crash!!"
hot_ride.passengers
#=> []




#Car

delorean = Car.new(2, 1981, 'DeLorean', 'DMC-12', 'gray', 'Hill Valley')
delorean.add_passenger('Marty McFly')
delorean.refuel
delorean.go_to('the dance')
#=> "You're now at the dance."


