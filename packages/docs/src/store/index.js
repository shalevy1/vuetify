// Vue
import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

// Modules
import * as modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [pathify.plugin],
})
