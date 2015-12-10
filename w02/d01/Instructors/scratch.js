
var myName = function myName(){
  console.log("andy");
  return "andy";
}
var dynamicNamer = function dynamicNamer(firstName, lastName, age){
  console.log(firstName + lastName + age);
  console.log(arguments);
  return firstName + " " + lastName + age;
}
