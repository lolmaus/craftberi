import Component from 'ember-component'
import computed, {filterBy, reads} from 'ember-computed'
import EmberObject from 'ember-object'
import service from 'ember-service/inject'
import RSVP from 'rsvp'

import Ember from 'ember'

const {PromiseProxyMixin} = Ember
const PromiseObject = EmberObject.extend(PromiseProxyMixin)



export default Component.extend({

  prismic : service(),
  fastboot: service(),

  allDocumentsPromise : computed(function () {
    return this._fetch()
  }),

  allDocumentsProxy : computed('allDocumentsPromise', function () {
    const promise = this.get('allDocumentsPromise')
    return PromiseObject.create({promise})
  }),

  allDocuments : reads('allDocumentsProxy.content'),
  taps         : filterBy('allDocuments', 'type', 'tap'),
  beers        : filterBy('allDocuments', 'type', 'beer'),
  breweries    : filterBy('allDocuments', 'type', 'brewery'),

  _fetch () {
    if (this.get('fastboot.isFastBoot')) return RSVP.resolve()

    return this
      .get('prismic')
      .findAllDocuments()
  },

  actions: {
    refetch () {
      this.set('allDocumentsPromise', this._fetch())
    },
  }

})
