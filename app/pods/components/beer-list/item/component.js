import Component from 'ember-component'



export default Component.extend({

  // ----- Arguments -----
  beer             : undefined,
  mode             : undefined, // 'tap' or 'bottle'
  isExpanded       : undefined,



  // ----- Overridden properties -----
  classNames : ['beerList_item'],



  // ----- Actions -----
  actions: {
    toggleIsExpanded () {
      this.toggleProperty('isExpanded')
    }
  }
})
