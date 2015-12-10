## jasons favorite things


````
/*
evaluate array things
access "UFC" from array slot number 1
shift from the beginning of the array "anna Kendrick"
pop from the end of the array "anna Kendrick"
unshift in the beginning of the array "the red power ranger"
push at the end of the array "banana Republic"
*/

var things = ["Anna Kendrick", "UFC", "DotA 2", "General Assembly", "Anna Kendrick"];
things[1];
things.shift();
things.pop();
things.unshift("The Red Power Ranger");
things.push("Banana Republic");

````

## pauls favorite things

````
/*
access animals in the thing array with things.animal
access eateries third array at things.eateries[2]
concatenate things.sport with the array "in the" with things.season using .conc()
*/

var things = {
    animal: "puppies",
    sport: "tennis",
    season: "summer",
    eateries: ["Chop't", "Maison Kayser", "Eisenberg's"],
    happy: true
};
things.animal;
things.eateries[2];
things.sport.concat(" in the " + things.season);

````

## bonus

````
/*
set happy from things.happy to false
set animal from things.animal to kittens
set season from things.season to winter
set eateries from things.eateries to new array ["Chipotle", "Dough Donuts", "Mc'Donalds"]
prints things
*/

things.happy = false;
things.animal = "kittens";
things.season = "winter";
things.eateries = ["Chipotle", "Dough Donuts", "Mc'Donalds"];
console.log(things);

````

## super bonus

````
/*
push to the end of jasonsThings the object things using a.push(b)
print the sixth holding place of jasonsThings which is the new array things and print eaateries first place
*/
jasonsThings.push(things);
console.log(jasonsThings[5].eateries[0]);

````

## prime numbers

````
/*
execute a variable number to start the count
execute an array called primeNumbers with all the prime numbers in them
while number is less than or equal to 100
  execute a for loop where i is 0 and with i is less than the length of the primeNumbers array and adding 1 to i every loop
    if the array primeNumbers at location i is equal to the variable number
      print "Divide this!"
  then print the variable number in the while loop
  add the number by 1
*/  


var number = 0;
var primeNumbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

while (number <= 100) {
    for (var i = 0; i < primeNumbers.length; i++) {
        if (primeNumbers[i] === number)
        console.log("Divide this!");
    }
    console.log(number);
    number ++;
}

````

## flag

homework/flag/flag.html


````
<!DOCTYPE>

<html>

	<head>
		<title>Flag</title>
		<link rel="stylesheet" type="text/css" href="flag.css">
	</head>

	<body>

	<div id="container">
		<div class = "stars">
			<img src="images/stars.png">
		</div>
		<div class="stripe red">
    	</div>
	   	<div class="stripe white">
       	</div>
	   	<div class="stripe red">
	   	</div>
	   	<div class="stripe white">
	   	</div>
	   	<div class="stripe red">
	   	</div>
	   	<div class="stripe white">
	   	</div>
	   	<div class="stripe red">
	   	</div>
	    <div class="stripe white">
	    </div>
	    <div class="stripe red">
	    </div>
	    <div class="stripe white">
	    </div>
	    <div class="stripe red">
	    </div>
	    <div class="stripe white">
	    </div>
	    <div class="stripe red">
	    </div>
 	 </div>

	</body>
</html>

/*
CSS style stylesheet flag.css
*/

.stars{
  background:blue;
  width:380px;
  height:280px;
  float:left;
  position: static;
}

.stripe{
  height: 40px;
}

.red{
  background-color: red;
}

.white{
  background-color: white;
}
#container{
  border: 1px solid black;
  height: 520px;
  width: 1000px;
}





````
