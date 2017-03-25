// ----- Ember modules -----
import Component from 'ember-component'
import service from 'ember-service/inject'
import on from 'ember-evented/on'

// ----- Ember addon modules -----
import computed from 'ember-macro-helpers/computed'



export default Component.extend({

  // ----- Arguments -----
  photos: undefined,



  // ----- Services -----
  fastboot : service(),
  eq       : service(),



  // ----- Overridden properties -----
  classNameBindings: [
    ':photoFeed',
    'fastboot.isFastBoot:-fastboot:-no-fastboot',
  ],



  // ----- Static properties -----
  swiper: undefined,



  // ----- Computed properties -----
  breakpoints: computed(() => {
    return new Array(10)
      .fill()
      .reduce((result, _, i) => {
        i++
        result[i * 200] = {slidesPerView: i}
        return result
      }, {})
  }),



  // ----- Eventes and observers -----
  subscribeToResizeUpdates: on('didInsertElement', function () {
    this
      .get('eq')
      .on('fooResize', () => {
        this.get('swiper').forceUpdate()
      })
  })
})
