<template>
  <div class="test">
    <h1>{{ getStoreRoute }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { MutationType } from '@/core/storage/mutation-types'

export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  },
  computed: {
    ...mapState({
      getStoreRoute: 'route'
    }),
    ...mapGetters([
      'getProject',
      'getValues'
    ]),
    getStoreProject () {
      return this.getProject('0T9XEsuY2Pw')
    },
    getStoreKanbans () {
      return this.getValues('kanbans')
    }
  },
  watch: {
    getStoreProject () {
      // this.runtime()
    }
  },
  methods: {
    ...mapMutations([
      'addProject',
      'updateKanbanName',
      'addKanban'
    ]),
    // ...mapMutations({
    //   updateProject: [Mutation.PROJECT_UPDATE]
    // }),
    runtime () {
      console.time('test runtime')
      this.test = this.getStoreProject
      console.timeEnd('test runtime')
      console.time('test runtime1')
      let i
      for (i = 0; i < 1000000; i++) {
        this.test = this.getStoreProject
      }
      console.timeEnd('test runtime1')
    }
  },
  mounted () {
    console.log(MutationType.PROJECT_UPDATE({ data: { projectId: '0T9XEsuY2Pw', name: '修改name' } }))
    // this.runtime()
    setTimeout(() => {
      this.$store.commit(MutationType.PROJECT_UPDATE({ data: { projectId: '0T9XEsuY2Pw', name: '修改name' } }))
    }, 1000)
    // setTimeout(() => {
    //   this.addProject()
    // }, 1300)
    // setTimeout(() => {
    //   this.updateKanbanName('32vur8q5b94w')
    // }, 1400)
    // setTimeout(() => {
    //   this.addKanban()
    // }, 1800)
    // console.log(this.getStore, this.getStoreProject)
  }
}
</script>
