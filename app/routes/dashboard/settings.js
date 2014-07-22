export default Ember.Route.extend({
  renderTemplate: function () {
    this.render('dashboard/settings', {
      outlet : 'modal',
      into: 'application'
    });
  },

  actions: {
    close: function () {
      this.transitionTo('dashboard');
    }
  }
});