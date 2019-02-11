import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate';

import board from './modules/board'
import film from './modules/film'
import auth from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    persistedState()
  ],
  modules: {
    auth,
    film,
    board
  }
})
