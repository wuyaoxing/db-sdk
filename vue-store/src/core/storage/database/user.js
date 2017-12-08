import { PRELOAD } from '@/appConfig'
import { userBaseSchema } from '@/core/schemas/user'

import { initState } from '../util'

const { users } = PRELOAD

export default {
  state: {
    users: initState(users, userBaseSchema)
  },
  mutations: {
    resetUser (state) {
      state.users = {}
    }
  },
  actions: {}
}
