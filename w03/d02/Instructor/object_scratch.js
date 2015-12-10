var birdyOne = {
  hasFeathers: true,
  species: 'tucan',
  diet: ['worms', 'mice', 'leftovers'],
  sex: 'boy'
};

var birdyTwo = {
  hasFeathers: false,
  species: 'penguin',
  diet: ['fish', 'polar bear'],
  sex: 'girl'
};

var tweetyBird = {
  hasFeathers: true,
  species: 'tweety bird',
  diet: ['pussy cat'],
  sex: 'boy'
};

var Bird = function Bird(name, hasFeathers, species, diet, sex) {
  this.name        = name;
  this.hasFeathers = hasFeathers;
  this.species     = species;
  this.diet        = diet;
  this.sex         = sex;
  this.isHungry    = true;
  this.chirp       = function chirp() {
    console.log('chirp! my name is', this.name);
  };
  this.eat         = function eat() {
    if (this.isHungry) {
      console.log('nom nom nom');
      this.isHungry = false;
    } else {
      console.log('I\'m full. No thank you.');
    }
  };
};

var birdyTwentyTwo = new Bird('John', true, 'angry', ['pig'], 'boy');
var birdyTwentyThree = new Bird('Doe', false, 'Dodo', ['bullet'], 'girl');
birdyTwentyTwo.chirp(); // 'chirp! my name is John'
birdyTwentyThree.chirp(); // 'chirp! my name is Doe'
