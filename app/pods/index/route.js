import Route from 'ember-route'



export default Route.extend({

  model () {
    const store = this.get('store')

    return {
      taps:  store.peekAll('tap'),
      beers: store.peekAll('beer'),
    }
  },

})
