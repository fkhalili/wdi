### Exercise: Make a Turtle constructor

1. Make a ```Turtle``` constructor that takes a name, a color, and a weapon.
1. Also add a property called `likesPizza` that is set to true.
1. Add a ```pizzaEaten``` property that is set to false
1. Add a ```eatPizza()``` method that when pizzaEaten is true will log the turtle's name + 'has eaten pizza' and turn pizzaEaten to false. Otherwise it should log the turtle's name + 'is eating pizza and turn pizzaEaten to true. 
1. Make four turtle object and store them in an array. 

For Reference:

Leonardo - blue, ninjato, Leonardo da Vinci 	
Michelangelo - orange, nunchucks, Michelangelo Buonarroti
Raphael - red, sai, Raffaello Sanzio da Urbino
Donatello - purple, bo, Donato di Niccolo di Betto Bardi

To verify everything works:
1. Change the name of one of the turtles to your own name.
2. Print out the weapon of that turtle.
3. Add a new turtle for the person sitting next to you.
4. Print out the contents of the turtles array.

##Tamagotchi

<img src="http://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg" width=50% >

For those who don't remember (or choose to forget), Tamagotchis were "digital pets" that you could carry around with you and feed them, clean up after them, pet them, and try to keep them happy.

Make a ```Tamagotchi``` constructor. Give it the following properties: 
1. a hungry property (initially false) 
2. a sick property (initially false) 
3. an age of 0 

and give it the following methods:

1. ```feed()``` - if hungry is true, print "That was yummy!" and set hungry to false.  If hungry is false, print "No thanks, I'm full." and set hungry to true. 
2. ```sleep()``` - prints out "zzzzzzz" (use as many z's as you want)
3. ```medicate()``` - if sick is true, print "I feel much better!" and set sick to false.  If sick is false, print "No thanks, I feel fine." and set sick to true.
4. ```increaseAge()``` - increase the age by one and print "Happy Birthday to me! I am " + age + " years old!"

Now make a variable named dog that is set to
 a new Tamagotchi. 

Add the following methods to it: 
1. ```bark()``` - prints out "ruff ruff" 
2. ```goOutside()``` - prints out "I own that tree now!" 

Make a variable named cat that is set to a new Tamagotchi.  Add the following methods to it: 
1. ```meow()``` - prints out "Meow!" 
2. ```useLitterBox()``` - "Burried treasure!" 

Make a variable named fish that is set to a new Tamagotchi.  Add the following method to it: 
1. ```swim()``` - prints out "Just keep swimming..." 

Try the following:
1. Feed the dog twice.
2. Increase the dog's age twice.
3. Make the dog bark 
4. Make the dog go outside.
5. Make the cat meow.
6. Make the cat sleep.
7. Make the cat use the litter box.
8. Give the fish medicine twice.
9. Make the fish swim.
