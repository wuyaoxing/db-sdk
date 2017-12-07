<template>
  <div id="app">
    <router-view/>
    {{getStore}}
  </div>
</template>

<script>
export default {
  name: 'app',
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
