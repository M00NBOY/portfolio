<template>
  <div id="app">
    <!-- <Square v-bind:yellow='true' section='About me'/> -->
    <AboutMe />
    <Square v-bind:red='true' section='Project'/>
    <Square v-bind:blue='true' section='Contact'/>
    <Square v-bind:black='true' section='?'/>
  </div>
</template>

<script>
import Square from './components/Square'
import AboutMe from './components/AboutMe'

export default {
  name: 'app',
  components: {
    Square,
    AboutMe
  }
}
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
