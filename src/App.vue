<template>
  <div id="app">
    <Square color='yellow' section='About me' :onClick='handleSquare'/>
    <!-- <AboutMe /> -->
    <Square color='red' section='Project' :onClick='handleSquare'/>
    <Square color='blue' section='Contact' :onClick='handleSquare'/>
    <Square color='black' section='?' :onClick='handleSquare'/>
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
  },
  methods: {
    handleSquare : (param)=> {
      console.log('salut')
      console.log(param)
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
