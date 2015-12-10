var Penguinapp = Penguinapp || { Models: {}, Collections: {}, Views: {} };

Penguinapp.Collections.PenguinCollection = Backbone.Collection.extend({
	model: Penguinapp.Models.Penguin,
	url: 'api/penguins'
});