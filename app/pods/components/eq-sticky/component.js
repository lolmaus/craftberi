// ----- Official Ember modules -----
import Component from 'ember-component'
import on from 'ember-evented/on'
import {next} from 'ember-runloop'

// ----- Ember addon modules -----
import EEQMixin from 'ember-element-query/mixin'
import computed from 'ember-macro-helpers/computed'

// ----- Third-party modules -----
import $ from 'jquery'





export default Component.extend(EEQMixin, {

  $element: computed(function () { return this.$() }),
  $parent:  computed('$element', $el => $el.parent()),
  $window:  computed(() => $(window)),

  $indicator: computed(() => {
    return $(`
      <div style="
        background-color: red;
        position: absolute;
        width: 100%;
        height: 1px;
      "/>`
    )
      .appendTo(".beerList")
  }),

  _reposition () {
    // const $indicator = this.get('$indicator')

    const $element        = this.get('$element')
    const elementHeight   = $element.outerHeight()
    const elementTop      = $element.offset().top
    const elementBottom   = elementTop + elementHeight

    const $parent       = this.get('$parent')
    const parentHeight  = $parent .innerHeight()
    const parentBorder  = parseInt($parent.css('border-top-width'), 10)
    const parentPadding = parseInt($parent.css('padding-top'), 10)
    const parentTop     = $parent .offset().top + parentBorder + parentPadding

    const $window        = this.get('$window')
    const viewportHeight = window.innerHeight
    const viewportTop    = $window.scrollTop()
    const viewportBottom = viewportTop + viewportHeight

    const elementFullyCoversViewport =
         elementTop    < viewportTop
      && elementBottom > viewportBottom

    if (elementFullyCoversViewport) return

    const isElementTopWithinViewport =
         elementTop > viewportTop
      && elementTop < viewportBottom

    let difference = viewportTop - parentTop

    if (
         elementHeight < viewportHeight
      || isElementTopWithinViewport
    ) {
      if (difference < 0) difference = 0
      else if (difference + elementHeight > parentHeight) difference = parentHeight - elementHeight

    } else {
      difference -= (elementHeight - viewportHeight)
      if (difference > parentHeight - elementHeight) difference = parentHeight - elementHeight
    }

    $element.css({transform: `translate(0, ${difference}px)`})
  },



  _applyRepositionOnStartAndResize: on('didInsertElement', function () {
    this._reposition()

    this
      .get('$window')
      .scroll(() => {
        next(this, this._reposition)
      })
  })

})
