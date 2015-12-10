var fib = function fib(num) {
  var seq = [0, 1];
  if (num > 1) {
    for (var i = 2; num > seq.length - 1; i++) {
      seq.push(seq[i - 2] + seq[i - 1]);
    };
  }

  return seq[num];
};

var fibRecursive = function fibRecursive(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibRecursive(num - 2) + fibRecursive(num - 1);
  }
};

var fibFixedMemory = function fibFixedMemory(num) {
  var seq =[0, 1];
  if (num < seq.length) return seq[num];

  for (var i = 1; i < num; i++) {
    seq = [seq[1], seq[0] + seq[1]];
  };
  return seq[1];
};

var timer = function timer() {
  for(var i=0; i<50; i++){
    var start = new Date();
    var result = fibRecursive(i);
    var end = new Date();
    time = end - start;
    console.log("n:", i, "time:",time, "millisecs");
  }
};

