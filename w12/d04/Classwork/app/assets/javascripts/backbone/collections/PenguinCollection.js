Penguinapp.Collections.PenguinCollection = Backbone.Collection.extend({
	model: Penguinapp.Models.Penguin,
	url: 'api/penguins'
});