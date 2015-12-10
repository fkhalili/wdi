##Bill O'Reilly

<img src="http://crooksandliars.com/files/primary_image/15/06/billo.jpg">

> Renowned journalist and blowhard Bill O'Reilly loves to insult guests on his show and in his books. He's famous for using words like 'pinhead', 'nincompoop', and 'terrorist'. We are going to use ActiveRecord associations to track individual instances of Bill O'Reilly insulting his guests.

- We'll need three tables here. Words, guests, and 'slander_incidents'.
- Set these tables up in a way that allows us to track an instance of a given word being used to slander a given guest.
- Populate the tables with some fun guests, words, and slander incidents. Guests could include Jane Fonda, Ludacris or Jon Stewart. Words could include 'traitor', 'jackass', or 'simple-minded'. Now's your chance to be creative!
- Now create ActiveRecord models with the associations needed to do things like
`Guests.first.words` to see the various words O'Reilly has used to slander his guests
- Create a console file that requires all your models for testing.


####Bonus
- Create a command line application that interacts with your models. Users should be able to search guests, words, and see specific slander incidents.
