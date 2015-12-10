#### Nirvana Exercise

Given the following array:

var nirvana = ["kurt cobain", "aaron burckhard", "krist novoselic"]

1. Replace Aaron with Dale Crover
2. Replace Dale with Dave Foster
3. Replace Dave with Chad Channing
4. Add Jason Everman to the band
5. Remove Jason Everman
6. Replace Chad with Dan Peters
7. Replace Dan with Dave Grohl (finally!)
8. Add John Duncan to the band
9. Remove John
10. Add Lori Goldston to the band
11. Add Pat Smear
12. Remove Kurt Cobain

####Cars Exercise

* We're going to make cars

  * In the Node REPL create a car object called `mustang` with the following properties
    * color - red
    * variety - muscle
    * horsepower - 435
  * create a car object called `tt` with the following properties
    * color - silver
    * variety - sport
    * horsepower - 211
  * create a car object called `gallardo`
    * color - black
    * variety - exotic
    * horsepower - 543
* In your console
  * Find out what variety car the mustang is (use both notations)
  * Find out how many horsepower the gallardo has (use both notations)
  * Find out what color the tt is
  * Give the gallardo a paint job (make it orange)
  * Give the mustang a suite tune-up. Change its horsepower to 500
  * The TT goes super-saiyan. Change its class to "dbz", and change its
    horsepower to 9001


Q: Can arrays be values in an object?

Of course!

```js
var bands = {
  nirvana: ["kurt", "dave", "krist"],
  "smashing pumpkins": ["billy", "jimmy", "james","darcy"]
}
```

Q: How do you suppose I would get Dave out of this?


#### Breakfast Club Cast Exercise

<img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/411667_441603715867202_685105596_o.jpg" height="200" width="200" >

Use the [Breakfast Club Imdb Page](http://www.imdb.com/title/tt0088847/fullcredits?ref_=tt_cl_sm#cast) to construct a object where the keys are **character names**and the values are **actor names**. Include at least 5 characters.

Create a command line program using this object that:
- takes a **character name** as an argument
- prints out the name of the actor that played that character


Don't forget to use quotes around the argument that you send to your program:

```
$ node breakfastclub.js "Andrew Clark"
Emilio Estevez
```

**TV Show Object**

```js
var tvShow = {
  name: "Twin Peaks",
  director: "David Lynch",
  genre: ["Drama", "Mystery", "Thriller"],
  actors: ["Kyle MacLachlan", "Lara Flynn Boyle", "Dana Ashbrook", "Sherilyn Fenn"],
}
```
Fill in the variable using object calls

```js
var tvShowName
var tvShowDirector
var tvShowGenre1
var tvShowActor4
```

##Bonus: Nested Property Lookup

**Bank Account Object**

```js
var bankAccount = {
  number: 555555,
  balance: {
    checking: 6.30,
    savings: 10.09,
    investments: {
      cocaCola:  100.00,
      tesla: 200.00,
    }
  }
}
```

fill in the variables with object calls

```js
var checkingBalance
var savingsBalance
var teslaBalance
```

## Bonus: Iterating Over Data Structures

#### FizzBuzz
Rewrite FizzBuzz as a commandline application that can accept as many numbers as the user gives.

```bash
node fizzbuzz.js 1 2 3 4 5 6 7 8 9 10
```
```bash
node fizzbuzz.js 100 99 98
```
- Numbers that are divisible by 5 and 3 should print out fizzbuzz.
- Numbers that are divisible by 3 should print out fizz.
- Numbers that are divisible by 5 should print out buzz.
All other numbers should print out itself.
