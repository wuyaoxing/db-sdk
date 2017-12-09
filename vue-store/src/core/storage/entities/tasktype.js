import { PRELOAD } from '@/appConfig'
import { tasktypeBaseSchema } from '@/core/schemas/tasktype'

import { initState } from '../util'

const { tasktypes } = PRELOAD

export default {
  state: {
    tasktypes: initState(tasktypes, tasktypeBaseSchema)
  },
  mutations: {
    resetTasktype (state) {
      state.tasktypes = {}
    }
  },
  actions: {}
}
