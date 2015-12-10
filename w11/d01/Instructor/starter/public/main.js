console.log("main linked");


//post model constructor. Each model instance will have these methods and data available to it.

var Post = Backbone.Model.extend({
  urlRoot: "/posts",

  sayGoodBye: function(){
    console.log("This is the model speaking. say goodbye has been fired!");
    this.destroy();
  }

});




//post view constructor. Each view instance will have these methods and data available to it.

var PostView = Backbone.View.extend({

  initialize: function(){

    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove);

  },

  events: {
    "click .color" : "handleClick",
    "click .delete" : "handleDelete"
  },

  handleClick: function(event){
    this.$el.toggleClass("fancy");
  },

  handleDelete: function(event){
    this.model.sayGoodBye();
  },

  model: Post,

  tagName: "li",

  template: _.template($("#main-template").text()),

  render: function(){
    console.log("rendered");
    //read in a template from somewhere
    var renderedHTML = this.template(this.model.attributes);
    this.$el.html(renderedHTML);
    $("#blog-list").append(this.$el);
    //pass in the attributes from the model being observerd
    //append resulting html to DOM

  }

})
//attach a listener to the new post button
$("#add-button").on("click", function(e){

  var newPost = new Post({
    title: $("#title").val(),
    content: $("#content").val(),
    author: $("#author").val()
  });

  newPost.save();

  var newView = new PostView({model: newPost});
});
//create a model from our inputs
//save it
//create a view from the model
//render it






//instances of model and view objects

var firstPost = new Post({id: 1});

firstPost.fetch();

var firstPostView = new PostView({model: firstPost});

