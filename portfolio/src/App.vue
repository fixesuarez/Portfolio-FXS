<template>
  <div id="app">
    <Toolbar/>
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/core/Toolbar.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
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
  height: 100vh;  
}
</style>
