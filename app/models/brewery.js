import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import {hasMany} from 'ember-data/relationships'

export default Model.extend({
  type : 'brewery',

  name     : attr('string'),
  location : attr('string'),
  website  : attr('string'),

  beers : hasMany('beer', {async: false}),
})
