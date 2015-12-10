
var callbackCaller = function callbackCaller(duck){
  duck();
}




var sayShmee = function sayShmee(){
  console.log("shmeeeeeee");
}


callbackCaller(function(){
  console.log("i am an anonymous function");
})



function(){
  console.log("will i work?");
}