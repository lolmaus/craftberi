import Component from 'ember-component'



export default Component.extend({

  // ----- Arguments -----
  beer             : undefined,
  mode             : undefined, // 'tap' or 'bottle'
  isExpanded       : undefined,



  // ----- Overridden properties -----
  classNames : ['beerListItem'],
  classNameBindings : ['isExpanded:-isExpanded:-isCollapsed'],



  // ----- Computed properties -----




  // ----- Actions -----
  actions: {
    toggleIsExpanded () {
      this.toggleProperty('isExpanded')
    }
  }
})
