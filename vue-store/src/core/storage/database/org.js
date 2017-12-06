import { PRELOAD } from '@/appConfig'
import { orgBaseSchema } from '@/core/schemas/org'

import { initState } from './util'

const { orgs } = PRELOAD

export default {
  state: {
    orgs: initState(orgs, orgBaseSchema)
  },
  mutations: {
    resetKanban (state) {
      state.orgs = {}
    }
  },
  actions: {}
}
