console.log('ready to rock n\' roll');

var lines = [
"Ground Control to Major Tom", "Ground Control to Major Tom", "Take your protein pills",
"and put your helmet on", "Ground Control to Major Tom", "Commencing countdown", "engines on", "Check ignition",
"and may Gods love be with you", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One", "Liftoff",
"This is Ground Control to Major Tom", "Youve really made the grade", "And the papers want to know whose shirts you wear",
"now its time to leave the capsule", "if you dare", "This is Major Tom to Ground Control", "Im stepping through the door", "And Im floating",
"in a most peculiar way", "And the stars look very different today"," For here", "Am I sitting in a tin can", "Far above the world",
"Planet Earth is blue", "And there's nothing I can do","Though I'm past", "one hundred thousand miles", "I'm feeling very still",
"And I think my spaceship knows which way to go", "Tell my wife I love her very much", "she knows",
"Ground Control to Major Tom", "Your circuit's dead,", "there's something wrong", "Can you hear me, Major Tom?",
"Can you hear me, Major Tom?", "Can you hear me, Major Tom?", "Can you....", "Here am I floating", "round my tin can",
"Far above the Moon", "Planet Earth is blue", "And there's nothing I can do."
]

var i = 0;
var repeatBehavior =  function repeatBehavior () {
	if (i < lines.length) {
		var lyric = $("<p>").text(lines[i]);
		$("body").append(lyric);
		// console.log(lines[i]);
		i++;
	}
	else {
		clearInterval(intervalId);
	}

}
var intervalId = setInterval(repeatBehavior, 2000);