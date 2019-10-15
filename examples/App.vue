<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <aps-ali-011807 :data="ali_011807"></aps-ali-011807>
     <aps-ali-011807-channel :data="ali_011807_channel"  @change="channel_change"></aps-ali-011807-channel>
    <hello></hello>
    <php></php>
  </div>
</template>

<script>
import Vue from 'vue'
import apishow from "../packages/index"
Vue.use(apishow)

if(module.hot){
  module.hot.accept("../packages/index")
}

export default {
  name: 'app',
  data(){
      return {
            ali_011807:{
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
            },
            ali_011807_channel:{
                "status": "0",
                "msg": "ok",
                "result": [
                    {
                        "tvid": "1",
                        "name": "中央台",
                        "parentid": "0",
                        "istv": "0"
                    },
                    {
                        "tvid": "2381",
                        "name": "中国美食",
                        "parentid": "4",
                        "istv": "1"
                    },
                    {
                        "tvid": "2382",
                        "name": "人文历史",
                        "parentid": "4",
                        "istv": "1"
                    },
                    {
                        "tvid": "2383",
                        "name": "中国旅游",
                        "parentid": "4",
                        "istv": "1"
                    }
                ]
            }
      }
  },
  methods:{
      channel_change(){
          //console.log('change val :' + val)
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
