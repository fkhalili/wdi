// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require_self
$(function(){
var Debt = Backbone.Model.extend({
    urlRoot: '/api/v1/debts',
});

var DebtCollection = Backbone.Collection.extend({
  model: Debt,
  url: '/api/v1/debts'
});

var DebtView = Backbone.View.extend({
  tagName: "li",
  template: _.template('Client: <%= client %>. Amount: <%= amount %>.'),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var DebtCollectionView = Backbone.View.extend({
  el: $('#debt-list'),
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.collection.fetch();
  },
  addOne: function(debt) {
    console.log('Make it rain!');
    var view = new DebtView({model: debt});
    this.$el.append(view.render().el);
  }
});

var debts = new DebtCollection({})
var debtCollectionView = new DebtCollectionView({collection: debts});

var FormView = Backbone.View.extend({
  el: $('#new-debt-form'),
  initialize: function() {
    this.$clientInput = this.$el.find('#client-field');
    this.$amountInput = this.$el.find('#amount-field');
  },
  events: {
    'click button': 'createNewDebt'
  },
  createNewDebt: function(event){
    event.preventDefault();
    var debt = new Debt({
      client: this.$clientInput.val(),
      amount: this.$amountInput.val()
    });

    console.log('Making dollar dollar bills yo!');

    debt.save().done(function(debt){
        console.log('console log it yo. Success!')
        debts.add(debt);
      });

  }
});

var formView = new FormView({collection: debts});
// FormView
// Listien for submit
// prevent default
// create and save the Model
// delete debts







});


