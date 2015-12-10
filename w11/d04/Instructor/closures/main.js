console.log("breee")


var buttons = document.querySelectorAll("button");

//iterate through list of buttons, attach a click event to each that logs the value of i at that time 

//if i click the first button, it should be 0, second should be 1, third should be 2

//use a for loop

//addEventListener

// for (var i = 0; i< buttons.length; i++){
//   buttons[i].addEventListener("click", function(){
//     console.log(i);
//   })
// }

function helper(number){
  buttons[number].addEventListener("click", function(){
    console.log(number);
  })
}


for (var i = 0; i< buttons.length; i++){
  helper(i);
}