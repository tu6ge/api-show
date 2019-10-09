<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ali-57002003-011807 :data="ali_57002003_011807"></ali-57002003-011807>
    <hello></hello>
    <php></php>
  </div>
</template>

<script>
import Vue from 'vue'
import apishow from "../packages/index"
Vue.use(apishow)

export default {
  name: 'app',
  data(){
      return {
          ali_57002003_011807:{
                "status": "0",
                "msg": "ok",
                "result": {
                    "tvid": "435",
                    "name": "CCTV-3（综艺）",
                    "date": "2015-08-09",
                    "program": [
                        {
                            "name": "综艺喜乐汇",
                            "starttime": "01:18"
                        },
                        {
                            "name": "综艺喜乐汇",
                            "starttime": "02:36"
                        },
                        {
                            "name": "2014中国梦-我梦最美",
                            "starttime": "03:55"
                        }
                    ]
                }
            }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 60px;
}
</style>
