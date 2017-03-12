import Component from 'ember-component'
import service from 'ember-service/inject'

import computed from 'ember-macro-helpers/computed'



export default Component.extend({

  // ----- Arguments -----
  photos: undefined,



  // ----- Services -----
  fastboot: service(),



  // ----- Overridden properties -----
  classNameBindings: ['fastboot.isFastBoot:-fastboot:-no-fastboot'],



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
