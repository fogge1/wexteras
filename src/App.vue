<template>
  <div id="app">
    <GreenHouse class="greenHouse"></GreenHouse>
  </div>
</template>

<script>

import GreenHouse from './components/GreenHouse.vue'

export default {
    name: "app",
    components: { GreenHouse }
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

.greenHouse {
  width: 100vw;
  height: 100vh;
  /* justify-content: flex-end; */
  /* margin: auto; */
  /* padding: 1em; */
  /* float: left */
  /* display: inline-block; */
}
</style>
