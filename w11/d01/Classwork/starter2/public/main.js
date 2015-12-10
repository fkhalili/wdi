console.log("main linked");


//post model constructor. Each model instance will have these methods and data available to it.

var Post = Backbone.Model.extend({
  urlRoot: "/posts"
})




//post view constructor. Each view instance will have these methods and data available to it.

var PostView = Backbone.View.extend({

  initialize: function(){

    this.listenTo(this.model, "change", this.render);

  },

  events: {
    "click .color" : "handleClick"
  },

  handleClick: function(event){
    console.log("someone clicked on me");
    console.log(event.target)
    this.$el.toggleClass("fancy");  
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


//instances of model and view objects

// var firstPost = new Post({id: 1});

// firstPost.fetch();

// var firstPostView = new PostView({model: firstPost});


var newPost = new Post({title: "ojnojn", author: "jn", content: "ojn"});
newPost.save();
var newPostView = new PostView({model: newPost});
