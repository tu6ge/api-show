<template>
    <div class="aps-ali-010845-real-stockinfo">
        <h2>
          {{stockMarket.name}}<span>({{stockMarket.code}}.{{stockMarket.market.toUpperCase()}})</span>
        </h2>
        <el-row>
            <el-col :span="8" class="text-center main">
                <el-row class="title" :class="{'up':isUp, 'down':isDown}">
                    <el-col :span="12" class="price ">{{stockMarket.nowPrice}}</el-col>
                    <el-col :span="4"><font class="aps-font"  :class="{'aps-font-up':isUp, 'aps-font-down':isDown}"></font></el-col>
                    <el-col :span="8" class="change">
                        <el-row>{{stockMarket.diff_money}}</el-row>
                        <el-row >{{diff_rate}}</el-row>
                    </el-col>
                </el-row>
                <el-row class="change-list">
                    <el-col :span="12">涨停：{{stockMarket.highLimit}}</el-col>
                    <el-col :span="12">跌停：{{stockMarket.downLimit}}</el-col>
                </el-row>
                <el-row  class="datetime">{{stockMarket.date}}  {{stockMarket.time}}</el-row>
            </el-col>
            <el-col :span="5" class="list">
                <el-row>今&nbsp;&nbsp;&nbsp;&nbsp;开：	{{stockMarket.openPrice}}</el-row>
                <el-row>最&nbsp;&nbsp;&nbsp;&nbsp;高：	<span class="up">{{stockMarket.todayMax}}</span></el-row>
                <el-row>最&nbsp;&nbsp;&nbsp;&nbsp;低：	<span class="down">{{stockMarket.todayMin}}</span></el-row>
                <el-row>昨&nbsp;&nbsp;&nbsp;&nbsp;收：	{{stockMarket.closePrice}}</el-row>
                <el-row>总股本：	{{totalcapital}}</el-row>
            </el-col>
            <el-col :span="6" class="list">
                <el-row>成交量：	{{tradeNum}}</el-row>
                <el-row>成交额：	{{tradeAmount}}</el-row>
                <el-row>总市值：	{{stockMarket.all_value}}亿元</el-row>
                <el-row>流通值：	{{stockMarket.circulation_value}}亿元</el-row>
                <el-row>流通股：	--</el-row>
            </el-col>
            <el-col :span="5" class="list">
                <el-row>振&nbsp;&nbsp;&nbsp;&nbsp;幅：	{{stockMarket.swing}}%</el-row>
                <el-row>换手率：{{stockMarket.turnover}}</el-row>
                <el-row>市净率：	{{stockMarket.pb}}</el-row>
                <el-row title="TTM">市盈率：	{{stockMarket.pe}}</el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/breadcrumb.css'
import 'element-ui/lib/theme-chalk/breadcrumb-item.css'
import '../../style/iconfont/iconfont.css'
import {
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem
} from 'element-ui'
export default {
    name:'aps-ali-010845-real-stockinfo',
     props:{
        data:{
            type:  Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { }
            }
        },
    },
    components:{
        [Row.name]:Row,
        [Col.name]: Col,
        [Breadcrumb.name]: Breadcrumb,
        [BreadcrumbItem.name]: BreadcrumbItem,
    },
    computed:{
        stockMarket(){
            let val = this.data.showapi_res_body.stockMarket
            val.diff_rate = + val.diff_rate
            val.totalcapital = + val.totalcapital
            val.tradeNum = + val.tradeNum
            val.tradeAmount = + val.tradeAmount
            return val
        },
        isUp(){
            return this.stockMarket.diff_rate>=0 ? true: false
        },
        isDown(){
            return this.stockMarket.diff_rate>=0 ? false: true
        },
        diff_rate(){
            return (this.stockMarket.diff_rate>=0 ? '+' :'')+ this.stockMarket.diff_rate + '%' 
        },
        totalcapital(){
            return (this.stockMarket.totalcapital>1000) ?
            ((this.stockMarket.totalcapital/1000).toFixed(2).toString() + '亿')
            : (this.stockMarket.totalcapital.toFixed(2).toString() + '万')
        },
        //成交量（股）
        tradeNum(){
            return (this.stockMarket.tradeNum>10000) ? 
            (this.stockMarket.tradeNum/10000).toFixed(2).toString() + '万股'
            : this.stockMarket.tradeNum.toString() + '股'
        },
        //成交金额
        tradeAmount(){
            if(this.stockMarket.tradeAmount>100000000){
                return (this.stockMarket.tradeAmount/100000000).toFixed(2).toString() + '亿元'
            }else if(this.stockMarket.tradeAmount>10000){
                return (this.stockMarket.tradeAmount/10000).toFixed(2).toString() + '万元'
            }else{
                return this.stockMarket.tradeAmount.toString() + '元'
            }
        }
    }
}
</script>
<style scoped lang="scss">
.aps-ali-010845-real-stockinfo{
    font-family: 微软雅黑,黑体;
    color: #012793;
    font-size:12px;
    h2{
        font-size: 18px;
        font-weight:none;
        color: #012793;
        span{
            font-size:10px;
            line-height:18px;
        }
    }
    .up{
        color: red;
    }
    .down{
        color: green;
    }
    .main{
        padding: 0 14px;
        border-right:1px solid #E1E8F5;
        .title{
            margin-top:9px;
            border-bottom:1px solid #E1E8F5;
            .price{
                font-size:26px;
                text-align: right;
            }
            .aps-font{
                font-size:24px;
            }
            .change{
                font-size:14px;
            }
        }
        .change-list{
             border-bottom:1px solid #E1E8F5;
             line-height:24px;
        }
        .datetime{
            color:#333;
        }
    }
    .list{
        line-height:24px;
        .el-row{
            padding:0 14px;
        }
    }

}
</style>