var square = function square(callback) {
	return callback() * callback();
};

var giveNum = function giveNum(){
	return 5;
};


console.log(square(giveNum));

//anonymous callback

square(function() {
	return 10;
})
console.log(square(function() {
	return 10;
}))