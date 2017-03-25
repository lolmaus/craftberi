// ----- Ember modules -----
import Component from 'ember-component'
import computed, {filterBy, reads} from 'ember-computed'
import service from 'ember-service/inject'

// ----- Ember old-school import -----

// ----- Custom classes -----



export default Component.extend({

  // ----- Services -----
  fastboot : service(),



  // ----- Overridden properties -----
  classNames        : ['yandexMap'],
  classNameBindings : ['fastboot.isFastBoot:-isFastBoot:-isntFastBoot'],



  // ----- Computed properties -----


  // ----- Methods -----



  // ----- Actions -----
  actions : {
  }

})
