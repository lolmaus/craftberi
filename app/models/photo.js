import Model from 'ember-data/model'
import attr from 'ember-data/attr'



export default Model.extend({
  type: 'photo',

  imageURL : attr('string'),
  pageURL  : attr('string'),

  width    : attr('number'),
  height   : attr('number'),

  caption  : attr('string'),
})
