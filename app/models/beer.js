import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import {belongsTo} from 'ember-data/relationships'



export default Model.extend({
  name        : attr('string'),
  description : attr('string'),
  website     : attr('string'),
  style       : attr('string'),
  ibu         : attr('number'),
  abv         : attr('number'),
  gravity     : attr('number'),
  pricePint   : attr('number'),
  priceLiter  : attr('number'),
  bottle      : attr('boolean'),

  tap     : belongsTo('tap'),
  brewery : belongsTo('brewery'),
})
