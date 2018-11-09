<template>
  <div class="about-me">
    <p>
        Hi 👋 <br/>
        My name is Mahel, <br/>
        I’m a young web developper and UI/UX designer.<br/>
        <br/>
        I love music 🎹 and video games 🎮<br/>
        <br/>
        And here I am
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
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