import Component from 'ember-component'



export default Component.extend({

  taps: undefined,

  columns: [
    {slug: 'number'},
    {slug: 'brewery'},
    {slug: 'name'},
    {slug: 'style'},
    {slug: 'ibu'},
    {slug: 'abv'},
    {slug: 'og'},
    {slug: 'price-pint'},
    {slug: 'price-liter'},
  ]

})
