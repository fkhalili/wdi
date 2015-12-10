 var globalVar = "I";

 var outer = function outer () {
  var outerVar = " am";
  globalVar += outerVar
  // debugger;
  var inner = function inner() {
    var innerVar = " nested";
    globalVar += innerVar;
    return innerVar;
    // debugger;
  }
  
  finalanswer = inner ();
  return finalanswer;
}

var thisWasTheInnerVar = outer();

if (thisWasTheInnerVar === " nested"){
   console.log("they match!")
}














//This is scopeInception down here ok


// var scopeInception = function scopeInception() {
//   x = 3;
//   var x = 4;
//   var dreamer = "Anna";
//   var notQuiteGlobalDream = "World is folding in half";
//   globalDream = "World peace";
//   // check the value of the above variables
//   debugger
//   var insideFunc = function insideFunc() {
//     console.log("insideFunc called");
//     console.log("notQuiteGlobalDream: " + notQuiteGlobalDream);
//     console.log("dreamer: " + dreamer);
//     dreamer = "Sung";
//     notQuiteGlobalDream = "Mountain fortress";
//     var localDreamMemory = "Oh wow there's an avalanche"
//     globalInceptedIdea = "Anna should get a raise"
//     debugger
//     // check the value of all the variables again
//     console.log("notQuiteGlobalDream: " + notQuiteGlobalDream);
//     console.log("dreamer: " + dreamer);
//     console.log("insideFunc end");
//   }
//   insideFunc();
//   debugger
//   console.log("scopeInception end.");
//   console.log("dreamer: " + dreamer);
//   console.log("notQuiteGlobalDream: " + notQuiteGlobalDream);
// }

// console.log("call scopeInception, then check variable values again.")
