// ----- Ember modules -----
import Component from 'ember-component'
import service from 'ember-service/inject'

// ----- Ember addon modules -----
import computed from 'ember-macro-helpers/computed'



export default Component.extend({

  // ----- Arguments -----
  photos: undefined,



  // ----- Services -----
  fastboot: service(),



  // ----- Overridden properties -----
  classNameBindings: [
    ':photoFeed',
    'fastboot.isFastBoot:-fastboot:-no-fastboot',
  ],



  // ----- Computed properties -----
  breakpoints: computed(() => {
    return new Array(10)
      .fill()
      .reduce((result, _, i) => {
        i++
        result[i * 200] = {slidesPerView: i}
        return result
      }, {})
  })
})
