import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('classroom', { reload: true });
  }
});
