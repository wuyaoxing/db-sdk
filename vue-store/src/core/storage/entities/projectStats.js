import Vue from 'vue'

export default {
  state: {
    projectStats: {}
  },
  mutations: {
    addProjectStats (state, payload) {
      Vue.set(state.projectStats, payload.id, payload.stats)
    },
    resetProjectStats (state) {
      state.projectStats = {}
    }
  },
  actions: {}
}
