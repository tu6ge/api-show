<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <aps-ali-011807 :data="ali_011807"></aps-ali-011807>
     <aps-ali-011807-channel :data="ali_011807_channel"  @change="channel_change"></aps-ali-011807-channel>
     <aps-ali-010845 :data="ali_010845"  @change="channel_change"></aps-ali-010845>

     <aps-ali-011811 :data="ali_011811"  class="mt-10"/>
  </div>
</template>

<script>
import Vue from 'vue'
import YAML from 'yaml'

import apishow from "../packages/index"
Vue.use(apishow)

if(module.hot){
  module.hot.accept("../packages/index")
  module.hot.accept("../packages/ali_011811/src/query.vue")
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
            },
            ali_011811:{
                    "status": 0,
                    "msg": "ok",
                    "result": {
                        "id": 2571,
                        "name": "2016款 Sportback 35TFSI 进取型",
                        "initial": "A",
                        "parentid": 220,
                        "logo": "http:\/\/pic1.jisuapi.cn\/car\/static\/images\/logo\/300\/2571.jpg",
                        "price": "18.49万",
                        "yeartype": "2016",
                        "listdate": "2016-04-06",
                        "productionstate": "停产",
                        "salestate": "停产",
                        "sizetype": "紧凑型车",
                        "depth": 4,
                        "basic": {
                            "price": "18.49万",
                            "saleprice": "无",
                            "warrantypolicy": "3年或10万公里",
                            "vechiletax": "",
                            "displacement": "1.4",
                            "gearbox": "7档 双离合",
                            "gearnum": "7",
                            "geartype": "双离合",
                            "comfuelconsumption": "5.5",
                            "userfuelconsumption": "",
                            "officialaccelerationtime100": "8.4",
                            "testaccelerationtime100": "",
                            "maxspeed": "",
                            "seatnum": "5"
                        },
                        "body": {
                            "color": "魔力黑,#000000|季风灰,#2c5866|莲花灰,#403e33|海南蓝,#48689e|白鲸棕,#574126|水晶银,#8f8f8f|希纳兹红,#c24070|钛金米,#c6bca3|萨摩亚",
                            "len": "4319",
                            "width": "1785",
                            "height": "1426",
                            "wheelbase": "2629",
                            "fronttrack": "",
                            "reartrack": "",
                            "weight": "1340",
                            "fullweight": "",
                            "mingroundclearance": "",
                            "approachangle": "",
                            "departureangle": "",
                            "luggagevolume": "380",
                            "luggagemode": "",
                            "luggageopenmode": "",
                            "inductionluggage": "",
                            "doornum": "",
                            "tooftype": "",
                            "hoodtype": "",
                            "roofluggagerack": "",
                            "sportpackage": ""
                        },
                        "engine": {
                            "position": "",
                            "model": "",
                            "displacement": "1.4",
                            "displacementml": "1395",
                            "intakeform": "涡轮增压",
                            "cylinderarrangetype": "直列",
                            "cylindernum": "4",
                            "valvetrain": "",
                            "valvestructure": "",
                            "compressionratio": "",
                            "bore": "",
                            "stroke": "",
                            "maxhorsepower": "150",
                            "maxpower": "110",
                            "maxpowerspeed": "5000-6000",
                            "maxtorque": "250",
                            "maxtorquespeed": "1750-3000",
                            "fueltype": "",
                            "fuelgrade": "95号",
                            "fuelmethod": "直喷",
                            "fueltankcapacity": "50",
                            "cylinderheadmaterial": "",
                            "cylinderbodymaterial": "",
                            "environmentalstandards": "国五",
                            "startstopsystem": "有"
                        },
                        "gearbox": {
                            "gearbox": "7档 双离合",
                            "gearnum": "7",
                            "geartype": "双离合",
                            "shiftpaddles": ""
                        },
                        "chassisbrake": {
                            "bodystructure": "承载式",
                            "powersteering": "",
                            "frontbraketype": "通风盘",
                            "rearbraketype": "盘式",
                            "parkingbraketype": "电子驻车",
                            "drivemode": "前轮驱动",
                            "airsuspension": "",
                            "adjustablesuspension": "",
                            "frontsuspensiontype": "麦弗逊独立悬架",
                            "rearsuspensiontype": "多连杆式独立悬架",
                            "centerdifferentiallock": ""
                        },
                        "safe": {
                            "airbagdrivingposition": "有",
                            "airbagfrontpassenger": "有",
                            "airbagfrontside": "无",
                            "airbagfronthead": "",
                            "airbagknee": "有",
                            "airbagrearside": "有",
                            "airbagrearhead": "",
                            "safetybeltprompt": "",
                            "safetybeltlimiting": "",
                            "safetybeltpretightening": "",
                            "frontsafetybeltadjustment": "",
                            "rearsafetybelt": "",
                            "tirepressuremonitoring": "有",
                            "zeropressurecontinued": "",
                            "centrallocking": "",
                            "childlock": "",
                            "remotekey": "手动中控",
                            "keylessentry": "",
                            "keylessstart": "",
                            "engineantitheft": ""
                        },
                        "wheel": {
                            "fronttiresize": "205\/55 R16",
                            "reartiresize": "205\/55 R16",
                            "sparetiretype": "非全尺寸",
                            "hubmaterial": ""
                        },
                        "drivingauxiliary": {
                            "abs": "有",
                            "ebd": "有",
                            "brakeassist": "有",
                            "tractioncontrol": "有",
                            "esp": "有",
                            "eps": "",
                            "automaticparking": "有",
                            "hillstartassist": "有",
                            "hilldescent": "",
                            "frontparkingradar": "",
                            "reversingradar": "有",
                            "reverseimage": "无",
                            "panoramiccamera": "",
                            "cruisecontrol": "无",
                            "adaptivecruise": "",
                            "gps": "",
                            "automaticparkingintoplace": "选配",
                            "ldws": "",
                            "activebraking": "",
                            "integralactivesteering": "",
                            "nightvisionsystem": "",
                            "blindspotdetection": ""
                        },
                        "doormirror": {
                            "openstyle": "",
                            "electricwindow": "有",
                            "uvinterceptingglass": "",
                            "privacyglass": "",
                            "antipinchwindow": "",
                            "skylightopeningmode": "",
                            "skylightstype": "无",
                            "rearwindowsunshade": "",
                            "rearsidesunshade": "",
                            "rearwiper": "有",
                            "sensingwiper": "有",
                            "electricpulldoor": "",
                            "rearmirrorwithturnlamp": "后雨刷",
                            "externalmirrormemory": "",
                            "externalmirrorheating": "",
                            "externalmirrorfolding": "",
                            "externalmirroradjustment": "电动调节",
                            "rearviewmirrorantiglare": "",
                            "sunvisormirror": ""
                        },
                        "light": {
                            "headlighttype": "卤素",
                            "optionalheadlighttype": "",
                            "headlightautomaticopen": "",
                            "headlightautomaticclean": "",
                            "headlightdelayoff": "",
                            "headlightdynamicsteering": "",
                            "headlightilluminationadjustment": "",
                            "headlightdimming": "",
                            "frontfoglight": "有",
                            "readinglight": "",
                            "interiorairlight": "",
                            "daytimerunninglight": "选配",
                            "ledtaillight": "",
                            "lightsteeringassist": ""
                        },
                        "internalconfig": {
                            "steeringwheelbeforeadjustment": "",
                            "steeringwheelupadjustment": "",
                            "steeringwheeladjustmentmode": "上下调节,前后调节",
                            "steeringwheelmemory": "",
                            "steeringwheelmaterial": "选配",
                            "steeringwheelmultifunction": "",
                            "steeringwheelheating": "选配",
                            "computerscreen": "",
                            "huddisplay": "",
                            "interiorcolor": "",
                            "rearcupholder": "",
                            "supplyvoltage": ""
                        },
                        "seat": {
                            "sportseat": "无",
                            "seatmaterial": "织物",
                            "seatheightadjustment": "",
                            "driverseatadjustmentmode": "无",
                            "auxiliaryseatadjustmentmode": "无",
                            "driverseatlumbarsupportadjustment": "",
                            "driverseatshouldersupportadjustment": "",
                            "frontseatheadrestadjustment": "",
                            "rearseatadjustmentmode": "",
                            "rearseatreclineproportion": "",
                            "rearseatangleadjustment": "",
                            "frontseatcenterarmrest": "",
                            "rearseatcenterarmrest": "",
                            "seatventilation": "",
                            "seatheating": "",
                            "seatmassage": "",
                            "electricseatmemory": "",
                            "childseatfixdevice": "有",
                            "thirdrowseat": ""
                        },
                        "entcom": {
                            "locationservice": "",
                            "bluetooth": "无",
                            "externalaudiointerface": "AUX",
                            "builtinharddisk": "",
                            "cartv": "",
                            "speakernum": 7,
                            "audiobrand": "",
                            "dvd": "单碟cd",
                            "cd": "单碟cd",
                            "consolelcdscreen": "普通液晶屏",
                            "rearlcdscreen": ""
                        },
                        "aircondrefrigerator": {
                            "airconditioningcontrolmode": "无",
                            "tempzonecontrol": "",
                            "rearairconditioning": "",
                            "reardischargeoutlet": "",
                            "airconditioning": "",
                            "airpurifyingdevice": "有",
                            "carrefrigerator": ""
                        },
                        "actualtest": {
                            "accelerationtime100": "",
                            "brakingdistance": ""
                        }
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
