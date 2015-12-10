# Expresseritto

* Write an Express app with the following routes:

	* `/tortilla/rice` - returns an HTML header with `"MMMMMM"`  
	* `/tortilla/guac` - returns an HTML header with `AHHHHHHH!`

* Add the following routes to Expressritto:

	* `/tortilla/:food` - returns an HTML paragraph that reads `"Well, <food> is good on a tortilla, too."`  
	* `/:somethingElse` - returns an HTML paragraph that reades `"Sorry, we only serve burritos here!"`

* Add another route `/mine/:name`. This will use EJS to return an HTML header that says `Jason (or whatever name you use) makes the best burritos`

* Add another route `/ingredients`. This will use EJS to show all the ingredients in a burrito in list format. (tortilla, guac, tomato, cheese, etc.). You can use a hardcoded array to store ingredients.

* Add another route `/types?` and after the question mark give some properties to your burrito. Print out in list format the properties below. 
	* tortilla can be whole wheat or plain
	* meat can be beef, chicken, or pork
	* taste will be on a scale from one to ten
	
