export default Ember.Route.extend({
  renderTemplate: function () {
    this.render('dashboard/settings/index', {
      into: 'dashboard.settings'
    });
  },
});