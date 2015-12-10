/* Instructions: Fix all the bugs.
 * All of the functions should run properly.
 * That means that I must be able to RUN and USE them
 * without any errors.
 */

// Number of errors: 0
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Number of errors: 4
/*
 * @param {number} number
 * @return {string | number}
 */
var fizzBuzz = function fizzBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzBuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};

// Number of errors: 2
var janet = {
  name: 'Janet',
  'age': 26,
  'address': '14 Tree Lined Drive Los Angeles, CA'
};

// Number of errors: 1
var secondsInAYear = ((360 + 5) * (4 * 6) * (6 * 10) * (30 + (3 * 10)));

// Number of errors: 2
var cupcakes = ['red velvet', ['vanilla', 'chocolate'], 'sprinkles'];


// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var add = function add(x, y) {
  return x + y;
};

// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var subtract = function subtract(x, y) {
  return x + y;
};

// Number of errors: 4
/*
 * @param {number} num
 * @return {boolean}
 */
var isEven = function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// Number of errors: 0 if isEven is correct
/*
 * @param {number} num
 * @return {boolean}
 */
var isOdd = function isOdd(num) {
  return !isEven(num);
};

// Number of errors: 5
/*
 * @param {Array<number>} array
 * @return {Array<number | string>}
 */
var fizzPop = function fizzPop(array) {
  var resultsArray = [];

  for (var i = 0; i < array.length; i++) {
    var number = array[i];

    if (number % 15 === 0) {
      resultsArray.push('fizzPop');
    } else if (number % 3 === 0) {
      resultsArray.push('fizz');
    } else if (number % 5 === 0) {
      resultsArray.push('pop');
    } else {
      resultsArray.push(number);
    }
  }

  return resultsArray;
};
