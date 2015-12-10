/*
 * Simple Data Types
 * * Strings, e.g. 'Waffles'
 * * Numbers, e.g. 1
 * * Booleans, e.g. true
 * * Not a Number (NaN), e.g. 1/0
 * * Undefined, e.g. undefined
 *
 * Instructions:
 * Run 'npm test' in your terminal while in the directory that this file lives.
 * Replace undefined on each line with a value of the
 * appropriate data type in order to make the tests pass.
 * Run 'npm test' in your terminal again after change.
 * Don't forget to save your file.
 *
 */

var myFirstName      = "Daniel";
var myLastName       = "Khalili";
var myAgeInYears     = 21;
var myHeightInInches = 72;
var iAmAHumanBeing   = true;
var iAmAStudent      = true;

// Concatenate your first and last name using the + operator and assign it to the variable called fullName
var fullName;


/*
 * "Beware the Jabberwock, my son!
 * The jaws that bite, the claws that catch!
 * Beware the Jubjub bird, and shun
 * The frumious Bandersnatch!"
 *
 * Instructions:
 *
 * Oh no, gremlins have ripped up a beautiful poem!
 * Put it back together by concatenate the following text pieces
 * and setting it to the concatenatedPoem variable.
 * Don't forget spaces and new lines.
 *
 * Hint: You may need to use some variables more than once.
 */
var textA = 'that';
var textB = 'the';
var textC = 'The';
var textD = 'son!';
var textE = 'Bandersnatch!';
var textF = 'Jubjub';
var textG = 'claws that catch!';
var textH = 'shun';
var textI = 'jaws';
var textJ = 'bird, and';
var textK = 'Beware the';
var textL = 'Jabberwock, my';
var textM = 'bite';
var textN = 'frumious';
var singleSpace = ' ';

var concatenatedPoem = textk + singleSpace + textl + singleSpace + textd + "\n" + 
textc + singleSpace + texti + singleSpace + texta + singleSpace + textm + "," + singleSpace + textb + singleSpace + textg + "\n" +
textk + singleSpace + textf + singleSpace + textj + singleSpace + texth + "\n" + 
textc + singleSpace + textn + singleSpace + texte;



var one          = 1;
var two          = 2;
var ten          = 10;
var threeSixFive = 365;

/*
 * Calculate the number of seconds in a year using the variables above.
 * You will need to use some of them multiple times.
 * Ex. var six = ( one + two ) * two
 */
var secondsInAYear = threeSixFive * (((two + one) * 2) * ten) * (((two + one) * 2) * ten) * ((ten + two) * two);

// Calculate the number of milliseconds in a year
var millisecondsInAYear = secondsInAYear * (ten * ten * ten);




































/*
 * Ignore this last part.
 * You will learn about it later.
 * For now, just know that it is
 * necessary to make the tests work
 * properly.
 */
module.exports = {
  myFirstName:    myFirstName,
  myLastName:     myLastName,
  myAgeInYears:   myAgeInYears,
  myHeightInInches: myHeightInInches,
  iAmAHumanBeing: iAmAHumanBeing,
  iAmAStudent:    iAmAStudent,
  fullName:       fullName,
  concatenatedPoem: concatenatedPoem,
  secondsInAYear: secondsInAYear,
  millisecondsInAYear: millisecondsInAYear

};

// Remember that new lines at the end of files are important.
