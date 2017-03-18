import Component from 'ember-component'



export default Component.extend({

  // ----- Arguments -----
  beer             : undefined,
  mode             : undefined, // 'tap' or 'bottle'
  parentClass      : undefined,
  grandParentClass : undefined,



  // ----- Overridden properties -----
  classNames : ['beerList_item']  ,
})
