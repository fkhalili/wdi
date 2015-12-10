// Days of the week
// var string = process.argv[2];

// if (string === 'Saturday' || string === 'Sunday') {
//   console.log('It\'s the weekend!');
// } else if (string === 'Monday') {
//   console.log('It\'s a weekday :(');
// }


// Reverse a String
var inputWord = process.argv[2];
var lastIndex = inputWord.length - 1;
var currentIndex = lastIndex;
var reverseString = '';

while (currentIndex >= 0) {
  reverseString = reverseString + inputWord[currentIndex];
  // currentIndex = currentIndex - 1;
  // currentIndex -= 1;
  currentIndex--;
}

console.log(reverseString);



// For Loops
// for ( SETUP; CONDITION; ENDOFITERATION) {

// }

// for (var i = 0; i < 100;  i++) {

// }






























