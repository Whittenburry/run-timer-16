import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new');
  this.route('run-description', {path: `/:_id`});
});

export default Router;
