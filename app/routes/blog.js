import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: [
        {
          title: 'Post 1',
          content: 'Content post 1'
        },
        {
          title: 'Post 2',
          content: 'Content post 2'
        }
      ]
    })
  }
});
