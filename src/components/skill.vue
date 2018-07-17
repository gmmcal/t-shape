<template>
  <vue-draggable :active="false" :parent="true" :w="w" :h="h" :x="x" :y="y" :z="0">
    <p>{{ name }}</p>
  </vue-draggable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  name: 'Skill',
  components: {
    'vue-draggable': VueDraggableResizable,
  },
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      return this.skill.name
    },
    x() {
      return this.skill.x || 0
    },
    y() {
      return this.skill.y || 0
    },
    w() {
      return this.skill.w || 150
    },
    h() {
      return this.skill.h || 50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
