var Bird = function Bird(name, airspeed) {
  this.name = name;
  this.airspeed = airspeed;
};

// Use the prototype to share methods and properties among all instances
Bird.prototype.fly = function fly() {
  console.log('Flying at', this.airspeed, 'kilometers per hour.');
};

var birdy = new Bird('Birdy', 9);
var tweetie = new Bird('Tweetie', 3);

var HummingBird = function HummingBird(name, airspeed, backwardsAirspeed) {
  this.backwardsAirspeed = backwardsAirspeed;
  Bird.call(this, name, airspeed);
};

// Set the prototype to an empty object that 
// delegates via the prototype-chain to the 'superclass'.
HummingBird.prototype = Object.create(Bird.prototype);


HummingBird.prototype.constructor = HummingBird;
HummingBird.prototype.flyBackwards = function flyBackwards() {
  console.log('Flying backwards at', this.backwardsAirspeed, '. Wheeeee!');
};

var hummer = new HummingBird('Hummer', 12, 10);

// useful methods
// instanceof, e.g. instance instanceof Constructor
// Object.getPrototypeOf

// useful properties
// constructor, e.g. instance.constructor
// prototypte, e.g. object.prototypte, Constructor.prototype
// __proto__, e.g. object.__proto__



