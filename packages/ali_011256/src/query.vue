<template>
    <div class="aps-ali-011256">
        <div class="aps-ali-011256--item" v-for="(item,key) in list" :key="key">
            <el-row>
                <el-col :span="9" class="aps-ali-011256--startstation">
                    <el-row>{{item.startcity}}</el-row>
                    <el-row class="aps-ali-011256--subtitle">{{item.startstation}}</el-row>
                </el-col>
                <el-col :span="6" >
                    <font class="aps-ali-011256--bustype">{{item.bustype}}</font>
                    <font class="aps-font aps-font-arrive" :style="{'font-size':ArriveFontSize}"></font>
                </el-col>
                <el-col :span="9" class="aps-ali-011256--endstation">
                    <el-row>{{item.endcity}}</el-row>
                    <el-row class="aps-ali-011256--subtitle">{{item.endstation}}</el-row>
                </el-col>
            </el-row>
            <el-row class="aps-ali-011256--desc">
                <el-col :span="12" class="aps-ali-011256--time">
                    {{item.starttime}}
                </el-col>
                <el-col :span="12" class="aps-ali-011256--price">
                    <span class="aps-ali-011256--price-symbol">￥</span>
                    {{item.price}}
                </el-col>
            </el-row>
        </div>
        <div style="clear:both;"></div>
    </div>
</template>
<script>
import '../../style/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/row.css'
import{
    Row,
    Col
} from 'element-ui'
export default {
    name: "aps-ali-011256",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    data () {
        return {
            ArriveFontSize:'70px'
        }
    },
    components:{
        [Row.name]: Row,
        [Col.name]: Col,
    },
    mounted(){
        console.log(this.$refs)
    },
    computed: {
        list(){
            return this.data.result;
        }
    },
}
</script>
<style scoped lang="scss">
.aps-ali-011256{
    display: block;
    &--item{ 
        width:300px;
        background-color: #f7f7f7;
        padding: 20px 10px;
        margin:5px;
        float: left;
    }
    &--startstation{ 
        text-align: left;
        display: inline;
    }
    &--endstation{
        text-align: right;
        display: inline;
    }
    &--subtitle{
        font-size:80%;
        color: #999;
    }
    &--bustype{
        color:#79C128;
         margin-left: 10px;
    display: block;
    font-size: 14px;
    }
    .aps-font-arrive{
        color:#79c0f1;
        line-height:20px;
    }
    &--desc{
    }
    &--time{
        text-align: left;
        display: inline;
    }
    &--price{
        text-align:right;
        display: inline;
        color:#ec5b00;
        line-height: 18px;
        font-size:24px;
    }
    &--price-symbol{
        font-size:18px;
    }
}
</style>