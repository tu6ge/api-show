<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <aps-ali-011807 :data="ali_011807"></aps-ali-011807>
     <aps-ali-011807-channel :data="ali_011807_channel"  @change="channel_change"></aps-ali-011807-channel>
     <aps-ali-010845 :data="ali_010845"  @change="channel_change"></aps-ali-010845>
  </div>
</template>

<script>
import Vue from 'vue'
import YAML from 'yaml'

import apishow from "../packages/index"
Vue.use(apishow)

if(module.hot){
  module.hot.accept("../packages/index")
}

export default {
  name: 'app',
  created(){
      console.log(YAML.stringify(this.ali_011807))
  },
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
            },
            ali_010845:{
                "showapi_res_code": 0,
                "showapi_res_error": "",
                "showapi_res_body": {
                    "ret_code": 0,
                    "indexList": [//股票指数列表
                        {
                            "yestodayClosePrice": 3131.9385,//昨日收盘价
                            "max52": "",
                            "diff_money": "-16.1398",//涨跌金额
                            "tradeNum": 130848835,//成交量
                            "code": "sh000001",//指数编码
                            "maxPrice": 3129.8382,//最高价
                            "nowPrice": 3115.7987,//当前价
                            "min52": "",
                            "time": "2016-10-26 13:37:00.022",//刷新时间
                            "name": "上证指数",//指数名称
                            "tradeAmount": 147643643377,//成交金额
                            "swing": "0.5515%",
                            "todayOpenPrice": 3129.8382,//今日开盘价
                            "diff_rate": "-0.5153%",//涨跌幅度
                            "minPrice": 3112.5663//最低价
                        },
                        //...
                    ]
                }
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
