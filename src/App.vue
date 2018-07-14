<template>
  <div id="app">
    <t-shape />
  </div>
</template>

<script>
import TShape from './components/t-shape'

export default {
  name: 'app',
  components: {
    't-shape': TShape
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
