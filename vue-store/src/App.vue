<template>
  <div id="app">
    <router-view/>
    {{getStoreProject}}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
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
    },
    getStoreProjects () {
      return this.getValues('projects')
    }
  },
  mounted () {
    // console.log(this.getStore, this.getStoreProject)
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
