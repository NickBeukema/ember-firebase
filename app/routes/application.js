import Ember from 'ember';

export default Ember.Route.extend({
  router: Ember.computed(function(){
    return Ember.getOwner(this).lookup('router:main');
  }),
  beforeModel: function() {
    return this.get('session').fetch().catch(() => {
      console.log("wrong");
      this.get('router').transitionTo('dashboard');
    });
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
