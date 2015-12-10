Penguinapp.Models.Penguin = Backbone.Model.extend({
	initialize: function(){
		console.log("A penguin has been birthed	(bloop)");
	}
});

// How to call this variable within the Penguinapp name space
// var penguin = new Penguinapp.Models.Penguin();