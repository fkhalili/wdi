var numArray = [];

var nthNum = function nthNum(num){
    if (numArray[num]) {
      return numArray[num];
    }

    for (var i = numArray.length * 2; i < num * 2 + 1; i++){
        if (i % 2 === 0){
            numArray.push(i);
        }
    }

    return numArray[num];
}

console.log(nthNum(10) === 20);
console.log(nthNum(44) === 88);


var someEven = function someEven(num){
    return num * 2;
};