import { PRELOAD } from '@/appConfig'
import { ProjectBaseSchema } from '@/core/schemas/project'
import Vue from 'vue'

import _ from 'lodash'

const { projects, projectStats } = PRELOAD
const initProjects = () => {
  const stats = _.keyBy(projectStats, item => item.projectId)
  return projects.reduce((acc, val) => {
    const id = val.id
    acc[id] = {
      ...ProjectBaseSchema,
      ...val,
      stats: stats[id]
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
    updateProjectName (state, payload) {
      state.projects['0T9XEsuY2Pw'].name = payload
    },
    addProject (state) {
      Vue.set(state.projects, '0T9XEsuY2Pw0T9X', state.projects['0T9XEsuY2Pw'])
    }
  },
  actions: {}
}
