import { PRELOAD } from '@/appConfig'
import { ProjectBaseSchema } from '@/core/schemas/project'

import _ from 'lodash'

const { projects, projectStats, kanbans } = PRELOAD
const initProjects = () => {
  const stats = _.keyBy(projectStats, item => item.projectId)
  const kanbanlist = kanbans.reduce((acc, item) => {
    if (!acc[item.projectId]) {
      acc[item.projectId] = []
    }
    acc[item.projectId].push(item.id)
    return acc
  }, {})
  return projects.reduce((acc, val) => {
    const id = val.id
    acc[id] = {
      ...ProjectBaseSchema,
      ...val,
      stats: stats[id],
      kanbanlist: kanbanlist[id] || []
    }
    return acc
  }, {})
}
export default {
  state: {
    projects: initProjects()
  },
  mutations: {
    resetProject (state) {
      // state.kanbanKeyList = {}
      // state.kanbanList = {}
      state.kbcKeyList = {}
      state.kbcList = {}
      state.kbcTaskList = {}
      state.taskList = {}
      state.projectFile = {}
      state.projectPagination = {
        files: {}
      }
    }
  },
  actions: {}
}
