var numbers = [1,2,3,4,5,6,7];

var names = ["andy", "matt", "steven", "calvin"];

var doubler = function doubler(num){
  console.log(num * 2);
}

doubler(2);

numbers.forEach(doubler);


names.forEach(function(element, index, array){
  console.log(element);
  console.log( element * 2);
})

