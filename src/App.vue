<template>
  <div id="app">
    <WelcomeText class="welcomeText" />
    <GreenHouse class="greenHouse"></GreenHouse>
  </div>
</template>

<script>

import GreenHouse from './components/GreenHouse.vue'
import WelcomeText from './components/WelcomeText.vue';

export default {
    name: "app",
    components: { GreenHouse, WelcomeText }
}

</script>


<style scoped>

/*  */
/* header {
  line-height: 1.5;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.welcomeText {
  background-color: #282828;
  width: 40vw;
  height: 100vh;
  /* display: inline-block; */
}

.greenHouse {
  width: 60vw;
  height: 96vh;
  margin: 2vh 2vh 2vh 0;
  border-radius: 10px;
  /* justify-content: flex-end; */
  /* margin: auto; */
  /* padding: 1em; */
  /* float: left */
  /* display: inline-block; */
}
</style>
