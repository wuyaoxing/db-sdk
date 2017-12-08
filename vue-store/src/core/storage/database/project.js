import Vue from 'vue'
import { PRELOAD } from '@/appConfig'
import { ProjectBaseSchema } from '@/core/schemas/project'

import { Action } from '../action-types'
import { Mutation } from '../mutation-types'

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
    [Mutation.PROJECT_UPDATE] (state, { data }) {
      state.projects[data.projectId] = { ...state.projects[data.projectId], ...data }
    },
    addProject (state) {
      Vue.set(state.projects, '0T9XEsuY2Pw0T9X', state.projects['0T9XEsuY2Pw'])
    }
  },
  actions: {
    [Action.ProjectUpdate] (state, { data }) {
      state.commit(Mutation.PROJECT_UPDATE, data)
    }
  }
}
