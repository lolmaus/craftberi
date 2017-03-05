import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import {belongsTo} from 'ember-data/relationships'



export default Model.extend({
  uid: attr(),
  richText: attr(),
  image: attr(),
  date: attr(),
  timestamp: attr(),
  color: attr(),
  number: attr(),
  keyText: attr(),
  select: attr(),
  embed: attr(),
  geoPoint: attr(),
  linkMedia: attr(),
  linkPage: attr(),
  group: attr(),
})
