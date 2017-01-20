import Ember from 'ember';

export default Ember.Controller.extend({
  classrooms: Ember.computed.alias('model'),
  hasClassrooms: Ember.computed.notEmpty('classrooms'),
  actions: {
    newClassroom() {
      console.log("New Classroom");
    }
  }
});
