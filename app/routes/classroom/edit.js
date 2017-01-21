import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('classroom', params.classroom_id, { reload: true });
  }
});
