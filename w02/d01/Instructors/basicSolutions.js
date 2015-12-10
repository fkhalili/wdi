var knighter = function knighter(name){
  var newName = "sir " + name;
  console.log(newName);
  return newName;
}


var royalizer = function royalizer(gender, name){
  if(gender === "male"){
    console.log("blaagagh")
    return "His excellency " + name;
  }else if(gender === "female"){
    return "Her majesty " + name; 
  }else{
    return "that is not a socially accepted gender at least not yet";
  }
}

var adder = function adder(numberOne, numberTwo){
  var sum = parseInt(numberOne) + parseInt(numberTwo) ;
  console.log(sum);
  return sum;
}