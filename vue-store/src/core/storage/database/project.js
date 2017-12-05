import Vue from 'vue'
import { PRELOAD } from '@/appConfig'
import _ from 'lodash'

const {
  projects,
  projectStats
} = PRELOAD

export default {
  state () {
    return {
      projects: _.keyBy(projects, item => item.id),
      projectStats: _.keyBy(projectStats, item => item.projectId),
      prjMembers: {}
    }
  },
  mutations: {
    initKbcTaskList (state, kbcs) {
      state.kbcTaskList = kbcs.reduce((acc, item) => {
        const { kbcId, taskId } = item
        if (!acc[kbcId]) acc[kbcId] = []
        acc[kbcId].push(taskId)
        return acc
      }, {})
    },
    pushkbcTaskList (state, { kbcId, taskId }) {
      !state.kbcTaskList[kbcId] && Vue.set(state.kbcTaskList, kbcId, [])
      !state.kbcTaskList[kbcId].includes(taskId) &&
        state.kbcTaskList[kbcId].unshift(taskId)
    },
    initProjectFile (state, { projectId, data }) {
      const projectFile = {
        ...state.projectFile[projectId],
        ..._.keyBy(data.data, item => item.id)
      }
      Vue.set(state.projectFile, projectId, projectFile)
    },
    pushProjectFile (state, payload) {
      state.projectFile[payload.projectId] &&
        Vue.set(state.projectFile[payload.projectId], payload.id, payload)
    },
    deleteProjectFile (state, payload) {
      state.projectFile[payload.projectId] &&
        Vue.delete(state.projectFile[payload.projectId], payload.id)
    },
    initProjectFilesPagination (state, { projectId, pagination }) {
      Vue.set(state.projectPagination.files, projectId, pagination)
    },
    moveTask (state, { id, afterTaskId, inKbcId, toKanbanId, fromKbcId }) {
      if (state.kbcTaskList[fromKbcId]) {
        const index = state.kbcTaskList[fromKbcId].indexOf(id)
        state.kbcTaskList[fromKbcId].splice(index, 1)
        if (fromKbcId === inKbcId) {
          const toIndex = state.kbcTaskList[fromKbcId].indexOf(afterTaskId)
          state.kbcTaskList[fromKbcId].splice(toIndex + 1, 0, id)
          return
        }
      }
      if (state.kbcTaskList[inKbcId]) {
        const toIndex = state.kbcTaskList[inKbcId].indexOf(afterTaskId)
        state.kbcTaskList[inKbcId].splice(toIndex + 1, 0, id)
      }
    },
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
  actions: {
  }
}
