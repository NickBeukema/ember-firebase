import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  students: DS.hasMany('students'),
  teacher: DS.belongsTo('user')
});
