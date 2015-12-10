
##Vladimir Putin's Brain
> The data structure below is called a `hash` in Ruby, and is similar to an object in JavaScript in that it holds an orderless bunch of key:value pairs.

> Use Pry to access the data structure below. Once you've got working code, just copy it into a file called putin.rb, along with the data structure.
```ruby
vladimir_putins_brain = {
  "launch_code" => "a5Mjp257GHMGH23e5qxE",
  "fav_hobby" => "Riding ponies",
  "prideful" => true
}
```

- Use pry to return the string `"Riding ponies"`
1. Use pry to return the string `"a5Mjp257GHMGH23e5qxE"`
1. Use pry to add the key-value pair `"obsessive_crush" => "Condoleezza Rice"`
1. Use pry to add the key-value pair `"torture_count" => 931`

##Refrigerator
> Create a file called `flavor.rb`. Inside `flavor.rb`, create a hash representing the following foods: avocados, steak, grass, whiskey, muffins, fish, and soap. Avocados are fresh, steak is meaty, grass is fiber-filled, whiskey is smooth, muffins are sweet, fish is mercury-tastic and soap is disgusting. Here's some starter code:

```ruby
foods = {
  "avocados" => "fresh",
  "steak" => "meaty",
}
```

- once your hash is made, add 5 more foods and their flavors to your hash.

- avocados are full of that good fat. change the avocado value to be 'fatty'

- muffins are super unhealthy. Change the value for muffins to be 'carbtastic'

- soap. who would eat soap? Delete that from your hash.

- the fish went bad. the flavor of fish should be 'rotten'

- juice cleanse! add "raw carrot juice" to your hash with the flavor "wallet draining good"

- Atkins diet! get those muffins out of that hash.

- time to dry yourself out. delete whiskey from the hash.

- you just moved to park slope! add 'gluten free bread' to your hash with the flavor 'flavorless'



##Smoothies

```ruby
smoothie_ingredients = [
{ :ingredient => 'flax seeds', :amount => '1 tbsp' },
{ :ingredient => 'chia seeds', :amount => '1 tbsp' },
{ :ingredient => 'coconut flakes',  :amount => '1 tbsp' },
{ :ingredient => 'spirulina',  :amount => '1 tsp' },
{ :ingredient => 'pumpkin seeds', :amount => '1 tbsp' },
{ :ingredient => 'oatmeal', :amount => '1/4 cup' },
{ :ingredient => 'coco powder', :amount => '1 tbsp' },
{ :ingredient => 'peanut butter', :amount => '1 tbsp' },
{ :ingredient => 'almonds', :amount => '1/4 cup' },
{ :ingredient => 'walnuts', :amount => '1/4 cup' },
{ :ingredient => 'spinach', :amount => '1/4 cup' },
{ :ingredient => 'greek yogurt',  :amount => '1/4 cup' },
{ :ingredient => 'nutrional yeast', :amount => '1 tbsp' },
{ :ingredient => 'brussels sprouts', :amount => '1/4 cup' },
{ :ingredient => 'asparagus',  :amount => '1/4 cup' },
{ :ingredient => 'kale', :amount => '1/4 cup' },
{ :ingredient => 'broccoli rabe',  :amount => '1/4 cup' },
{ :ingredient => 'blue berries',  :amount => '1/4 cup' },
{ :ingredient => 'chopped banana',  :amount => '1/2 cup' },
{ :ingredient => 'strawberries', :amount => '1/4 cup' },
{ :ingredient => 'mango', :amount => '1/4 cup' },
{ :ingredient => 'hemp milk',  :amount => '1 cup' }
]
```

- Access the amount of mango needed for a delicious smoothie.

- Access the amount of spinach needed for a delicious smoothie.

- Add an ingredient and amount of your choosing to the list of smoothie ingredients.

- Some of the measurements are a bit off.
  - Change the amount of hemp milk required to '2 cups'.
  - Change the amount of strawberries required to '1/3 cup'.
  - 'Nutrional yeast' is misspelled, correct that.

####Thoughts
- The keys in the above data structure aren't strings but a different datatype called 'symbols'. Symbols are often used in place of strings for keys because they aren't mutable and take up less memory.

## OK Cupid
```ruby
ok_cupidites = [
  {
    :handle => "nicestGuy5530",
    :name => "Brad Gottfried",
    :in_a_relationship => false,
    :hobbies => ["working out", "seeing concerts", "watching sports", "eating"],
    :seeking => ["friendship", "short-term dating", "a long-term relationship", "anything I can get"]
  },
  {
    :handle => "southwesternDave",
    :name => "Dave Giacamonni",
    :in_a_relationship => false,
    :hobbies => ["bird watching", "cross-country skiing", "When I'm bored I do this thing I call 'friendly' prank calls, where I just call strangers and kinda ask them how they're doing and stuff, in a friendly way"],
    :seeking => ["a long-term relationship", "short-term dating"]
  },
  {
    :handle => "WOOTman",
    :name => "Jeff West",
    :in_a_relationship => true,
    :hobbies => ['improvisational comedy', 'aquacizing', 'private investigation'],
    :seeking => []
  }
    ]
```

- return whether `southwesternDave` is in a relationship.
- add `watching True Detective` to `WOOTman`'s hobbies.
- return an array of what `nicestGuy5530` is seeking.
- retrieve `southwesternDave`'s third hobby.
- add "bro dates" to what `w00tman` is seeking
- `southwesterndave` wants to settle down. He is no longer seeking short term relationships. Make his profile reflect that.
