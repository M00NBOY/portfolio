<template>
  <div class="about">
    <p>{{ pitch }}</p>
  </div>
</template>

<script>
const pitch = `Hi 👋\nMy name is Mahel,\nI'm a young web developper and UI/UX designer.\nI love music 🎹 and video games 🎮\nAnd here I am`

export default {
  name: 'About',

  data: function () {
      return {
        pitch: pitch
      }
  }
}
</script>

<style scoped>
.about-me {
    height: 50vh;
    width: 50vw;
    font-family: 'googlesans';
    font-size: 18px;
    color: #001514;
    font-weight: medium;
    line-height: 23px;

}

.about-me p {
    margin-left: 50%;
    margin-top: 10vh;
    transform: translateX(-30%);
    width: 100%;
}
</style>