import { PRELOAD } from '@/appConfig'
import { KanbanBaseSchema } from '@/core/schemas/kanban'

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
    }
  },
  actions: {}
}
