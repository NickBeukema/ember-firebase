import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  classrooms: Ember.computed.alias('model'),
  hasClassrooms: Ember.computed.notEmpty('classrooms'),
  actions: {
    newClassroom() {
      console.log("New Classroom");
      let room = this.store.createRecord('classroom', {
        title: 'text'
      });
      room.save();
    },

    editClassroom(classroom) {
      this.transitionToRoute('classroom.edit', classroom.get('id'));
    }
  }
});
