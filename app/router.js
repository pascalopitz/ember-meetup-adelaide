import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberMeetupAdelaideENV.locationType
});

Router.map(function() {
    this.resource('dashboard', { path: '/' }, function() {
        this.resource('dashboard.settings', { path: '/settings' }, function() {
           this.route('edit');
        });
    });

    this.resource('account', function() {
       this.route('password');
    });
});

export default Router;
