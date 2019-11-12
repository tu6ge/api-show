<template>
    <div class="aps-ali-010843">
        <div class="aps-ali-010843__main " :class="['aps-ali-010843--bg_level'+quality_level]">
            <el-row class="header ">
                <el-col :span="12">
                    <h1>{{pm.area}}</h1>
                    <span class="second-title">实时空气质量指数（AQI）</span>
                </el-col>
                <el-col :span="12">
                    <span class="datetime">更新时间：{{ct}}</span>
                </el-col>
            </el-row>
            <el-row class="aps-ali-010843__opacity">
                <el-col :span="16" class="overview">
                    <el-col :span="8">
                        <div class="circle circle--large" >{{pm.aqi}}</div>
                        <span>AQI指数</span>
                    </el-col>
                    <el-col :span="8">
                        <div class="circle"  >{{primary_pollutant_tiny}}</div>
                        <span>首要污染物</span>
                    </el-col>
                    <el-col :span="8">
                        <div  class="circle" >{{pm.pm2_5}}</div>
                        <span>PM2.5浓度</span>
                    </el-col>
                </el-col>
                <el-col :span="8">
                    <el-row>
                        <el-col :span="3" :offset="quality_offset">
                            <a-tag  :class="['color-line--color-level-'+quality_level]">{{pm.quality}}</a-tag>
                        </el-col>
                    </el-row>
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
        <el-row>
            <span class="aps-ali-010843__title">{{pm.area}} 各监测点实时数据</span>
        </el-row>
        <el-row>
            <el-table :data="siteList">
                <el-table-column
                    prop="site_name"
                    label="监测站点">
                </el-table-column>
                 <el-table-column
                    prop="aqi"
                    label="AQI">
                </el-table-column>
                 <el-table-column
                    prop="quality"
                    label="空气质量状况">
                </el-table-column>
                 <el-table-column
                    prop="primary_pollutant"
                    label="首要污染物">
                </el-table-column>
                 <el-table-column
                    prop="pm2_5"
                    label="PM2.5浓度">
                </el-table-column>
                <el-table-column
                    prop="pm10"
                    label="PM10浓度">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/table-column.css';
import "ant-design-vue/lib/tag/style/css";
import {
    Row,
    Col,
    Table,
    TableColumn
} from 'element-ui'
import {
    Tag
} from 'ant-design-vue'
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
        [Tag.name]: Tag,
        [Table.name]:Table,
        [TableColumn.name]: TableColumn,
    },
    computed: {
        pm(){
            return this.data.showapi_res_body.pm;
        },
        ct(){
            return this.pm.ct.substring(0, 19)
        },
        siteList() {
            return this.data.showapi_res_body.siteList
        },
        primary_pollutant(){
            return this.pm.primary_pollutant
        },
        primary_pollutant_tiny(){
            let arr = this.primary_pollutant.split('(')
            return arr[1].replace(')','')
        },
        quality_level(){
            let quality = +this.pm.aqi
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
        quality_offset(){
            // 18 14  11 6 3
            switch(this.quality_level){
                case 6:
                    return 18;
                case 5:
                    return 14;
                case 4:
                case 3:
                    return 11;
                case 2:
                    return 6;
                case 1:
                    return 3;
            }
        }
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
    &__main{
        color:#fff;
        padding-top: 40px;
    }
    .header{
        margin: 0 20px;
        h1{
            display:inline;
        }
        .second-title{
            opacity: 0.5;
            margin-left:10px;
        }
        .datetime{
            display:inline;
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: 14px;
        }
    }
    &__opacity{
        padding:30px 0;
        .overview{
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
                &--large{
                    font-size:40px;
                }
            }
             span{
                display: block;
                text-align: center;
            }
        }
        
        .color-line{
            .el-col{
                margin-top:5px;
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
            &--color-level-1{
                color: #40c057;
            }
            &--color-level-2{
                color: #82c91e;
            }
            &--color-level-3{
                color: #f76707;
            }
            &--color-level-4{
                color: #e03131;
            }
            &--color-level-5{
                color: #841c3c;
            }
            &--color-level-6{
                color: #540822;
            }
        }
        .color-value{
            text-align:center;
            .el-col:first-child{
                margin-left: 7%;
            }
        }
    }
    &__title{
        margin:10px;
        display: block;
        font-size:22px;
    }
    
}
</style>