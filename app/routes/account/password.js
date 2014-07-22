export default Ember.Route.extend({
  renderTemplate: function () {
    this.render('account/password', {
      outlet : 'modal',
      into: 'application'
    });
  },

  deactivate: function () {
    this.disconnectOutlet({
      outlet : 'modal',
      parentView: 'application'
    });
  },

  actions: {
    close: function () {
      this.transitionTo('account');
    }
  }
});