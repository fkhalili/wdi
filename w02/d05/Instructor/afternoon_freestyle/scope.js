var everywhere = "I AM EVERYWHERE"


function lol (){
  var functionVariable = "I am only visible here"
  console.log("but weirdly I can see outside myself and log that global variable whichis annoying and says " + everywhere);
}

lol();

// console.log("I am gonna try and access the functionVariable and error out " + functionVariable)