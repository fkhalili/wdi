var names = ["andy", "sung", "anna", "heather", "ethan"];


for (var ethan = 0; ethan < names.length; ethan = ethan + 1){
  console.log("hi");
  console.log(ethan);
  var currentName = names[ethan];
  console.log(currentName);
  if ( currentName === "andy"){
    console.log(currentName.toUpperCase());
    names[0] = "SHARMG";
  }
}

var changed = names.map(function(thing){
  return thing.toUpperCase();
})

console.log(changed);