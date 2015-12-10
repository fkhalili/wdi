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

// ---------- ROUTER WOO ---------
  var MyRouter = Backbone.Router.extend({
    routes : {
      "" : "showAllCoffees",
      "coffees" : "showAllCoffees",
      "about" : "showAbout",
      "coffees/:id" : "showCoffee",
    },
    showAllCoffees: function() {
      console.log("Show All Coffees bro");
      $('#content').empty();
      // Instantiate a new coffee collection and view. 
      var coffeeCollection = new CoffeeCollection();
      var coffeeCollectionView = new CoffeeCollectionView({collection: coffeeCollection});
    },
    showAbout: function() {
      $('#content').empty();
      var $aboot = $("<div>");
      var $header = $("<h1>").text("Aboot us:");
      var $paragraph = $("<p>").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, non, similique? Hic sequi expedita omnis, modi eveniet aut. Quis praesentium inventore voluptatibus. Perspiciatis cupiditate reprehenderit suscipit excepturi fugit, aspernatur quaerat.");
      $aboot.append($header).append($paragraph);

      $('#content').append($aboot);
    },
    showCoffee: function(id) {
      // empty!
      $('#content').empty();
      // get a coffee with an id of whatever the id that was passed in is
      var specialCoffee = new Coffee({id: id});
      specialCoffee.fetch({
        success: function(model) {
        // render and append. <3
        var specialCoffeeView = new CoffeeView({model: model});
        var rendered = specialCoffeeView.render();
        var $newTable = $("<table><tr><th>Drank</th><th>Price!!!</th></tr></table>")
        $newTable.append(rendered);
        $('#content').append($newTable);
        }
      });
    }
  })


// ----------- End constructor definitions, ----------- 
// ------------  begin creating instances  ------------ 

  var myLilRouter = new MyRouter();

  Backbone.history.start();

  // if (!location.hash) {
  //   myLilRouter.navigate("coffees", {trigger: true});
  // }



    
});
