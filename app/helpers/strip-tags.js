import {helper} from 'ember-helper'
import $ from 'jquery'



export function stripTags (htmlStr) {
  return $(`<div>${htmlStr}</div>`).text()
}

export default helper(stripTags)
