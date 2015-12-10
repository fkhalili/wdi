var legends = [
  {name: "John Lennon", alive: false, nationality: "British"},
  {name: "George Harrison", alive: false, nationality: "British"},
  {name: "Ringo Starr", alive: true, nationality: "British"},
  {name: "Paul McCartney", alive: true, nationality: "British"},
  {name: "Mick Jagger", alive: true, nationality: "British"},
  {name: "John Bonham", alive: false, nationality: "British"},
  {name: "Mama Cass", alive: false, nationality: "American"},
  {name: "Keith Richards", alive: true, nationality: "British"},
  {name: "Jimi Hendrix", alive: false, nationality: "American"},
  {name: "Elvis", alive: true, nationality: "American"},
  {name: "Freddie Mercury", alive: false, nationality: "British"},
  {name: "Robert Plant", alive: true, nationality: "British"}
];

//write a for loop that console logs everyone's name
//now it should only log american people's names

// for(var i = 0; i < legends.length; i++){

//   var currentLegend = legends[i];

//   if (currentLegend.nationality === "American"){
//     console.log(currentLegend.name);
//   }
// }


//forEach
// var shoutOut = function shoutOut(element){
//   console.log(element.name);
// };

// var iDunno = legends.forEach(shoutOut);

// legends.forEach(function(element){
//   console.log(element.name);
// });

//map

var names = legends.map(function(element){
  return element.name;
})

console.log(names);

//filter

var deadLegends = legends.filter(function(element){
  return element.alive === false;
});

console.log(deadLegends);






