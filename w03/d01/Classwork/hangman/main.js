
console.log("linked!");
var guessed = {
	correct : [],
	incorrect : []
};
var randomWords = ["cat", "hat", "bat", "pot", "orange", "blue", "pink", "house", "car", "fire", "dog", "man","woman","rat","cow","tiger","lion","bear", "monkey", "chimp", "bird", "lizard", "computer", "coding", "tower", "clothed", "fork", "quit", "ladies", "pants", "shirt", "skirt", "uncopyrightable", "unpredictably"];
var secretWord;
var emptyWord = [];
var counter = 7;


var restart = function restart(){
	guessed = {
		correct : [],
		incorrect : []
	};
	secretWord;
	emptyWord = [];
	counter = 7;
	$(".counter").attr("id", ("hangman" + counter));
	$('.counter').text("");
	$('.secretWord').text("");
	$('#guessedLetters').empty('li');
	$("h1").attr("id", "");
    assignWord();
} //end of restart().


var assignWord = function assignWord() {
//assign secretWord to random word in the array randomWords
secretWord = randomWords[Math.floor(Math.random() * randomWords.length)];

//split the word into an array
secretWord.split("");

} //end of assignWord().

var start = function start() {
//set text of div.secretWord to the string in secretWord
// $('.secretWord').text(secretWord);
//set text of div.counter to the integer counter
assignWord();
$(".counter").attr("id", ("hangman" + counter));
for (var i = 0; i < secretWord.length; i++) {
	emptyWord.push("_");
	var words = emptyWord.join(" ");
	$('.secretWord').text(words);

}
} //end of start()


$('.start').click(function(){
	restart();
	start();
});
	start();


$('.submit').click(function(){
    var $input = $('.letter').val();
    compare($input); 
    $('.letter').val(""); 
});



var compare = function compare(input) {
	if (input === "") {
		alert("Guess a letter");
	} else if (input.length > 1) {
		alert("Please input a single character");

	} else if (guessed.incorrect.indexOf(input) > -1 || guessed.correct.indexOf(input) > -1) {
		alert("letter has already been guessed")
	
	} else if (secretWord.indexOf(input) > -1){
		guessed.correct.push(input);
		var location = secretWord.indexOf(input);
		emptyWord[location] = input;
		var words = emptyWord.join(" ");
		$('.secretWord').text(words);
			if (secretWord.length === guessed.correct.length){
			alert("You have won");
			}

	} else if(secretWord.indexOf(input) === -1){
		guessed.incorrect.push(input);
		counter--;
		$(".counter").attr("id", ("hangman" + counter));
		var $li = $('<li>').text(input);
		$('#guessedLetters').append($li);
		if(counter === 0){
			alert("You are a loser");
			$('.secretWord').text(secretWord);
			$("h1").attr("id", "dead");
		}
	}
	
} //End of compare().


