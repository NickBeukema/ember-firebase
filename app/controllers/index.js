import Ember from 'ember';

export default Ember.Controller.extend({
  userSession: Ember.inject.service(),
  currentUser: Ember.computed.alias('userSession.current')
});
