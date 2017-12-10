import Vue from 'vue'

export default {
  state: {
    projectMembers: {}
  },
  mutations: {
    addProjectMember (state, payload) {
      Vue.set(state.projectMembers, payload.id, payload.members)
    },
    resetProjectMember (state) {
      state.projectMembers = {}
    }
  },
  actions: {}
}
