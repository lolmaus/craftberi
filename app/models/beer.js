import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import {belongsTo} from 'ember-data/relationships'



export default Model.extend({
  type : 'beer',

  name             : attr('string'),
  description      : attr('string'),
  website          : attr('string'),
  image            : attr(),
  style            : attr('string'),
  styleExplanation : attr('string'),
  ibu              : attr('number'),
  abv              : attr('number'),
  gravity          : attr('number'),
  pricePint        : attr('number'),
  priceLiter       : attr('number'),
  priceBottle      : attr('number'),
  bottle           : attr('boolean'),

  tap     : belongsTo('tap'),
  brewery : belongsTo('brewery'),
})
