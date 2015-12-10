var Penguinapp = Penguinapp || { Models: {}, Collections: {}, Views: {} };

Penguinapp.Models.Penguin = Backbone.Model.extend({
	initialize: function(){
		console.log("A penguin has been birthed	");
	},
	defaults:{
		name: ''
	}
});

// How to call this variable within the Penguinapp name space
// var penguin = new Penguinapp.Models.Penguin();