/*
 * Cruise Control
 * 
 * Define the Question and Game constructor functions properly.
 * Create question objects using the given data and constructor function.
 * Create a game object using the Game constructor function.
 *
 *
 * In the object-oriented world, there are nouns (objects) 
 * that have adjectives (properties) and verbs (methods).
 * There is no data and there are no functions.
 * In other words, remember that in a Object-oriented style,
 * methods on objects should be used in lieu of self-contained functions whenever possible.
 * The same applies to object properties which should be used to access data.
 *
 * MVP:
 * The user should see a a board of question cards.
 * The user should see a different question on each card.
 * The user should be able to input their answer for each card.
 * The user should be rewarded with a matching image of Tom cruise,
 * if they answer correctly.
 * The user should be notified if they answer incorrectly.
 * 
 * Bonuses:
 * The user should have a 60 second time limit.
 * The user should see an opening screen that prompts them to click to begin.
 * The user should see a picture of a sad Tom Cruise if they lose.
 * The user should see a beautifully styled game.
 * Use the animate.css library to add animations to the game.
 */


var questions = [
	"What movie was Tom Cruise a pilot in?",
	"What movie was Tom Cruise a Race Car Drive in?",
	"What movie was Tom Cruise a Vampire in?",
	"What movie was Tom Cruise a Samurai in?",
	"What movie was Tom Cruise a Bartender in?",
	"What Tom Cruise movie is the line 'you can't handle the truth'",
	"What movie did Tom Cruise play a high school football player?",
	"What movie did Tom Cruise play a Sports Agent?",
	"What movie did Tom Cruise play a Greaser?"
];
var answers   = [
	"Top Gun",
	"Days of Thunder",
	"Interview With the Vampire",
	"The Last Samurai",
	"Cocktail",
	"A Few Good Men",
	"Risky Business",
	"Jerry Macguire",
	"The Outsiders"
];
var imgUrls   = [
	"http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/aww/2015/07/03/1435896771258_TOMCRUISETOPGUN1980S.jpg",
	"https://cdn3.thedissolve.com/features/381/fullwidth.e6ae7694.jpg",
	"http://filmfestivalflix.com/wp-content/uploads/2013/08/tclestat.jpg",
	"http://spinoff.comicbookresources.com/wp-content/uploads/2014/11/tom-cruise-the-last-samurai-.jpg",
	"http://www2.pictures.zimbio.com/mp/aKSAGHfATQ_x.jpg",
	"https://s-media-cache-ak0.pinimg.com/736x/e9/b5/63/e9b563832c24b28901627b807d605c5d.jpg",
	"http://www.heavyeggs.com/uploads/files/2010/October/15/a95/866/99a57b4b8d4692b9e2563c18328b0120eb/1287168242t-risky-business_l.jpg",
	"http://www.film.com/wp-content/uploads/2012/06/19-jerry-maguire.jpg",
	"http://data3.whicdn.com/images/47853617/thumb.png"
];



//create question objects with arguements and keywords : questions, answers and images
var Question = function Question(question, answer, imgUrl){
	this.question = question;
	this.answer = answer;
	this.img = imgUrl
};	


//initiate 9 variables with a new Question with questions,answers,images[1-9] as arguements
var question1 = new Question(questions[0], answers[0], imgUrls[0]);
var question2 = new Question(questions[1], answers[1], imgUrls[1]);
var question3 = new Question(questions[2], answers[2], imgUrls[2]);
var question4 = new Question(questions[3], answers[3], imgUrls[3]);
var question5 = new Question(questions[4], answers[4], imgUrls[4]);
var question6 = new Question(questions[5], answers[5], imgUrls[5]);
var question7 = new Question(questions[6], answers[6], imgUrls[6]);
var question8 = new Question(questions[7], answers[7], imgUrls[7]);
var question9 = new Question(questions[8], answers[8], imgUrls[8]);


/* The Game constructor expects an Array of Question objects
 * See below to see how it is used and make sure that game objects
 * have the required functionality. See the main prompt for more information.
 */


//create object of functions with render() as the function and arguements of questions
var Game = function Game(questions){

	//function to render the questions and append to screen
	this.render = function render(i){
		
			var $box = $("<div>").addClass("box");
			var $h3 = $("<h3>");
			$h3.text(questions[i].question);
			$box.append($h3);
			$("#frame").append($box);
			var $input = $("<input>")
			$input.attr("placeholder", "Answer");
			$box.append($input);
			var $button = $("<button>").text("submit");
			$box.append($button);
			var answer = questions[i].answer;
			var rightImage = questions[i].img;
			var wrongImage = "http://kisstheschoolbondgoodbye.com/wp-content/uploads/2014/05/wrong-logo.jpg"
			$button.click(function () {
				if ($input.val().toUpperCase() === answer.toUpperCase()){
					$box.empty();
					$box.css("background-image", "url(" + rightImage + ")");

				} 
				else {
					$box.empty();
					$box.css("background-image", "url(" + wrongImage + ")");
				}
				
			})


		}	


	
};

//declare tomQuestion with a array of objects: question1-9
var tomQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9];



//create a new game with array tomQuestions
var game = new Game(tomQuestions);


var count = 60;
var $output = $("<h1>").addClass("output");
	$(".container").append($output);

var countDown = function countDown() {

	$(".output").text(count--);
	
	if (count < 0) {
		
		clearInterval(timer);

		$(".box").empty();
		var timeImage = "https://thefailedcritic.files.wordpress.com/2013/05/tom-cruise-jerry-maguire1.jpg"
		$(".box").css("background-image", "url(" + timeImage + ")")


	}
}

//obtain startbutton at id code #startButton and append 

var $startButton = $("#startButton");

//start button
var timer;
$startButton.click(function() {


	//render up the game
	
	$("#frame").empty();
	for (var i = 0; i < questions.length; i++) {
	game.render(i);
	}
	$(".box").css("background-image", "");
	count = 60;
	
	clearInterval(timer);
	timer = setInterval(countDown, 1500);

});




