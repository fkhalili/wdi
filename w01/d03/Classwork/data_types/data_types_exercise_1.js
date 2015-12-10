/*
 * Simple Data Types
 * * Strings, e.g. 'Waffles'
 * * Numbers, e.g. 1
 * * Booleans, e.g. true
 * * Not a Number (NaN), e.g. 1/'strings'
 * * Undefined, e.g. undefined
 * * Infinity
 *
 * Instructions:
 * 1. Replace each ... so that the comparison will return true.
 * 2. Once you have filled in all of your answers,
 * run this file using the following command in bash:
 *   node data_types_exercise_two.js
 * 3. Make sure you're in the correctly directory using the pwd command.
 * 4. If you only see trues printed to the console, then
 * you've correctly completed the exercise.
 *
 * 5. If you see an error message, that is because you have not
 * replaced all of the ... yet. Javascript has no idea what ... is.
 */

console.log('1', typeof('cupcake') === 'string');
console.log('2', typeof(123456789) === 'number');
console.log('3', typeof(123 + 231) === 'number');
console.log('4', typeof('1234567') === 'string');
console.log('5', typeof(true)      === 'boolean');
console.log('6', typeof(false)     === 'boolean');
console.log('7', typeof(undefined) === 'undefined');
console.log('8', typeof(1/0)       === 'number');
console.log('9', typeof(1 / 'waffles')     === 'number');

/* For the following, replace ...
 * with the value that you believe the left-hand side
 * will evaluate to.
 */
console.log('10', 4 + 123    === 127);
console.log('11', 4 + '123'  === '11' + 4 + '123');
console.log('12', 4 - "1"    === ...);
console.log('13', '123' + 4  === ...);
console.log('14', 1 / 0      === ...);
console.log('15', 1 / 'zero' === ...);

/* For the following, replace ...
 * with the boolean (true or false) that you
 * believe the left-hand side will evaluate to.
 */

var zero = 0;
var one  = 1;
var emptyString = '';
var cupcakes = 'cupcakes!';
var bananas  = 'bananas';

console.log('16', true === ...);
console.log('17', false === ...);
console.log('18', !true === ...);
console.log('19', !false === ...);
console.log('20', !!true === ...);
console.log('21', !!false === ...);
console.log('22', !!zero === ...);
console.log('23', !!emptyString === ...);
console.log('24', !!!bananas === ...);
console.log('25', !zero === ...);
console.log('26', !!undefined === ...);
console.log('27', !!123 === ...);
console.log('28', !cupcakes === ...);
console.log('29', !!bananas === ...);
console.log('30', (!!emptyString || !!zero) === ...);
console.log('31', (!!'' && !!0) === ...);
console.log('32', (!!'waffles' || !!0) === ...);
console.log('33', (!!'waffles' && !!0) === ...);
console.log('34', (!!123 || !!0) === ...);
console.log('35', (!!123 && !!0) === ...);
console.log('36', (!!emptyString || !!0 || false) === ...);
console.log('37', (!!emptyString || !!0 || !!'nothing') === ...);
console.log('38', (!!emptyString || !!zero || !!cupcakes) === ...);
console.log('39', (!!emptyString && !!zero && !!cupcakes) === ...);
console.log('40', (!emptyString && !zero) === ...);

console.log('41', (123 > 12) === ...);
console.log('42', (123 < 12) === ...);
console.log('43', ('a' > 'b') === ...);
console.log('44', ('a' < 'bananas') === ...);
console.log('45', ('A' < 'a') === ...);
console.log('46', ('cupcakes' <= 'bananas') === ...);

/* For the following, replace ...
 * with the number that you
 * believe the left-hand side variable will evaluate to
 * at that time.
 */
var counter = 100;
counter + 1;
counter = counter + 1;
console.log('47', counter === ...);
counter++;
counter--;
console.log('48', counter === ...);
counter += 3;
console.log('49' counter === ...);
console.log('50', counter++ === ...);
counter - 10;
counter /= 5;
console.log('51', counter === ...);
counter = counter + 4;
console.log('52', counter === ...);
counter + 5;
counter += 5;
console.log('53', counter === ...);
console.log('54', counter-- === ...);
console.log('55', counter === ...);
console.log('56', --counter === ...);
console.log('57', counter === ...);
counter = counter - 10;
console.log('58', counter === ...);
counter += 12;
console.log('59', counter === ...);
counter -= 13;
console.log('60', counter === ...);


// Remember that new lines at the end of files are important.
