var Team = Backbone.Model.extend({
  urlRoot: "/teams",

  initialize: function() {
    console.log(" Hey you just created a new team " + this.get("name") + "!");
    this.on('change:name', this.handleNameChangeEvent);
    this.on('change:hometown', this.handleHometownChangeEvent);
  },

  handleNameChangeEvent: function() {
    console.log("The name changed to " + this.get("name"));
  },

  handleHometownChangeEvent: function(){
    console.log(this.get("name") + " got sold to " + this.get("hometown") + ". How scandalous!");
  }
});

// var redSox = new Team({
//   name: "Red Sox",
//   hometown: "Boston"
// });

// redSox.handleHometownChangeEvent();

// var yankees = new Team({
//   name: "Yankees",
//   hometown: "New York"
// });

// attributes property
// has, get, set methods


//CRUD

// redSox.save();
// yankees.save();

var teamOne = new Team({id: 1});
var teamTwo = new Team({id: 2});

teamOne.fetch({
  success: function(){
    console.log("This is so fetch!")
  },
  error: function(){
    console.log("Stop trying to make fetch happen.");
  }
});
teamTwo.fetch();













