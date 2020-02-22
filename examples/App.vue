<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ZAnimateNumber :end="9999" />
  </div>
</template>

<script>
import { ZAnimateNumber } from "../packages";

export default {
  name: "App",
  components: {
    ZAnimateNumber
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
