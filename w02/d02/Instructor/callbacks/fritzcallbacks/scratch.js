//write a function that takes another function
//as an argument. test it. make sure your function
//actually calls the function you pass in


var funk = function funk(callback){
  callback();
};

var sayHello = function sayHello(){
  console.log("hi");
};

funk(sayHello);

funk(function(){
  console.log("oh shit this is gross");
})


funk(function(){console.log("this is gross");})

