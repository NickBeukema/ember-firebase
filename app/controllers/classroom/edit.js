import Ember from 'ember';

export default Ember.Controller.extend({
  classroom: Ember.computed.alias('model'),
  actions: {
    destroyClassroom() {
      this.get('classroom').destroyRecord()

      .then(() => {
        this.transitionToRoute('classroom-management');
      });
    }
  }
});
