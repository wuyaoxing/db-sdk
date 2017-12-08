<template>
  <div class="test">
    <h1>{{ getStoreRoute }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

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
    ...mapMutations({
      updateProject: 'updateProjectName'
    }),
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
    // this.runtime()
    setTimeout(() => {
      this.updateProject('修改name去')
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
