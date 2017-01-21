import Ember from 'ember';

export default Ember.Service.extend({
  current: null,

  application: Ember.computed(function() {
    return Ember.getOwner(this).lookup("route:application");
  }),

  router: Ember.computed(function(){
    return Ember.getOwner(this).lookup('router:main');
  }),

  signIn() {
    this.get('application').send('signIn', 'google');
  },

  signOut() {
    this.get('application').send('signOut');
    this.get('router').transitionTo('dashboard');
  }
});

