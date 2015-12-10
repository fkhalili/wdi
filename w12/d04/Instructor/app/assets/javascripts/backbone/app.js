var Penguinapp = Penguinapp || { Models: {}, Collections: {}, Views: {} };

Penguinapp.initialize = function(){
	var penguinCollection = new Penguinapp.Collections.PenguinCollection();

	var listView = new Penguinapp.Views.PenguinListView({
		collection: penguinCollection,
		el: $('.penguin-list')
	});

	penguinCollection.fetch();

	$('.penguins').find('form').on('submit', function(e){
		e.preventDefault();
		var penguinName = $('input').val();
		$('input').val('')
		penguinCollection.create({name: penguinName})
	})
}



$(function(){
	Penguinapp.initialize();
});
