<template>
  <div 
  class="square" 
  v-bind:class="{'yellow' : yellow, 'red' : red, 'blue' : blue, 'black' : black}">
    hello
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    yellow: Boolean,
    red: Boolean,
    blue: Boolean,
    black: Boolean
  }
}
</script>

<style scoped>
  .square {
    height: 50vh;
    width: 50vw;
  }
  .yellow {
    background-color: #FFB627;
  }
  .red {
    background-color: #BF1A2F;
  }
  .blue {
    background-color: #3E92CC;
  }
  .black {
    background-color: #001514;
  }
</style>
