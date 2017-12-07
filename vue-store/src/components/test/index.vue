<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test'
    }
  },
  computed: {
    getStore () {
      return this.$store.getters.getValues('projects')
    },
    getStoreRoute () {
      return this.$store.state.route
    },
    getStoreProject () {
      return this.$store.getters.getProject('0T9XEsuY2Pw')
    }
  },
  watch: {
    getStoreProject () {
      this.runtime()
    }
  },
  methods: {
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
    },
    updateProjectName () {
      this.$store.commit('updateProjectName')
    },
    addProject () {
      this.$store.commit('addProject')
    },
    updateKanbanName () {
      this.$store.commit('updateKanbanName')
    },
    addKanban () {
      this.$store.commit('addKanban')
    }
  },
  mounted () {
    this.runtime()
    setTimeout(() => {
      this.updateProjectName()
    }, 1000)
    // setTimeout(() => {
    //   this.addProject()
    // }, 1300)
    // setTimeout(() => {
    //   this.updateKanbanName()
    // }, 1400)
    // setTimeout(() => {
    //   this.addKanban()
    // }, 1500)
    // console.log(this.getStore, this.getStoreProject)
  }
}
</script>
