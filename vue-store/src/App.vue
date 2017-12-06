<template>
  <div id="app">
    {{getStore}}
    <router-view/>
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
    }
  },
  mounted () {
    console.log(this.getStore)
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
