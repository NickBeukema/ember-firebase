import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('classroom-management');
  this.route('classroom', { path: '/classrooms/'}, function(){
    this.route('edit', { path: '/:classroom_id/edit'});
  });
});

export default Router;
