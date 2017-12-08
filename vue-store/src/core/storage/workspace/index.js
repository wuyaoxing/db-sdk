// import Vue from 'vue'
import { PRELOAD } from '@/appConfig'

// const { projects, projectStats } = PRELOAD

import { importProperties, resetProperties } from '../util'

const workspace = {}

export default {
  state () {
    return {
      PRELOAD,
      ...importProperties(workspace, 'state')
    }
  },
  getters: {
    getProject: (state, getters, rootState) => projectId => {
      console.log(state, getters, rootState)
      const { database: { projects } } = rootState
      const { getValues } = getters
      const kanbanlist = getValues('kanbans')
      return Object.assign({}, projects[projectId], { kanbanlist })
    }
  },
  mutations: {
    ...importProperties(workspace, 'mutations')
  },
  actions: {
    ...importProperties(workspace, 'actions'),
    resetDatabase (context) {
      resetProperties(context, workspace)
    }
  }
}
