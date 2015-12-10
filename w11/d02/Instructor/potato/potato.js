console.log("LINKD")


$(function() {

  // Grabbing DOM elements & storing refs
  var $container = $('#potato');
  var $hatSelect = $('#hat-select');
  var $eyesSelect = $('#eyes-select');
  var $noseSelect = $('#nose-select');
  var $mouthSelect = $('#mouth-select');
  var $allSelect = $("select");

  // Creating a new potato constructor function by extending the basic Backbone Model constructor function.
  var Potato = Backbone.Model.extend({
    // Setting default potato attributes
    defaults: {
      hat: $hatSelect.val(),
      eyes: $eyesSelect.val(),
      nose: $noseSelect.val(),
      mouth: $mouthSelect.val(),
    },
    // Optional to explicitly initialize function, which will be called when you instantiate a new instance of the Potato <3
    initialize: function() {
      console.log("A new potato has been born!");
    }
  });


  // Creating a new "PotatoView" constructor function by extending the Backbone View constructor

  var PotatoView = Backbone.View.extend({
    
    // Telling the potato view what element on the DOM it's concerned with.
    el: $container,
    
    // Here, we're grabbing the template we created in our HTML from the DOM. We're also using underscore templating to set it up!
    template: _.template( $('[data-template="potato-template"]').html() ),

    // When a new potato view is instantiated...
    initialize: function() {
      // Announce your presence!
      console.log("A new potato view has entered the scene.")
      // Call your render function! (render yoself)
      this.render();
      // Start listening to your model (you'll pass it in when you instantiate a new view). It needs you. In this case, you're listening to your model for it to emit a "change" event. Once that happens, we'll invoke this potato view's 'render' function (below)!
      this.listenTo(this.model, 'change', this.render);
    },
    
    // Here's our render function! It's responsible for rendering our data into our template, then slapping it onto the DOM so the user can see it
    render: function() {

      // here, we render our template, passing it this.model.attributes (an object that contains all of our model's attributes as key-value pairs!). 
      var rendered = this.template({model: this.model.attributes});
      // Setting the HTML of our container element to our rendered template!
      this.$el.html(rendered);
    }
  });

  // Creating a new instance of a Potato. <3 
  var meesterPotato = new Potato();
  // Creating a new instance from our PotatoView constructor function. Notice we pass in the model we want it to care about!
  var meesterPotatoView = new PotatoView({
    model: meesterPotato
  });

  // Event listener for "select" elements changing
  $allSelect.on('change', function(e) {
    console.log("WAT!")
    // Set multiple attributes
    meesterPotato.set({
      hat: $hatSelect.val(),
      eyes: $eyesSelect.val(),
      nose: $noseSelect.val(),
      mouth: $mouthSelect.val(),
    });
  });


});