<template>
  <div 
  class="square" 
  v-bind:class="{'yellow' : yellow, 'red' : red, 'blue' : blue, 'black' : black}">
    <SectionName class="section" :section="section"/>
  </div>
</template>

<script>
import SectionName from './SectionName'

export default {
  name: 'Square',
  props: {
    yellow: Boolean,
    red: Boolean,
    blue: Boolean,
    black: Boolean,
    section: String
  },
  components: {
    SectionName
  }
}
</script>

<style scoped>
  .square {
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .section {
    
  }
</style>
