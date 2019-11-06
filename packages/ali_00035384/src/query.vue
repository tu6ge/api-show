<template>
    <div class='aps-ali-00035384'>
        <el-row class="now" v-if="now">
            <el-col :span='12'>
                <el-row class="weather-code">
                    <img src="./assets/icon2/12.png" />
                     <!-- <img :src="'./assets/icon2/'+ now.detail.weather_code+ '.png'" /> -->
                </el-row>
                <el-row class="temperature-box">
                    <el-col :span='12' class="temperature">
                        {{now.detail.temperature}}
                    </el-col>
                    <el-col :span='12' class="weather-desc">
                        <el-row>℃</el-row>
                        <el-row>{{now.detail.weather}}（{{now.detail.time}}）</el-row>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span='10'  :offset="2" class="right-info">
                <el-row>{{now.detail.date}}  星期{{now.detail.week}} </el-row>
                <el-row>农历 {{now.detail.nongli}} </el-row>
                
                <el-row>{{now.detail.wind_direction}}{{now.detail.wind_power}}</el-row>
                <el-row class="quality" :class="'quality-level-'+now_quality_level">{{now.detail.aqi}}  {{now.detail.quality}}</el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'
import {
    Row,
    Col,
} from 'element-ui'
export default {
    name: "aps-ali-00035384",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    components:{
        [Row.name]: Row,
        [Col.name]: Col,
    },
    computed: {
        now() {
            return this.data.data.now || {};
        },
        now_quality_level(){
            let quality = +this.now.detail.aqi
            if(quality<=50){
                return 1
            }else if(quality<=100){
                return 2
            }else if(quality<=150){
                return 3
            }else if(quality<=200){
                return 4
            }else if(quality<=300){
                return 5
            }else{
                return 6
            }
        },
        weather_img(){
            return './assets/icon2/12.png'
        }
    }
}
</script>
<style scoped lang="scss">
.aps-ali-00035384{
    background-image: -webkit-linear-gradient(top, rgb(13, 104, 188), rgb(114, 173, 224));
    
    font-size:14px;
    color:#fff;
    .now{
        .weather-code{
            img{
                width:80px;
                margin: 10px auto;
                display: block;
            }
        }
        .temperature-box{
            padding-bottom:10px;
            .temperature{
                font-size:44px;
                text-align: right;
                line-height:44px;
            }
            .weather-desc{
                line-height:22px;
            }
        }
        .right-info{
            line-height: 25px;
            margin-top:10px;
            .quality{
                border-radius:5px;
                display: inline-block;
                padding: 0 5px;
                width: 80px;
                text-align: center;
                margin-top:5px;
            }
            .quality-level-0 {
                background-color: #cacaca;
            }
            .quality-level-1 {
                background-color: #40c057;
            }
            .quality-level-2 {
                background-color: #82c91e;
            }
            .quality-level-3 {
                background-color: #f76707;
            }
            .quality-level-4 {
                background-color: #e03131;
            }
            .quality-level-5 {
                background-color: #841c3c;
            }
            .quality-level-6 {
                background-color: #540822;
            }
        }
    }
    
}
</style>