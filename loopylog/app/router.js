import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('production', function() {
    this.route('dimension');
  });
  this.route('production\\dimension');
});

export default Router;
