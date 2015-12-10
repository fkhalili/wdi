// console.log('Are we there yet?!');
// console.log('Are we there yet?!');

// for (var i = 1; i < 101; i++) {
//   console.log(i, ':', 'Are we there yet?!');
// }

// var i = 1;
// while (i < 101) {
//   console.log(i, ':', 'Are we there yet?!');
//   i++;
// }

// Creating a range
var range = []; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 1; i <= 10; i++) {
  console.log('i:', i);
  range.push(i);
  // range[i - 1] = i;
  console.log('range:', range);
}

// Iterate over an array.
var candy = ["lollipop", "chocolate", "peppermint",
"life saver"];

for (var i = 0; i < candy.length; i++) {
  console.log(candy[i]);
}

// Plucking properties from an Array of Objects
var pumpkinsRecords = [
    {title: "Gish", year: 1991, albumsSold: 534000},
    {title: "Siamese Dream", year: 1993, albumsSold: 1000037},
    {title: "Mellon Collie and the Infinite Sadness", year: 1995, albumsSold: 1000500},
    {title: "Adore", year: 1998, albumsSold: 300100},
    {title: "Machina", year: 2000, albumsSold: 200000},
    {title: "Machina II", year: 2000, albumsSold: 50000},
    {title: "Zietgiest", year: 2007, albumsSold: 250}
];

// ["Gish", Siamese Dream", "Mellon Collie and the Infinite Sadness", "Adore", "Machina", "Machina II", "Zietgiest"]

// iterate through the array
// for each item in the array push the property, e.g. title,
// into a new array

var pluck = function pluck(array, propertyName) {
  var resultArray = [];

  for (var i = 0; i < array.length; i++) {
    resultArray.push(array[i][propertyName]);
  }

  return resultArray;
};

var titles = pluck(pumpkinsRecords, 'title') // ["Gish", Siamese Dream", "Mellon Collie and the Infinite Sadness", "Adore", "Machina", "Machina II", "Zietgiest"]
console.log(titles);

var hogwartsStudents = [{name: 'harry'}, {name: 'hermione'}];
var names = pluck(hogwartsStudents, 'name');
console.log(names); // ['harry', 'hermione']

// Translating French into English
var originalString = "le lapin est mignon";
var frenchToEnglishDictionary = { lapin: 'rabbit',
                                  mignon: 'cute',
                                  est: 'is',
                                  le: 'the'
                                };
var translatedArrayOfStrings = [];
var originalArrayOfStrings = "le lapin est mignon".split(' ');

console.log('originalArrayOfStrings:', originalArrayOfStrings);

for (var i =0; i < originalArrayOfStrings.length; i++) {
  translatedArrayOfStrings.push(frenchToEnglishDictionary[originalArrayOfStrings[i]]);
}

console.log('translatedArrayOfStrings:', translatedArrayOfStrings);

var translatedString = translatedArrayOfStrings.join(' ');
console.log('translatedString:', translatedString);
