var array = [];



var create = function create(name){
	var object = {
		name : name
	}
	array.push(object);
};

var update = function update(name, info){
	array.forEach(function(element) {
		if (element.name === name) {
			element.info = info
		}
	})

};
var delete = function delete(index){
	array.slice(index);
};
var read = function read(name) {
	array.forEach(function(element) {
		if (element.name === name) {
			console.log(element);
		}
	})
}

var command = process.argv[2];
var second = process.argv[3];
var third = process.argv[4];

if (command === "create") {
	create(second);
}
else if (command === "update") {
	update(second, third);
}
else if (command === "delete") {
	second = +second;
	delete(second);
}
else if (command === "read") {
	read(second);
}