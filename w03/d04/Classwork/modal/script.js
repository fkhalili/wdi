console.log("Linked!");




var modalButton = $("#modalButton");

var modal = $("#modal");


modalButton.on("click", function() {
	
	modal.toggle();


});


var exitButton = $("#exit");

exitButton.on("click", function() {
	modal.toggle();
})