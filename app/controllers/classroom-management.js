import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  classrooms: Ember.computed.alias('model'),
  hasClassrooms: Ember.computed.notEmpty('classrooms'),

  creatingNewClassroom: false,

  actions: {
    newClassroom() {
      this.set('creatingNewClassroom', true);
    },

    closeNewClassroomModal() {
      this.set('creatingNewClassroom', false);
    },

    editClassroom(classroom) {
      this.transitionToRoute('classroom.edit', classroom.get('id'));
    }
  }
});
