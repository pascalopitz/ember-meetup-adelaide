export default Ember.Route.extend({
  renderTemplate: function () {
    this.render('dashboard/settings/edit', {
      into: 'dashboard.settings'
    });
  },
});