/* Instructions: Fix all the bugs.
 *
 * All of the functions should run properly.
 * That means that I must be able to RUN and USE them
 * without any errors.
 *
 * Write self-documenting console.log statements
 * to test each function, i.e. include simple tests
 * that verify the full functionality of the function.
 *
 * Examples:
 * console.log(fizzBuzz(3) === 'fizz');
 * console.log(fizzBuzz(15) === 'fizzBuzz');
 * console.log(fizzBuzz(5) === 'buzz');
 * console.log(fizzBuzz(1) === 1);
 */

// Number of errors: 0
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Number of errors: 4
/*
 * @param {number} number
 * @return {string | number}
 */
var fizzBuzz = function fizzBuzz(number) {
  if (num % 15 === 0) {
    return 'fizzBuzz';
  } elseif (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    retun num;
  }
  }
};

// Number of errors: 2
var janet = {
  name: 'Janet';
  'age': 26,
  'address': '14 Tree Lined Drive Los Angeles, CA';
};

// Number of errors: 2
var secondsInAYear == ((360 + 5) * (4 * 6) * (6 * 10)) * (30 + (3 * 10)));

// Number of errors: 2
var cupcakes = ['red velvet'; ['vanilla', 'chocolate']; 'sprinkles'];

// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var add = func add(x, y) {
  return x + y;
};

// Number of errors: 3
/*
 * @param {Array<number>} array
 * @return {number}
 */
var sum = function sum(array) {
  var total = 0;

  for (var index = 0, index < array.length, index++) {
    total = array[index];
  }

  return total;
};

// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var subtract = function subtract(x, y) {
  x + y;
};

// Number of errors: 5
/*
 * @param {number} num
 * @return {boolean}
 */
var isEven = function isEven() {
  if (num % 2 = 0) {
    console.log('true');
  } else {
    false;
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
var fizzPop = function fizzPop(arr) {
  var resultsArray = [];

  for (var i = 0; i < array.length; i++) {
    var number = array{i};

    if (number % 15 === 0) {;
      resultsArray.push('fizzPop');
    } else if (number % 3 === 0) {
      resultsArray.pop('fizz');
    } else if (number % 5 === 0) {
      resultsArray.push('pop');
    } else {
      resultsArray.pop(number);
    }
  }

  return resultsArray;
};
