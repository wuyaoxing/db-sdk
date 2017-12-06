import org from './org'
import project from './project'
import kanban from './kanban'
import kanbanColumn from './kanbanColumn'
import task from './task'

// import Vue from 'vue'
import { PRELOAD } from '@/appConfig'
import _ from 'lodash'

// const { projects, projectStats } = PRELOAD

const database = {
  org,
  project,
  kanban,
  kanbanColumn,
  task
}

const setProperties = (obj, type) => {
  return Object.keys(obj).reduce((acc, val) => {
    acc = Object.assign(acc, obj[val][type])
    return acc
  }, {})
}

const resetProperties = (state, obj) => {
  return Object.keys(obj).forEach(key => {
    const commitEvent = `reset${key.replace(/( |^)[a-z]/g, L =>
      L.toUpperCase()
    )}`
    state.commit(commitEvent)
  })
}

export default {
  state () {
    return {
      PRELOAD,
      ...setProperties(database, 'state')
    }
  },
  getters: {
    getValues: state => property => _.values(state[property])
  },
  mutations: {
    ...setProperties(database, 'mutations')
  },
  actions: {
    ...setProperties(database, 'actions'),
    resetDatabase (context) {
      resetProperties(context, database)
    }
  }
}
