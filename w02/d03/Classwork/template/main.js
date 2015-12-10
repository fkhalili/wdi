console.log("yo");

var students = [
  "Calvin 'Sprite' Yeung",
  "Thompson",
  "Aditi",
  "Ben 'grants' Aplin",
  "David",
  "Steven",
  "Matt",
  "Justin",
  "Felix the Cat",
  "David N.",
  "Ethan 'Brunch' Schiavi",
  "Exalted Emperor Augustus IV",
  "Raina",
  "Jacki aka Jacqui aka JAKY aka jackie aka dzjaki",
  "Phil the Temporary Vegan",
  "Riaz 'money' Bacchus",
  "Anthony",
  "Heather 'css' Kemp",
  "Xi 'prototype' Zhang",
  "Swap 'money' Kasliwal",
  "Dan 'James Dolan' Khalili",
  "Peter 'olympiad' Petrov",
  "Paresh",
  "Megan",
  "Ashley"
];

var headline = document.querySelector("#headline");
headline.className = "shine";
headline.className = "big";
headline.className = "small";

var sungLi = document.querySelectorAll("li.instructor")[0];
sungLi.style.color = "green";
sungLi.className = "animated bounce infinite";

var anna = document.querySelectorAll("li.instructor")[0];
anna.style.color = "pink";
anna.className = "animated pulse infinite";

var paul = document.querySelectorAll("li.instructor")[1];
paul.style.color = "pink";
paul.style["font-style"] = "helvetica";
paul.className = "animated shake infinite";

var fritz =document.querySelectorAll("li.instructor")[0];
fritz.style.color = "yellow";
fritz.style["font-size"] = "40px";
fritz.className = "animated swing infinite";

var par2 = document.querySelectorAll("p")[1];
par2.className = "shine";

var par4 = document.querySelectorAll("p")[2];
par4.style.color = "blue";
par4.style["font-size"] = "25px";





var studentsParent = document.querySelector("#student-list");
var list = document.createElement("li");

for (var i = 0; i < students.length; i++) {
  var newList = document.createElement("li");
  newList.textContent = (students[i]);
  studentsParent.appendChild(newList);
}
