<template>
  <div 
    class="square" 
    :class="color"
    @click="() => onClick(path)"
  >
    <p class="section" >{{ section }}</p>
  </div>
</template>

<script>
export default {
  name: 'Square',

  props: {
    color: {
      type: String,
      default: null
    },
    section: {
      type: String,
      default: null
    },
    path: {
      type: String,
      default: null
    },
    onClick: {
      type: Function,
      default: null
    }
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
  cursor: pointer;
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

.section-name {
  width: 35%;
  height: 20%;
  background-color: #FBFFFE;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'googlesans';
  font-size: 26px;
  color: #001514;
  font-weight: medium;
  text-transform: uppercase;
}
</style>
