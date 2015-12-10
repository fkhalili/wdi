require_relative('models/cheese')
require 'pry'
binding.pry


Cheese.create({
 name: "Cheddar",
 sharpness: 8
})

Cheese.create({
 name: "Gouda",
 sharpness: 5
})

Cheese.create({
  name: "Mozzarella",
  sharpness: 5
})

Cheese.create({
  name: "Goat",
  sharpness: 6
})

#See all the cheeses - Read/index

``all_cheeses = Cheese.all``

#find a particular cheese by ID -- Read/show

``cheddar = Cheese.find(1)``

#or if you want to find a cheese BY a particular attribute. pass it a hash. 

``gouda = Cheese.find_by({name: "Gouda"})``

# update a cheese -- Update

``gouda.name = "Gooda"``
``gouda.save``

or better yet....

``gouda.update({name: "Gooda", sharpness: 3})``

# delete a cheese -- Delete

``gouda.delete``

# delete all cheeses

``Cheese.delete_all``
