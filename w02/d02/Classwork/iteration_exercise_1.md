## Exercises


1. Evens and Odds
Write a loop that will iterate over the numbers from 1 to 20, check if the number is even or odd, then print, for example, "2 is even".

2. Clerical Error
You have been tasked with keeping track of a bunch of account balances. Due to a clerical error, the balances were all 14 more than they should have been?
Write a program to fix the error.
```js
var sampleBalances  = [100, 25, 3000, 45, 36];
```
3. Range
Write a function **range(firstInt, lastInt)** that creates a range in the form of an array, e.g. ```[1, 2, 3, 4, 5, 6]```
```range(1, 9)``` should return ```[1, 2, 3, 4, 5, 6, 7, 8, 9]```
```range(0, 3)``` should return ```[0, 1, 2, 3]```

4. Lengths
Write a function **lengths(arrayOfStrings)** that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
```javascript
var words = ["hello", "what", "is", "up", "dude"];
lengths(words); // should return [5, 4, 2, 2, 4]
```
5. Grid
Programmatically recreate the sampleArrayOfArrays. (Do not use a function.)
```javascript
var sampleArrayOfArrays = [[1, 2, 3],
                           [4, 5, 6],
                           [7, 8, 9]];
```
```sampleArrayOfArrays[0][0]``` returns ```1```.
```sampleArrayOfArrays[2][2]``` returns ```9```.

6. LeftToRightDiagonal
Write a function called **leftToRightDiagonal(2dArray)** that given a square 2D array, i.e. an array of arrays, returns a new array containing elements in the top left to bottom right diagonal in order.
```leftToRightDiagonal(sampleArrayOfArrays)``` should return
```javascript
[1, 5, 9]
```

7. RightToLeftDiagonal
Write a function called **RightToLeftDiagonal(2dArray)** that given a square 2D array, i.e. an array of arrays, returns a new array containing elements in the bottom left to top right diagonal in order.

8. createSquareGrid function
Write a function that creates a square array of arrays given any length.
```javascript
var createSquareGrid = function createSquareGrid(length) {
  // Fill me in, please.
};
```
Example: ```createSquareGrid(3)``` should return
```javascript
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
```
9. isPrime
Write a new function called **isPrime(number)** that takes in a number and returns true if it is a prime number and false if it is not. (1 by definition is not a prime number.)
**Bonus:** Write a new isPrime(number) function modeled after the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) algorithm using an array.

10. Write the following functions using loops:

* consoleLogEach(array)
    * is a function that logs each element of the given array
    ```javascript
    // Starter Code Example:
    var consoleLogEach = function consoleLogEach(array) {
      // Fill me in, please.
    };
    ```
* count(array, element)
    * is a function that returns the number of times the given element is contained in the array.
* pluck(arrayOfObjects, property)
    * is a function that takes in an array of similar objects and a property name and returns a new array contain only the value of the given property for each object in the original array.
    Given:
    ```javascript
    var pumpkinsRecords = [
      {title: "Gish", year: 1991, albumsSold: 534000},
      {title: "Siamese Dream", year: 1993, albumsSold: 1000037},
      {title: "Mellon Collie and the Infinite Sadness", year: 1995, albumsSold: 1000500},
      {title: "Adore", year: 1998, albumsSold: 300100},
      {title: "Machina", year: 2000, albumsSold: 200000},
      {title: "Machina II", year: 2000, albumsSold: 50000},
      {title: "Zietgiest", year: 2007, albumsSold: 250}
    ];
    ```
    ```pluck(pumplinsRecords, 'title')``` should return
    ```["Gish", Siamese Dream", "Mellon Collie and the Infinite Sadness", "Adore", "Machina", "Machina II", "Zietgiest"]```
* max(array)
    * is a function that returns the largest element in the given array
    ```var minMaxTestArray1 = [9, 10, 4, 3, 17, 13, 0, 2];```
    ```var minMaxTestArray2 = ['a', 'z', 'Z', 'c', 'e', 'E', 'f'];```
* min(array)
    * is a function that returns the smallest element in the given array
    ```var minMaxTestArray1 = [9, 10, 4, 3, 17, 13, 0, 2];```
    ```var minMaxTestArray2 = ['a', 'z', 'Z', 'c', 'e', 'E', 'f'];```
* indexOf(array, element)
    * is a function that returns the first index of a given element in the given array. Return -1 if the element is not in the array.
* lastIndexOf(array, element)
    * is a function that returns the last index of a given element in the given array. Return -1 if the element is not in the array.
* contains(array, element) a.k.a. includes
    * is a function that returns true if the element is in the array and false if it is not.
* flatten(array) **Silver Challenge**
    * is a function that returns an array that has one level of nesting removed
    ```flatten([1, 2, [3, 4, 5, 6], 7, 8, 9])``` should return
    ```[1, 2, 3, 4, 5, 6, 7, 8, 9]```
    Hint: Use the ```Array.isArray()``` method


##### GOLD CHALLENGE:

* Rewrite the previous functions so that they can handle an array-like object in addition to actual arrays.
    Hint: The following is an array-like object.
    ```javascript
    var arrayLikeTestObject = { '0': 'Now, this is a story all about how',
                            '1': 'My life got flipped-turned upside down',
                            '2': 'And I\'d like to take a minute',
                            '3': 'Just sit right there',
                            '4': 'I\'ll tell you how I became the prince of a town called Bel Air',
                            'length': 5
                          };
    ```

##### BONUS:
create a fibonacci(n) method using a loop that returns an array containing the [fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) up to the nth number in the sequence.

Example:
```fibonacci(0)``` returns ```[0]```
```fibonacci(1)``` returns ```[0, 1]```
```fibonacci(2)``` returns ```[0, 1, 1]```
```fibonacci(3)``` returns ```[0, 1, 1, 2]```


````
// var evensOdds = [];
// for (var i = 1; i < 21; i++) {
//     evensOdds.push(i);
//     if (i % 2 === 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("Odd");
//     }
//     console.log(i);
// }

// var sampleBalances  = [100, 25, 3000, 45, 36];
// var newBalances = [];
// for (var i = 0; i < sampleBalances.length; i++) {

//     var difference = sampleBalances[i] - 14;
//     newBalances.push(difference);
// }
// console.log(newBalances);

var rangeArray = [];
var range = function range(firstInt, lastInt) {
    for (var i = firstInt; i < lastInt + 1; i++){
        rangeArray.push(i);
    }
    console.log(rangeArray);
}
````
