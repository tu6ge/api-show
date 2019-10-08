<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello></hello>
    <php></php>
  </div>
</template>

<script>
import Vue from 'vue'
import {hello} from '../packages/index'
const lib = require("../packages/index")


Vue.use(lib.php)

export default {
  name: 'app',
  components: {
    [hello.name]:hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
