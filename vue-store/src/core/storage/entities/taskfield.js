import { PRELOAD } from '@/appConfig'
import { taskfieldBaseSchema } from '@/core/schemas/taskfield'

import { initState } from '../util'

const { taskfields } = PRELOAD

export default {
  state: {
    taskfields: initState(taskfields, taskfieldBaseSchema)
  },
  mutations: {
    resetTaskfield (state) {
      state.taskfields = {}
    }
  },
  actions: {}
}
