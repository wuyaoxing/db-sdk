import { PRELOAD } from '@/appConfig'
import { ProjectBaseSchema } from '@/core/schemas/project'
import Vue from 'vue'

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
      state.projects = {}
    },
    updateProjectName (state) {
      state.projects['0T9XEsuY2Pw'].name = 789789
    },
    addProject (state) {
      Vue.set(state.projects, '0T9XEsuY2Pw0T9X', state.projects['0T9XEsuY2Pw'])
    }
  },
  actions: {}
}
