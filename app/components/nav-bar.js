import Ember from 'ember';

export default Ember.Component.extend({
  userSession: Ember.inject.service(),

  currentUser: Ember.computed.alias('userSession.current'),
  isSignedIn: Ember.computed.notEmpty('currentUser'),


  actions: {
    signIn() {
      this.get('userSession').signIn();
    },
    signOut() {
      this.get('userSession').signOut();
    }
  }

});
