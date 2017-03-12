import JSONSerializer from 'ember-data/serializers/json'

export default JSONSerializer.extend({

  // ----- Overridden methods -----
  normalize (typeClass, hash) {
    const newHash = {
      id       : hash.id,

      imageURL : hash.images.standard_resolution.url,
      pageURL  : hash.link,

      width    : hash.images.standard_resolution.width,
      height   : hash.images.standard_resolution.height,

      caption  : hash.caption.text,
    }

    return this._super(typeClass, newHash)
  },

  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    payload = payload.data.filter(item => item.type === 'image')
    return this._super(store, primaryModelClass, payload, id, requestType)
  },

})
