<template>
    <el-table
    border
      :data="list">
      <el-table-column
        prop="code"
        label="指数编码"
        fixed
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="指数名称" >
      </el-table-column>
      <el-table-column
        prop="yestodayClosePrice"
        sortable
        label="昨日收盘价"
        width="120">
      </el-table-column>
      <el-table-column
        prop="diff_money"
        sortable
        label="涨跌金额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="tradeNum"
        width="120"
        sortable
        label="成交量">
      </el-table-column>
      <el-table-column
        prop="maxPrice"
        sortable
        label="最高价"
        width="100">
      </el-table-column>
      <el-table-column
        prop="nowPrice"
        sortable
        label="当前价"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="刷新时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="tradeAmount"
        sortable
        label="成交金额"
        width="150">
      </el-table-column>
       <el-table-column
        prop="swing"
        label="振幅">
      </el-table-column>
      <el-table-column
        prop="todayOpenPrice"
        sortable
        label="今日开盘价"
         width="120">
      </el-table-column>
     
      <el-table-column
        prop="diff_rate"
        label="涨跌幅度"
         width="100">
      </el-table-column>
       <el-table-column
        prop="minPrice"
        sortable
        label="最低价"
         width="100">
      </el-table-column>
    </el-table>
</template>
<script>
//大盘股指行情_批量

import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/table-column.css';
import {
    Table,
    TableColumn,
} from 'element-ui'

export default {
    name: "aps-ali-010845",
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
        [Table.name]:Table,
        [TableColumn.name]:TableColumn,
    },
    computed:{
        list(){
            let data = this.data.showapi_res_body.indexList.map(res=>{
                res.diff_money = parseFloat(res.diff_money)
                res.yestodayClosePrice = parseFloat(res.yestodayClosePrice)
                res.tradeNum = isNaN(parseFloat(res.tradeNum)) ? 0 : parseFloat(res.tradeNum)
                res.maxPrice = parseFloat(res.maxPrice)
                res.nowPrice = parseFloat(res.nowPrice)
                res.tradeAmount = parseFloat(res.tradeAmount)
                res.todayOpenPrice = parseFloat(res.todayOpenPrice)
                res.minPrice = parseFloat(res.minPrice)
                return res
            })
            return data
        }
    }
}
</script>
<style scoped>

</style>