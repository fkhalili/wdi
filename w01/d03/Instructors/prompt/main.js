console.log("main.js linked!");

// var answer = prompt("what is your name?")
// console.log(answer)
var guessed = false;

while(guessed === false){
  var answer = prompt("guess a number between 1 and 10");
  answer = parseInt(answer);
  if(answer === 9){
    alert("nice! You guessed it!");
    guessed = true;
  }
}