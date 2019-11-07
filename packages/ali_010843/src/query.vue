<template>
    <div class="aps-ali-010843">
        <div class="aps-ali-010843__main aps-ali-010843--bg_level2">
            <el-row class="header ">
                <el-col :span="12">
                    <h1>青岛</h1>
                    <span class="second-title">实时空气质量指数（AQI）</span>
                </el-col>
                <el-col :span="12">
                    <span class="datetime">更新时间：2019-11-07 20:00</span>
                </el-col>
            </el-row>
            <el-row class="aps-ali-010843__opacity">
                <el-col :span="16">
                    <el-col :span="8">
                        <div class="circle" >60</div>
                        <span>AQI指数</span>
                    </el-col>
                    <el-col :span="8">
                        <div class="circle"  >PM10</div>
                        <span>首要污染物</span>
                    </el-col>
                    <el-col :span="8">
                        <div  class="circle" >22</div>
                        <span>PM2.5浓度</span>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-row class="color-line">
                        <el-col :span="3" :offset="3" class="color-line--level-1"></el-col>
                        <el-col :span="3" class="color-line--level-2"></el-col>
                        <el-col :span="3" class="color-line--level-3"></el-col>
                        <el-col :span="3" class="color-line--level-4"></el-col>
                        <el-col :span="3" class="color-line--level-5"></el-col>
                        <el-col :span="3" class="color-line--level-6"></el-col>
                    </el-row>
                    <el-row class="color-value">
                        <el-col :span="3">0</el-col>
                        <el-col :span="3">50</el-col>
                        <el-col :span="3">100</el-col>
                        <el-col :span="3">150</el-col>
                        <el-col :span="3">200</el-col>
                        <el-col :span="3">300</el-col>
                        <el-col :span="3">500</el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
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
    name: "aps-ali-010843",
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
    }
}
</script>
<style scoped lang="scss">
.aps-ali-010843{
    &--bg_level1{ background-color:#7db364;}
    &--bg_level2{background-color:#e3b649;}
    &--bg_level3{background-color:#e38748;}
    &--bg_level4{background-color:#e07373;}
    &--bg_level5{background-color:#9590c9;}
    &--bg_level6{background-color:#9f6aa2;}
    color:#fff;
    .header{
        
        h1{
            display:inline;
        }
        .second-title{
            opacity: 0.5;
        }
        .datetime{
            display:inline;
        }
    }
    &__opacity{
        padding:30px 0;
        .circle{
            margin:0 auto;
            display: block;
            width:100px;
            height:100px;
            border-radius: 50px;
            border:5px solid #fff;
            text-align:center;
            line-height:90px;
            font-size:30px;
        }
        .color-line{
            .el-col{
                margin-top:20px;
                border: 1px solid #fff;
                height: 12px;
            }
            &--level-1 {
                background-color: #40c057;
            }
            &--level-2 {
                background-color: #82c91e;
            }
            &--level-3 {
                background-color: #f76707;
            }
            &--level-4 {
                background-color: #e03131;
            }
            &--level-5 {
                background-color: #841c3c;
            }
            &--level-6 {
                background-color: #540822;
            }
        }
        .color-value{
            text-align:center;
            .el-col:first-child{
                margin-left: 7%;
            }
        }
    }
    
}
</style>