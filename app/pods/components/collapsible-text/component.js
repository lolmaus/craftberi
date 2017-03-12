import Component from 'ember-component'

import computed from 'ember-macro-helpers/computed'

import {stripTags} from 'craftberi/helpers/strip-tags'



export default Component.extend({

  // ----- Arguments -----
  content    : undefined,
  isExpanded : false,
  limit      : 200,



  // ----- Overridden properties -----
  classNameBindings: ['isExpanded:-expanded:-collapsed'],



  // ----- Computed properties -----
  strippedContent: computed('content', stripTags),

  isCollapsible: computed(
    'strippedContent', 'limit',
    (strippedContent,   limit) => strippedContent.length > limit
  ),

  currentContent: computed(
    'isCollapsible', 'content', 'strippedContent', 'isExpanded', 'limit',
    (isCollapsible,   content,   strippedContent,   isExpanded,   limit) => {
      if (!isCollapsible || isExpanded) return content

      return strippedContent.slice(0, limit - 50).trim() + '…'
    }
  ),



  // ----- Actions -----
  actions: {
    toggle () {
      this.toggleProperty('isExpanded')
    }
  }
})
