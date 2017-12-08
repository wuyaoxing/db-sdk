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
    updateKanbanName (state, payload) {
      state.kanbans[payload].name = '修改看板name'
    },
    addKanban (state) {
      Vue.set(state.kanbans, '32vur8q5b94w32vur8q5b94w32vur8q5b94w32vur8q5b94w', state.kanbans['32vur8q5b94w'])
    }
  },
  actions: {}
}
