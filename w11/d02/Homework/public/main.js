console.log("linked")

var Character = Backbone.Model.extend({
	urlRoot: "/characters",

	deleteCharacter: function(){
		this.destroy();
	}
});


var CharacterView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "destroy", this.remove);

	},

	model: Character,

	events: {
		"click .delete": function(event) {
			this.model.deleteCharacter();
		}
	},

	tagName: "li",

	template: _.template($("#list-template").text()),

	render: function(){
		console.log("rendered");
		var rendered = this.template(this.model.attributes);
		this.$el.html(rendered);
		$(".character-list").append(this.$el);
	}
})



$("#addNewCharacter").click(function() {
	console.log("new")
	var newCharacter = new Character({name: $("#newCharacterName").val(), weightClass: $("#newCharacterWeight").val(), imageUrl: $("#newCharacterImageUrl").val(), drivingMusic: $("#newCharacterImageDrivingMusic").val()});
	newCharacter.save();
	var newView = new CharacterView({model:newCharacter});
})


var firstCharacter = new Character({id: 1});

firstCharacter.fetch();

var firstCharacterView = new CharacterView({model: firstCharacter});