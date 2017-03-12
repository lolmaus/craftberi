import RESTAdapter from 'ember-data/adapters/rest'
import service from 'ember-service/inject'
import RSVP from 'rsvp'
import $ from 'jquery'

import config from 'craftberi/config/environment'

const {userId, token} = config.APP.instagram


export default RESTAdapter.extend({

  // ----- Services -----
  fastboot: service(),



  // ----- Overridden methods -----
  ajax (url, type, options) {
    if (this.get('fastboot.isFastBoot')) {
      return this._super(url, type, options)
    }

    const deferred = RSVP.defer()

    $.getJSON(
      `${url}&callback=?`,
      (data) => { deferred.resolve(data) }
    )

    return deferred.promise
  },

  urlForFindAll () {
    return `https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`
  },
})
