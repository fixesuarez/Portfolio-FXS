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

<style lang="scss">
@import 'src/styles/main';
@import 'src/styles/variables';

html {
  width: 100vw;
  overflow-x: hidden;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgba(253, 253, 253, 1);
}
* {
  color: rgba(0, 0, 0, 0.84);
  font-family: 'Montserrat', sans-serif;
}
h3 {
  line-height: 40px;
}
</style>
