// ----- Ember modules -----
import Component from 'ember-component'
import EObject from 'ember-object'
import on from 'ember-evented/on'
import {next, later} from 'ember-runloop'
import service from 'ember-service/inject'

// ----- Ember addons -----
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'
import reads from 'ember-macro-helpers/reads'
import conditional from 'ember-awesome-macros/conditional'
import equal from 'ember-awesome-macros/equal'
import filter from 'ember-awesome-macros/array/filter'
import mapBy from 'ember-awesome-macros/array/map-by'
import sort from 'ember-awesome-macros/array/sort'
import uniq from 'ember-awesome-macros/array/uniq'

import EEQMixin from 'ember-element-query/mixin'

// ----- Third-party modules -----
import $ from 'jquery'

// ----- Custom classes -----



export default Component.extend(EEQMixin, {

  // ----- Arguments -----
  beers               : undefined,
  mode                : undefined, // 'tap' or 'bottle'
  parentClass         : undefined,
  groupByBrewery      : equal('mode', raw('bottle')),
  initialExpandStatus : false,



  // ----- Services -----
  eqService: service('eq'),



  // ----- Overridden properties -----
  classNames : ['beerList'],



  // ----- Static properties -----
  _sortOptions : [
    {path : 'tapNumber',   label : 'Кран'},
    {path : 'name',         label : 'Наименование'},
    {path : 'brewery.name', label : 'Пивоварня'},
    {path : 'style',        label : 'Сорт'},
    {path : 'ibu',          label : 'IBU', title: 'Расченая горечь'},
    {path : 'abv',          label : 'ABV', title: 'Крепость на единицу объема'},
    {path : 'gravity',      label : 'OG',  title: 'Начальная плотность'},
    {path : 'priceLiter',   label : 'Цена'},
  ],

  currentSortOrder : 'asc',



  // ----- Computed properties -----
  $body:     computed(() => $('body')),

  $controls: computed(function () {
    return this.$('.beerList-controls')
  }),

  groupByBreweryEffective : reads("groupByBrewery"),

  sortOptions1: conditional(
    'groupByBreweryEffective',
    filter('_sortOptions', ({path}) => path !== 'brewery.name'),
    '_sortOptions'
  ),

  sortOptions : conditional(
    equal('mode', raw('bottle')),
    filter('sortOptions1', ({path}) => path !== 'tapNumber'),
    'sortOptions1'
  ),

  beersWrapped : computed(
             'beers.[]', 'initialExpandStatus',
    function (beers,      initialExpandStatus) {
      return beers.map(beer => EObject.create({
        beer,
        brewery    : beer.get('brewery'),
        isExpanded : initialExpandStatus,
      }))
    }
  ),

  currentSortOption : computed('sortOptions', 'mode', function () {
    return this._getSortOption()
  }),

  areAllWrappersExpanded : computed(
             'beersWrapped.@each.isExpanded',
    function (beersWrapped) {
      return beersWrapped.mapBy('isExpanded').every(value => value)
    }
  ),

  areNoWrappersExpanded : computed(
             'beersWrapped.@each.isExpanded',
    function (beersWrapped) {
      return beersWrapped.mapBy('isExpanded').every(value => !value)
    }
  ),

  areOnlySomeWrappersExpanded : computed(
             'areAllWrappersExpanded', 'beersWrapped.@each.isExpanded',
    function (areAllWrappersExpanded,   beersWrapped) {
      return (
        beersWrapped.mapBy('isExpanded').any(value => value)
        && !areAllWrappersExpanded
      )
    }
  ),

  breweries : sort(uniq(mapBy('beers', raw('brewery'))), ['name']),

  // ----- Private methods -----
  _getSortOption () {
    const path =
      this.get('mode') === 'tap'
        ? 'tapNumber'
        : 'name'

    return this.get('sortOptions').findBy('path', path)
  },



  // ----- Events and observers -----
  // _applySticky: on('didInsertElement', function () {
  //   const $controls = this.get('$controls')
  //
  //   $controls.stick_in_parent({
  //     offset_top: 50
  //   })
  //
  //   this
  //     .get('eqService')
  //     .on('afterUpdate', () => {
  //       console.log('afterUpdate')
  //
  //       $controls.trigger('sticky_kit:recalc')
  //     })
  // }),



  // ----- Actions -----
  actions : {
    toggleGroup () {
      const newValue = this.toggleProperty('groupByBreweryEffective')

      if (newValue && this.get('currentSortOption.path') === 'brewery.name') {
        this.set('currentSortOption', this._getSortOption())
        this.set('currentSortOrder', 'asc')
      }
    },

    toggleSortOrder () {
      const currentSortOrder = this.get('currentSortOrder')
      const newSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc'
      this.set('currentSortOrder', newSortOrder)
    },

    sort (sortOption) {
      const currentSortOption = this.get('currentSortOption')

      if (currentSortOption === sortOption) this.send('toggleSortOrder')
      else {
        this.set('currentSortOption', sortOption)
        this.set('currentSortOrder', 'asc')
      }
    },

    toggleIsExpanded () {
      const value = !this.get('areAllWrappersExpanded')

      this
        .get('beersWrapped')
        .forEach(wrapper => wrapper.set('isExpanded', value))
    },

    goToBrewery (brewery) {
      this.set('groupByBreweryEffective', true)

      next(() => {
        const id        = brewery.get('id')
        const $target   = $(`._brewery-${id}`)
        const $body     = this.get('$body')
        const scrollTop = $target.offset().top - 100

        $body.animate({scrollTop})
      })
    }
  }
})
