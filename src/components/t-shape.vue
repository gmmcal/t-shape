<template>
  <div class="hello">
    <h1>Welcome to T-Shape Profile builder</h1>
    <skill-form />
    <arm />
    <leg />
  </div>
</template>

<script>
import Arm from './arm'
import Form from './form'
import Leg from './leg'

export default {
  name: 'TShape',
  components: {
    'skill-form': Form,
    'leg': Leg,
    'arm': Arm,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vdr {
  border: 1px solid #000;
  cursor: pointer;
}
</style>
