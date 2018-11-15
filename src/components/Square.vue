<template>
  <div 
  class="square" 
  :class="color"
  v-on:click='onClick(section)'>
    <SectionName class="section" :section="section"/>
  </div>
</template>

<script>
import SectionName from './SectionName'

export default {
  name: 'Square',
  props: {
    color: String,
    section: String,
    onClick: Function
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
