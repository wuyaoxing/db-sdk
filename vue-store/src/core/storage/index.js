import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import project from './database/project'
import kanban from './database/kanban'
import kanbanColumn from './database/kanbanColumn'
import task from './database/task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations,
  actions,
  modules: {
    project,
    kanban,
    kanbanColumn,
    task
  }
})
