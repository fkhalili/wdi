# WEEKEND WARRIORS

![](http://www.hixxysoft.com/Images/unepic-pc-role-playing-game-1.jpg)

Now that we know all this stuff about Ruby and ActiveRecord, were going to create a simple command line Role Playing Game (RPG). Once the game is called via ```ruby app.rb```, it will run itself without user input. Be sure to puts messages so you can see the story that is unfolding.

## Example Directory Structure
```
/weekend_warriors
    /db
      schema.sql
    /lib
      game.rb
    /models
      hero.rb
      enemy.rb
    app.rb
    Gemfile
```


## The Hero

There will be a hero who has four attributes:

  * Health Points (HP): An integer (10–1000) amount for their health
  * Damage: An integer (0–100) amount of damage they does with an attack
  * Attack: An integer (0–100) chance they will hit
  * Evasion: An integer (0–100) rating to represent how shifty they are
  * Defeated: A boolean.

Save the hero to the database using ActiveRecord.

## The Enemies
There will be enemies that will have the same attributes as the hero.

* Make at least 3 types of enemies.
* The enemies should be slightly different from each other. 
  Examples:
    * one enemy has a lot of health but a very small attack
    * one enemy has high damage but very low attack

Save the enemies that are created into the database using ActiveRecord too.

## The Game Method
When the Game is ```run```

1 One of the enemy types is randomly chosen and instantiated/created.
2 The enemy then fights the hero using the ```fight``` method. (See below.)
3 If the hero wins, another enemy is randomly created and we repeat the sequence.
4 This sequence gets repeated UNTIL the hero is defeated.

## The Fight Method

Make sure to show what is going on in the fight by puts'ing out the hits/misses/deaths/wins

* The hero always attacks first
* determine if the hero scores a hit
    * get a random number between 0 and 100 (check the docs to see how you can get a random number)
    * determine the hit percentage by calculating the following formula:
      * ( (attack value of attacker) / (evasion value of vitctim) ) * 10
    * if the random number is higher than the hit percentage, the hero misses
* if the hero lands a hit: 
    * reduce the health of the enemy
* check to see if the enemy is dead
    * if the enemy has 0 or less health, return true
* the enemy attacks next if they are still alive
* determine if the enemies scores a hit
    * get a random number between 0 and 100 (check the docs to see how you can get a random number)
    * determine the hit percentage by calculating the following formular:
        * ( (attack value of attacker) / (evasion value of vitctim) ) * 10
    * if the random number is higher than the hit percentage, the enemy misses
* if the enemy hits:
    * reduce the health of the hero
* check if the hero is still alive
    * if the hero has 0 or less health, return false
* repeat the sequence while the hero is alive/undefeated

Remember to update and save the hero and the enemies as their health points change and as they are defeated!

## Super Bonuses

* Level up. Give the hero a level and experience. Everytime a player gets a certain amount of experience (from fighting an enemy), 'level' him up by giving him better stats. If the hero gets to level 10, the hero wins and the game ends.
* "Scale" the enemies based on the heroes level (they get harder as the hero levels)


Allow the game to take user input so that the user can make choices for the hero.

* Hero Types. Make it possible for the user to choose from more than one type of hero.
* Fight or Flight. Allow the hero to choose whether or not to fight or run from an enemy. (maybe its not a 100% chance to run?)
* Save game. Allow the user to quit and return to the current state of their game.

Use Single Table Inheritance to DRY up your code.
Read the DOC: [http://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html](http://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html)


