<template>
    <el-table
    border
    height="400"
      :data="list">
      <el-table-column
        prop="name"
        label="货币名称"
        fixed
        width="120">
      </el-table-column>
       <el-table-column
        prop="code"
        label="货币简码"
        fixed
        width="90">
      </el-table-column>
      <el-table-column
        prop="day"
        label="发布日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布时间"
        width="90">
      </el-table-column>
      <el-table-column
        prop="hui_in"
        label="现汇买入价"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="chao_out"
        label="现钞卖出价"
        sortable
        width="120">
      </el-table-column>
       <el-table-column
        prop="chao_in"
        label="现钞卖入价"
        sortable
        width="120">
      </el-table-column>
       <el-table-column
        prop="hui_out"
        label="现汇卖出价"
        sortable
        width="120">
      </el-table-column>
       <el-table-column
        prop="zhesuan"
        label="中行折算价"
        sortable
        width="120">
       </el-table-column>
    </el-table>
</template>
<script>

import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/table-column.css';
import {
    Table,
    TableColumn,
} from 'element-ui'
export default {
    name: "aps-ali-010841",
    props:{
        data:{
            type:  Object,
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
            if(!this.data){
                return []
            }
            if(typeof this.data.showapi_res_body==undefined){
                return []
            }
            if(typeof this.data.showapi_res_body.list==undefined){
                return []
            }
            return this.data.showapi_res_body.list.map(res=>{
                res.hui_in=isNaN(+res.hui_in) ? '-' : +res.hui_in;
                res.chao_out= isNaN(+res.chao_out) ? '-' : + res.chao_out
                res.chao_in= isNaN(+res.chao_in) ? '-' : + res.chao_in
                res.hui_out= isNaN(+res.hui_out) ? '-' : + res.hui_out
                res.zhesuan= isNaN(+res.zhesuan) ? '-' : + res.zhesuan
                return res
            })
        }
    }
}
</script>