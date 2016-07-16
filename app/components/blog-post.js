import Ember from 'ember';

export default Ember.Component.extend({
  post: {},
  notEmpty: Ember.computed('post', function() {
    return this.get('post')
  })
});
