console.log("main linked");


//post model constructor. Each model instance will have these methods and data available to it.

var Post = Backbone.Model.extend({
  urlRoot: "/posts",

  sayGoodBye: function(){
    console.log("This is the model speaking. say goodbye has been fired!");
    this.destroy();
  }

});

var PostCollection = Backbone.Collection.extend({

  model: Post,

  url: "/posts"
});

var PostCollectionView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "add", this.addPost);
  },

  addPost: function(modelFromCollection){
    console.log("the collection that I am observing added a post!")
    console.log(modelFromCollection.attributes);
    new PostView({model: modelFromCollection}).render()
    // newView.render();
    //we want to create views and render them!
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
    "click .delete" : "handleDelete",
    "click .edit" : "handleEdit",
    "click .edit-button": "update"
  },

  handleClick: function(event){
    this.$el.toggleClass("fancy");
  },

  handleDelete: function(event){
    this.model.sayGoodBye();
  },

  handleEdit: function(event){
    console.log("handling edit")
    this.$el.append(this.editTemplate());
  },

  update: function(e){
    var newTitle = $("#edit-title").val();
    var newAuthor = $("#edit-author").val();
    var newContent = $("#edit-content").val();
    this.model.set({title: newTitle, author: newAuthor, content: newContent});
    this.model.save();
  },

  model: Post,

  tagName: "li",

  editTemplate: _.template($("#edit-template").text()),

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

});




var FormView = Backbone.View.extend({
  initialize: function(options){
    this.collection = options.collection
  },

  events: {
    "submit": "addPostToCollection"
  },

  addPostToCollection: function(event){
    event.preventDefault();
    console.log("submitted!");
    var author = $("#author").val();
    var content = $("#content").val();
    var title = $("#title").val();
    var newModel = new Post({author: author, content: content, title: title});
    this.collection.create(newModel);
  }

});


var myPostCollection = new PostCollection();
var myPostCollectionView = new PostCollectionView({collection: myPostCollection});
myPostCollection.fetch();

var myFormView = new FormView({el: $("#entry-form"), collection: myPostCollection});





