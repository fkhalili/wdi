console.log('linked')

$(function() {
  // Select all li's, iterate through & add event listener to each

  // BUT WAIT!!!

  // We can use....................
  // EVENT DELEGATION!!!!!!

  $('#some-list').on('click', function(event) {
    // This is the TARGET of the event!!!
    console.log('Event target:')
    console.log(event.target)
    console.log("Current target:")
    console.log(event.currentTarget)
  });
})