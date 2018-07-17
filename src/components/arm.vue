<template>
  <div class="arm">
    <skill v-for="skill in skills" :key="skill.name" :skill="skill" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Skill from './skill'

export default {
  name: 'Arm',
  components: {
    'skill': Skill,
  },
  computed: mapGetters({
    skills: 'arms'
  })
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
