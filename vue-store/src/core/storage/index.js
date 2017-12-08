import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import router from './plugins/router'

import database from './database'
import workspace from './workspace'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations,
  actions,
  plugins: [router],
  modules: {
    database,
    workspace
  }
})
