var leaders = [
  {
    first_name: "George",
    last_name: "Bush"
  },
  {
    first_name: "Hillary",
    last_name: "Clinton"
  },
  {
    first_name: "Vladimir",
    last_name: "Putin"
  }
];


//1
// Use .map to iterate over the collection below, outputting an array of full names
// for the leaders. Do this with an anonymous function first, and then a named one.

var fullNames = leaders.map(nameConnecter);

function nameConnecter(element) {
  return element.first_name + " " + element.last_name;
}

console.log(fullNames);
//2
//Now use .map to return an array with all of the names in all caps.

var capsName = fullNames.map(capsAll);

function capsAll(element) {
  return element.toUpperCase(); 
}
console.log(capsName);
