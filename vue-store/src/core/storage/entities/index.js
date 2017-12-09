import org from './org'
import user from './user'
import member from './member'
import tag from './tag'
import tasktype from './tasktype'
import taskfield from './taskfield'
import taskfieldDatasource from './taskfieldDatasource'
import project from './project'
import kanban from './kanban'
import kanbanColumn from './kanbanColumn'
import task from './task'

// import Vue from 'vue'
import { PRELOAD } from '@/appConfig'

import { importProperties, resetProperties } from '../util'

import _ from 'lodash'

// const { projects, projectStats } = PRELOAD

const entities = {
  org,
  user,
  member,
  tag,
  tasktype,
  taskfield,
  taskfieldDatasource,
  project,
  kanban,
  kanbanColumn,
  task
}

export default {
  state () {
    return {
      PRELOAD,
      ...importProperties(entities, 'state')
    }
  },
  getters: {
    getValues: state => property => _.values(state[property])
  },
  mutations: {
    ...importProperties(entities, 'mutations')
  },
  actions: {
    ...importProperties(entities, 'actions'),
    resetEntities (context) {
      resetProperties(context, entities)
    }
  }
}
