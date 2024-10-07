import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import cards from './cards'
import item from './item'
import isLoading from './isLoading'

Vue.use(Vuex)

const store = new Vuex.Store({
modules: {
  links,
  cards,
  item,
  isLoading
  }
})

export default store;
