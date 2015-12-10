// Waiting until page is loaded
$(function() {

// ------------ COFFEE MODEL ------------ 

  var Coffee = Backbone.Model.extend({
    urlRoot: "/coffees"
  })

// ------------ COFFEE VIEW ------------ 

  var CoffeeView = Backbone.View.extend({
    initialize: function() {
      console.log("Coffee view is heer");
    },
    template: $("#coffee-template").html(),
    render: function() {
      var template = _.template(this.template);
      var rendered = template(this.model.attributes);
      return rendered;
    }
  });

// ------------ COFFEE COLLECTION ------------ 

  var CoffeeCollection = Backbone.Collection.extend({
    model: Coffee,
    url: "/coffees"
  })

// ------------ COFFEE COLLECTION VIEW ------------ 

  var CoffeeCollectionView = Backbone.View.extend({
    tagName: "table",
    initialize: function() {
      console.log("Collection view is here");
      this.render();
      this.listenTo(this.collection, "add", this.addOne);
      this.collection.fetch();
    },
    render: function() {
      this.$el.html("<tr><th>Drink</th><th>Price</th></tr>");
      $('#content').append(this.$el);
    },
    addOne: function(model) {
      console.log("New model added!")
      var newCoffeeView = new CoffeeView({model: model});
      var newTr = newCoffeeView.render();
      this.$el.append(newTr);
    }
  });


  var MyRouter = Backbone.Router.extend({
    routes:{
      "coffees":"showAllCoffees",
      "about_me":"showAboutMe",
      "coffees/:id":"showCoffee"
    },
    showAllCoffees: function() {
      $("#content").empty();
      var coffeeCollection = new CoffeeCollection();
      var coffeeCollectionView = new CoffeeCollectionView({collection: coffeeCollection});
      console.log("show all coffees");
    },
    showAboutMe: function() {
      $("#content").empty();
      $("#content").text("About Me");
      console.log("worked")
    }

  })

// ----------- End constructor definitions, ----------- 
// ------------  begin creating instances  ------------ 

  var myLilRouter = new MyRouter();
  Backbone.history.start();

  myLilRouter.navigate("coffees", {trigger:true}) 
  if (!location.hash) {
      myLilRouter.navigate("coffees", {trigger:true}) 
  }

  // // Instantiate a new coffee collection and view. 
  // var coffeeCollection = new CoffeeCollection();
  // var coffeeCollectionView = new CoffeeCollectionView({collection: coffeeCollection});
    
});
