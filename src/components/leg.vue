<template>
  <div class="leg">
    <skill text="Ruby" v-bind:x="20" v-bind:y="100" />
    <skill text="Rails" v-bind:x="150" v-bind:y="20"/>
  </div>
</template>

<script>
import Skill from './skill'

export default {
  name: 'Leg',
  components: {
    'skill': Skill,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leg {
  border: 1px solid #000;
  border-top: none;
  width: 25%;
  height: 1000px;
  margin: 0 auto;
  position: relative;
}
</style>
