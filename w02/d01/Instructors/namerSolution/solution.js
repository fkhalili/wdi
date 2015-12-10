var sayThanks = function sayThanks(){
  return "Thanks Very Much!";
}

var prompter = function prompter(nameType){
  var name = prompt("what is your " + nameType + " name?");
  fullNamer(nameType,name);
}

var fullNamer = function fullNamer(nameType, name){
  alert("Ok. Your "+ nameType+ " is " + name + "." + sayThanks());
}

prompter("dad's");

prompter("mom's");

prompter("sister's");

prompter("brother's");

prompter("horse's name");