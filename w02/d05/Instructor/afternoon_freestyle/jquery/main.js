console.log("linked");

$("#say-hello").on("click", function(event){
  $("<h1 class='green'> Hello </h1>").appendTo($("body"));
})

var bye = document.querySelector("#say-goodbye");

bye.addEventListener("click", function(event){
  var newHeader = document.createElement("h1");
  newHeader.textContent = "GOODBYE EVERYONE";
  document.body.appendChild(newHeader);
})
