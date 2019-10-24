<template>
    <div>
        <el-tabs type="card"  v-model="activeTab">
            <el-tab-pane :label="label" name="tab" >
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
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/table-column.css';
import {
    Table,
    TableColumn,
    Tabs,
    TabPane
} from 'element-ui'
export default {
    name: "aps-ali-010841-bank10",
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
        [Tabs.name]:Tabs,
        [TabPane.name]:TabPane,
    },
    data () {
        return {
            activeTab:'tab',
            bank_list:{
                ICBC:'工商银行',
                BOC:'中国银行',
                ABCHINA:'农业银行',
                BANKCOMM:'交通银行',
                CCB:'建设银行',
                CMBCHINA:'招商银行',
                CEBBANK:'光大银行',
                SPDB:'浦发银行',
                CIB:'兴业银行',
                ECITIC:'中信银行',
            }
        }
    },
    computed:{
        list(){
            if(!this.data){
                return []
            }
            if(typeof this.data.showapi_res_body==undefined){
                return []
            }
            if(typeof this.data.showapi_res_body.codeList==undefined){
                return []
            }
            let array = this.data.showapi_res_body.codeList.filter(res=>{
                 if(res.code=='RMB'){
                    return false
                }
                return true
            })
            return array.map(res=>{
                res.hui_in=isNaN(+res.hui_in) ? '-' : +res.hui_in;
                res.chao_out= isNaN(+res.chao_out) ? '-' : + res.chao_out
                res.chao_in= isNaN(+res.chao_in) ? '-' : + res.chao_in
                res.hui_out= isNaN(+res.hui_out) ? '-' : + res.hui_out
                return res
            })
        },
        bank_name(){
            return typeof this.bank_list[this.data.showapi_res_body.name] != undefined
             ? this.bank_list[this.data.showapi_res_body.name] 
             : '未知'
        },
        label(){
            return this.bank_name + '  ' + this.data.showapi_res_body.day + '  ' + this.data.showapi_res_body.time
        }
    }
}
</script>