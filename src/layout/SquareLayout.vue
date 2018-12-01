<template>
  <div id="square-container">
    <fragment v-for="(square, index) in squares"  :key="index">
      <Square
        :color="square.color"
        :section="square.name"
        :path="square.path"
        :onClick="handleSquareClick"
       />
    </fragment>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import Square from '@/components/Square'

export default {
  name: 'SquareLayout',

  components: {
    Square,
    Fragment
  },

  props: {
      squares: {
          type: Array,
          default: []
      }
  },

  methods: {
    handleSquareClick: function (param) {
      this.$router.push(param)
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
