console.log("The monster mash - linked")

var myButton = $('#modal-button');
var datModal = $('#modal');
var closeButton = $('#close-modal')

myButton.on('click', function() {
  console.log("You clicked me oh lawd");
  datModal.toggle();
  console.log(datModal)
});

closeButton.on('click', function() {
  datModal.toggle();
})