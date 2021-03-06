import Ember from 'ember';

export default Ember.Controller.extend({
  // query parameters used by components
  queryParams: ['start', 'num'],
  start: 1,
  num: 10,

  actions: {
    doSearch (q) {
      // NOTE: don't need to pass route name b/c same route
      this.transitionToRoute('items', {
        queryParams: { q , start: 1 }
      });
    }
  }
});
