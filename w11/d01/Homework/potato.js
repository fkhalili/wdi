console.log('potatooo');

var Potato = Backbone.Model.extend({
	urlRoots: "/potatos"
});

var PotatoView = Backbone.View.extend({

	initialize: function(){
		this.listen(this.model, "change", this.render);

	},

	events: {
    "click #hat-select" : "hatClick"
  },

  hatClick: function(event){
    console.log("hat change");
    console.log(event.target)
  },

	model: Potato,

	template: _.template($("#potato-template").text()),

	render: function(){
		console.log("rendered");

		var renderedHTML = this.template(this.model.attributes);
		this.$el.html(renderedHTML);
		$(".potato").append(this.$el);
	}

})