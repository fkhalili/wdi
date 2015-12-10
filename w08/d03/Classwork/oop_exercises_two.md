##Exercises

In a file called reptile.rb, make a class Reptile with the following attributes:

- species
- cold-blooded set to true
- num_limbs

Write a method for 'getting' the number of legs of a reptile only if the num_limbs is equal to 0 or 4. Otherwise, output a message "this is probably not a reptile"

Also, write a getter method for species

In a file called turtle.rb, make a class Turtle that inherits from Reptile with the following attributes:

- name
- age
- species (use super from reptile)
- num_limbs (use super from reptile)

Give your turtle getter methods for name and age
Give your turtle a setter method for name


Write a method ``age!`` that when called will add 1 year to the turtle's age and return a string the turtle's current age.

Write a method 'swim' that returns a string "I love the water"

Write a class method ``fun_fact`` that when called will return a random fact from the following array:

```ruby
@@fun_facts = ["Turtles also have a lower shell called a ‘plastron’.", "Turtles have existed for around 215 million years", "The largest turtle is the leatherback sea turtle, it can weigh over 900 kg! (2000 lb)", "Many turtle species are endangered.", "Sea turtles have special glands which help remove salt from the water they drink."]
```

Instantiate a new turtle with the species 'Cheloniidae', name it as you like, it should have 4 legs.

Optionally, put a binding.pry in your turtle.rb file.

Play around with your turtle in Pry or IRB, make sure all it's methods work. Make it age, swim, rename it, check it's species, etc.

