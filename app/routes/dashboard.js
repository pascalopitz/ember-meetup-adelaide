export default Ember.Route.extend({
  model: function () {
    return [{
      name: 'One'
    }, {
      name: 'Two'
    }, {
      name: 'Three'
    }];
  }
});