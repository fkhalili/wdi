console.log("Linked to the Fellowship.");
var loadJavascript = function loadJavascript() {


// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];

var nazgulScreech = function nazgulScreech() {
  /* jQueryObjects don't have a play() method
   * so we need to call it on a vanilla domNodeElement.
   */
  $("#nazgul-screech").get(0).play();
};

// Fill in your code here.
var makeMiddleEarth = function makeMiddleEarth() {

  var middleEarthSection = $('<section id="middle-earth">');

  lands.forEach(function(element, index, array) {
    var land = $("<article id='" + element + '">');
    middleEarthSection.append(land);
  });

  var articles = $("article");
  var headers = [];
  

}


// Leave this alone.
$('#hobbit-theme').get(0).play();
// Think about why this function call is down here at the bottom.
setTimeout(makeMiddleEarth, 2000)

}

$(loadJavascript);
