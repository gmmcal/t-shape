<template>
  <div class="leg">
    <skill v-for="skill in skills" :key="skill.name" :skill="skill" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Skill from './skill'

export default {
  name: 'Leg',
  components: {
    'skill': Skill,
  },
  computed: mapGetters({
    skills: 'legs'
  })
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
