<template>
  <form action="">
    <input type="text" placeholder="Type your Skill" v-model="name" />
    <button @click="addToArm(name)" type="button">Add to Arm</button>
    <button @click="addToLeg(name)" type="button">Add to Leg</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Form',
  data() {
    return {
      name: ''
    }
  },
  methods: mapActions([
    'addToArm',
    'addToLeg'
  ]),
}
</script>
