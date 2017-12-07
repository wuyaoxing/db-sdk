import { PRELOAD } from '@/appConfig'
import { tagBaseSchema } from '@/core/schemas/tag'

import { initState } from '../util'

const { taskTagPools: tags } = PRELOAD

export default {
  state: {
    tags: initState(tags, tagBaseSchema)
  },
  mutations: {
    resetTag (state) {
      state.tags = {}
    }
  },
  actions: {}
}
