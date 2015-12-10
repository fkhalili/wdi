var data = require('./debugging_exercise_2_data.js');

for (var i = 0; i < data.length; i++) {
  var number = data[i];

  if (number % 15 === 0) {
    console.log('fizzbuzz');
  } else if (number % 3 === 0) {
    console.log('fizz');
  } else if (number % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(number)
  }
}
