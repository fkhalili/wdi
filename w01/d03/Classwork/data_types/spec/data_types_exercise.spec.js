var chai = require('chai');
var expect = chai.expect;
var testObject = require('../data_types_exercise_2.js');

describe('myFirstName', function() {
  it('should be a string', function() {
    expect(testObject.myFirstName).to.be.a('string');
  });
});

describe('myLastName', function() {
  it('should be a string', function() {
    expect(testObject.myLastName).to.be.a('string');
  });
});

describe('myAgeInYears', function() {
  it('should be a number', function() {
    expect(testObject.myAgeInYears).to.be.a('number');
  });
});

describe('myHeightInInches', function() {
  it('should be a number', function() {
    expect(testObject.myHeightInInches).to.be.a('number');
  });
});

describe('iAmAHumanBeing', function() {
  it('should be a boolean', function() {
    expect(testObject.iAmAHumanBeing).to.be.a('boolean');
  });
});

describe('iAmAStudent', function() {
  it('should be a boolean', function() {
    expect(testObject.iAmAStudent).to.be.a('boolean');
  });
});


describe('fullName', function() {
  it('should be equal to firstName and lastName with a space in between', function() {
    expect(testObject.fullName).to.equal(testObject.myFirstName + ' ' + testObject.myLastName);
  });
});

describe('concatenatedPoem', function() {
  it('should be equal to the original poem', function() {
    expect(testObject.concatenatedPoem).to.equal('Beware the Jabberwock, my son!\nThe jaws that bite, the claws that catch!\nBeware the Jubjub bird, and shun\nThe frumious Bandersnatch!')
  });
});

describe('secondsInAYear', function() {
  it('should be equal to the number of seconds in a year', function() {
    expect(testObject.secondsInAYear).to.equal(31536000);
  })
});

describe('millisecondsInAYear', function() {
  it('should be equal to the number of seconds in a year', function() {
    expect(testObject.millisecondsInAYear).to.equal(31536000000);
  })
});
