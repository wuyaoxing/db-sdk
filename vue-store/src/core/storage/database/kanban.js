import { PRELOAD } from '@/appConfig'
import { KanbanBaseSchema } from '@/core/schemas/kanban'

import Vue from 'vue'

const { kanbans } = PRELOAD
const initState = (data, schema) => {
  return data.reduce((acc, val) => {
    acc[val.id] = { ...schema, ...val }
    return acc
  }, {})
}
export default {
  state: {
    kanbans: initState(kanbans, KanbanBaseSchema)
  },
  mutations: {
    resetKanban (state) {
      state.kanbans = {}
    },
    updateKanbanName (state) {
      state.kanbans['0T9XEt7baOu'].name = 789789
    },
    addKanban (state) {
      Vue.set(state.projects, '0T9XEt7baOu0T9XEt7baOu', state.kanbans['0T9XEt7baOu'])
    }
  },
  actions: {}
}
