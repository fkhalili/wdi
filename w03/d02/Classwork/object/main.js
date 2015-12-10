
console.log("linked");

var turtle = function turtle (name, color, weapon){
	this.name = name;
	this.color = color;
	this.weapon = weapon;
	this.likesPizza = true;
	this.pizzaEaten = false;
	this.eatPizza = function eatPizza(){
		if (this.pizzaEaten === true) {
			console.log(this.name + " has eaten pizza");
			this.pizzaEaten = false;
		}
		else{
			console.log(this.name + " is eating pizza");
			this.pizzaEaten = true;
		}
	}
}

var leonardo = new turtle ("Leonardo Da Vinci", "blue", "ninjato");
var michelangelo = new turtle ("Michelangelo Buonarroti", "orange", "nunchucks");
var raphael= new turtle("Raffaello Sanzio da Urbino", "sai", "red");
var donatello= new turtle("Donato di Niccolo di Betto Bardi", "bo", "purple");







var tamagotchi = function tamagotchi(){
	this.hungry = false;
	this.sick = false;
	this.age = 0;
	this.feed = function feed(){
		if (this.hungry === true) {
			console.log("That was yummy!");
			this.hungry = false;
		}
		else if (this.hungry === false) {
			console.log("no thanks, im full.");
			this.hungry = true;
		}
	}
	this.sleep = function sleep () {
		console.log("zzzzzzzzzz");
	}
	this.medicate = function medicate () {
		if (this.sick === true) {
			console.log("i feel much better!")
			this.sick = false;
		}
		else if (this.sick === false) {
			console.log("no thanks, i feel fine")
				this.sick = true;
			}
		}
	this.increaseAge = function increaseAge () {
		this.age ++;
		console.log("happy birthday to me! I am " + this.age + " years old!");
	}
};

var dog = new tamagotchi();

dog.bark = function bark () {
	console.log("ruff, ruff");
}
dog.goOutside = function goOutside () {
	console.log("i own that tree now!");
}

var cat = new tamagotchi();

cat.meow = function meow () {
	console.log("meow!");
}
cat.useLitterBox = function useLitterBox () {
	console.log("buried treasure!");
}

var fish = new tamagotchi ();
fish.swim = function swim () {
	console.log("just keep swimming ...");
}
