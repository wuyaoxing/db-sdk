import { PRELOAD } from '@/appConfig'
import { taskfieldDatasourceBaseSchema } from '@/core/schemas/taskfieldDatasource'

import { initState } from '../util'

const { taskfieldDatasources } = PRELOAD

export default {
  state: {
    taskfieldDatasources: initState(taskfieldDatasources, taskfieldDatasourceBaseSchema)
  },
  mutations: {
    resetTaskfieldDatasource (state) {
      state.taskfieldDatasources = {}
    }
  },
  actions: {}
}
