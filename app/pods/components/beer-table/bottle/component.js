import Component from 'ember-component'



export default Component.extend({

  beers: undefined,

  columns: [
    {slug: 'brewery'},
    {slug: 'name'},
    {slug: 'style'},
    {slug: 'ibu'},
    {slug: 'abv'},
    {slug: 'og'},
    {slug: 'price'},
  ]

})
