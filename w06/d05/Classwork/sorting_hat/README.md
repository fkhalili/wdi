# The Sorting Hat

![img](http://www.rhymeswithgeek.com/wp-content/uploads/2014/11/in-a-pivotal-moment-harry-asks-the-sorting-hat-not-to-put-him-in-slytherin.jpg)

The head honchos at Hogwarts have decided: It's 2015, the current sorting hat is SO... old hat. It's up to you to write an application to help the Hogwarts administrative team sort incoming students into their respective houses!

### Directions

For this exercise, you'll be practicing making database calls using the sqlite3 npm module. Keep in mind - students have a `house_id`, but a student's record won't contain their house name or any other information about that house. Once we have the student's data, how could we get information about their house?

You've been provided with a `hogwarts.db` database file. Check it out to see what it contains! Write a server that...

1. ...serves up an HTML page with a form and input for a student's name.
2. ...adds that student to the database. Make sure to give them a `house_id`.*
3. ...after saving student to the database, presents the user with a page that tells them where the student was sorted!

\* You can choose to sort students any way you want - by length of name, first letter of name, number of vowels, secret formula... anything goes!
