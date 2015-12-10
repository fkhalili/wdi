console.log("main linked!");


var makeGreen = function makeGreen(){
  //grab a reference to the first div
  var myDiv = document.querySelector("div");
  //add the class of green to it!
  myDiv.setAttribute("class", "green");

  var x = document.querySelector("div").setAttribute("class", "green");
  console.log(x);
}


var makeBounce = function makeBounce(event){
  console.log(event);
  //grab div
  var myDiv = document.querySelector("div");
  //give a class of 'animated infinite bounce'
  myDiv.setAttribute("class", "animated bounce infinite");
}


var greenButton = document.querySelector("#make-green");
var bounceButton = document.querySelector("#make-bounce");
greenButton.addEventListener("click",makeGreen);
bounceButton.addEventListener("click", makeBounce);

var secondDiv = document.querySelectorAll("div")[1];

secondDiv.addEventListener("click",function(event){
  console.log(event.target)
  secondDiv.setAttribute("class", "green");
})



var submitThought = document.querySelector("#submit");

submitThought.addEventListener("click", function(event){
  console.log("new thought event fired!");
  var currentInput = document.querySelector("#main-input").value;
  var newThought = document.createElement("h1");
  newThought.textContent = currentInput;
  document.body.appendChild(newThought);
  document.querySelector("#main-input").value = "";
})


//make a button 'bounce all' that bounces ALL the divs when it is clicked
// use a for loop to do this


var bounceAll = document.querySelector("#bounce-all");
bounceAll.addEventListener("click", function(event){
  var allDiv = document.querySelectorAll("div");
  for (var i = 0; i < allDiv.length; i++){
    var div = allDiv[i];
    div.setAttribute("class", "animated infinite bounce");
  }
})





var submitThought = document.querySelector("#submit");

submitThought.addEventListener("click", function(event){
  console.log("fired our color box event thing!");
  var currentInput = document.querySelector("#main-input").value;
  var div = document.querySelector("div");
  div.style["background-color"] = currentInput;
});













