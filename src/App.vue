<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #000;
  color: #fff; */
}
</style>
