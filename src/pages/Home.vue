<template>
  <div id="app">
    <SquareLayout :squares="squareList" />
  </div>
</template>

<script>
import SquareLayout from '@/layout/SquareLayout'

export default {

  name: 'App',

  components: {
    SquareLayout
  },

  data: function () {
    return {
      squareList: [
        {
          name: 'About meabout',
          path: 'about',
          color: 'yellow'
        },
        {
          name: 'Project',
          path: 'project',
          color: 'red'
        },
        {
          name: 'Contact',
          color: 'blue'
        },
        {
          name: '?',
          path: 'random',
          color: 'black'
        },
      ]
    }
  }
};

</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
