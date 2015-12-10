console.log("bzzzzzz");

// ----------- Defining functions ----------

// Function to render and append beehive info
var renderHive = function renderHive(hive) {
  var $beehiveList = $('#beehives')
  // Grabbing my template from my HTML
  var beeCard = $("#bee-card-template").text();
  // using underscorejs templating: http://underscorejs.org/#template
  var template = _.template(beeCard);
  var $rendered = $(template(hive));
  
  // Grab references to the update & delete buttons on this card
  var $deleteButton = $rendered.find(".delete");
  var $updateButton = $rendered.find(".update");

  // Add event listeners to our buttons
  $deleteButton.on('click', function(e) {
    // AJAX call to delete hive
    $.ajax({
      method: "DELETE",
      url: "/hives/" + hive.id
    }).done(function(data) {
      // Remove element from the DOM
      $rendered.remove();
    })
  });

  $updateButton.on('click', function(e) {
    // Grab values from current card and save to an object
    var hiveUpdate = {};
    
    hiveUpdate.location = $rendered.find('.location').text();
    hiveUpdate.notes = $rendered.find('.notes').text();
    hiveUpdate.num_bees = $rendered.find('.num-bees').text();

    // make update call
    $.ajax({
      method: "PUT",
      url: "/hives/" + hive.id,
      data: hiveUpdate
    }).done(function(data) {
      // let user know you've saved
      alert("I DID IT")
    });
  });
  
  $beehiveList.append($rendered);
}

var addHive = function addHive(e) {
  // Grab values from inputs and save to an object
  var newHive = {};
  newHive.location = $("#new-location").val();
  newHive.notes = $("#new-notes").val();
  newHive.num_bees = $("#new-num-bees").val();

  // Send that info to my server
  $.ajax({
    method: "POST",
    url: "/hives",
    data: newHive
  }).done(function(newHive) {
    // Now that it's saved, render it on the DOM
    renderHive(newHive);
    // Also clear those inputs
    $("#new-location").val("");
    $("#new-notes").val("");
    $("#new-num-bees").val("");
  });

}



// -------- Once the DOM be loaded... ---------

$(function() {
  // Add an event listener to the "Add Hive" button
  $("#new-hive").on("click", addHive)
  
  // Get all hive info via AJAX
  $.ajax({
    method: "GET",
    url: "/hives"
  }).done(function(data) {
    // For each hive, make a card & append it to the DOM
    data.forEach(renderHive); 
  }); // end get hives .done callback function


});