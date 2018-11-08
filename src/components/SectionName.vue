<template>
  <div class="section-name">
      <p>{{section}}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionName',
  props: {
    section: String
  }
}
</script>

<style scoped>
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
    }
</style>