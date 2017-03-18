import Route from 'ember-route'
import RSVP from 'rsvp'


export default Route.extend({

  model () {
    const store = this.get('store')

    return RSVP.hash({
      photos: store.findAll('photo')
    })
  }

})
