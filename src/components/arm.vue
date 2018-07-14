<template>
  <div class="arm">
    <skill text="Vue.js" v-bind:x="50" v-bind:y="10" />
    <skill text="React" v-bind:x="300" v-bind:y="30"/>
  </div>
</template>

<script>
import Skill from './skill'

export default {
  name: 'Arm',
  components: {
    'skill': Skill,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arm {
  border: 1px solid #000;
  width: 75%;
  height: 200px;
  margin: 0 auto;
  position: relative;
}
</style>
