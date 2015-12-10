var fibRecursive = function(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
};

console.log(fibRecursive(0)) // 0 // passing
console.log(fibRecursive(1)) // 1 // passing
console.log(fibRecursive(2)) // 1 // 
console.log(fibRecursive(3)) // 2 // 



// var fib = function fib(n) {
//   var fibSeq = [0, 1];
//   if (n > 1) {
//     for(var i = 2; i <= n; i++){
//       fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2])
//     }
//   }
//   return fibSeq[n];
// };

// console.log(fib(0)) // 0 // passing
// console.log(fib(1)) // 1 // passing
// console.log(fib(2)) // 1 // 
// console.log(fib(3)) // 2 // 

// fib(100); // 98
// fib(200); // 198
// fib(150); // 