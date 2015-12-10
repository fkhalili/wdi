/*
 * FILE IO
 *
 * Learning Objectives
 *   Students will be able to:
 *   1. Understand persistence and its time requirements.
 *   2. Understand the difference between sync (blocking) and async (non-blocking).
 *   3. Understand how to require built in node modules like fs.
 *   4. Read data from external files in JavaScript.
 *   5. Write data to external files in JavaScript.
 *
 */

// Exercise 1 Solution
// var fs = require('fs');
// var filename = process.argv[2];
// var text = process.argv[3];

// fs.writeFile(filename, text, function(error) {
//   if (error) {
//     console.log(error);
//   }
// });

// Exercise 3
// fs.appendFile()


// Get the fs module and set it to a variable:
// var fs = require('fs');

// var returnedBuffer = fs.readFileSync('sea.txt');

// fs.readFile('sea___________.txt', function(error, buffer) {
//   if (error) {
//     console.log(error);
//   } else {
//       var text = buffer.toString();

//       fs.writeFile('sea_copy_copy.txt', text, function(error) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('the file is finished writing');
//         }
//       });
//   }
// });
