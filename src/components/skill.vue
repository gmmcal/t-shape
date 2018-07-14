<template>
  <vue-draggable :active="false" :parent="true" :w="50" :h="50" :x="x" :y="y" :z="0">
    <p>{{ text }}</p>
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
    text: {
      type: String,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
