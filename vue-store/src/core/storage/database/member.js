import { PRELOAD } from '@/appConfig'
import { memberBaseSchema } from '@/core/schemas/org'

import { initState } from '../util'

const { members } = PRELOAD

export default {
  state: {
    members: initState(members, memberBaseSchema)
  },
  mutations: {
    resetMember (state) {
      state.members = {}
    }
  },
  actions: {}
}
