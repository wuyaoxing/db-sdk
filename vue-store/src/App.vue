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
      return this.$store.state
    }
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
