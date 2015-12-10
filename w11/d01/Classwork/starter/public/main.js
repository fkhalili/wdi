console.log("main linked");


//post model constructor. Each model instance will have these methods and data available to it.

var Post = Backbone.Model.extend({
	urlRoot: "/posts"
})


//post view constructor. Each view instance will have these methods and data available to it.

var PostView = Backbone.View.extend({
	model: Post,
	render: function() {
		console.log("rendered")
		
	}

})


//instances of model and view objects

var firstPost = new Post({id: 1});
firstPost.fetch();

var firstPostView = new PostView({model: firstPost});