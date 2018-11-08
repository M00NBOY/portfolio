<template>
  <div id="app">
    <Square v-bind:yellow='true'/>
  </div>
</template>

<script>
import Square from './components/Square.vue'

export default {
  name: 'app',
  components: {
    Square
  }
}
</script>

<style>
#app {

}
</style>
