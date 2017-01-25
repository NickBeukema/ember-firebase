import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  classroomName: '',

  actions: {

    confirmClassroomCreation() {
      let room = this.get('store').createRecord('classroom', {
        title: this.get('classroomName')
      });
      room.save();
      this.sendAction('closeAction');
    }

  }
});
