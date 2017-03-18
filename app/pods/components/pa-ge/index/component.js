// ----- Ember modules -----
import Component from 'ember-component'
import computed, {filterBy, reads} from 'ember-computed'
import EmberObject from 'ember-object'
import service from 'ember-service/inject'
import RSVP from 'rsvp'

// ----- Ember old-school import -----
import Ember from 'ember'
const {PromiseProxyMixin} = Ember

// ----- Custom classes -----
const PromiseObject = EmberObject.extend(PromiseProxyMixin)



export default Component.extend({

  // ----- Services -----
  prismic  : service(),
  fastboot : service(),



  // ----- Overridden properties -----
  classNames : ['paGe_index'],



  // ----- Computed properties -----
  allDocumentsPromise : computed(function () {
    return this._fetch()
  }),

  allDocumentsProxy : computed('allDocumentsPromise', function () {
    const promise = this.get('allDocumentsPromise')
    return PromiseObject.create({promise})
  }),

  allDocuments   : reads('allDocumentsProxy.content'),
  taps           : filterBy('allDocuments', 'type', 'tap'),
  beers          : filterBy('allDocuments', 'type', 'beer'),
  breweries      : filterBy('allDocuments', 'type', 'brewery'),
  beersOnTap     : filterBy("beers", "tapNumber"),
  beersInBottles : filterBy("beers", "bottle", "yes"),


  // ----- Methods -----
  _fetch () {
    if (this.get('fastboot.isFastBoot')) return RSVP.resolve()

    return this
      .get('prismic')
      .findAllDocuments()
  },



  // ----- Actions -----
  actions : {
    refetch () {
      this.set('allDocumentsPromise', this._fetch())
    },
  }

})
