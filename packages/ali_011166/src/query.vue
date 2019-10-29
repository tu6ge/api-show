<template>
     <el-table 
        border
        :height="height"
        :data="list">
        <template v-for="col in column">
            <el-table-column
                :prop="col.key"
                :label="col.name"
                :fixed="col.isFixed"
                :sortable="col.isSortable"
                :width="col.width">
            </el-table-column>
        </template>
     </el-table>
</template>
<script>
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
import {
    Table,
    TableColumn,
} from 'element-ui'
const allColumn =require( './common.js').default

export default {
    name: "aps-ali-011166",
    props:{
        type:{
            type:String,
            default:'shfutures',
            validator: function (value) {
                return typeof allColumn[value] !='undefined'
            }
        },
        height:  [String, Number],
        data:{
            type:  Object,
            required:true,
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
        column(){
            let col = []
            for( let i in allColumn[this.type]){
                col.push({
                    'key':i,
                    'name':allColumn[this.type][i],
                    'isFixed' : (i=='type' || i=='typename')? true:false,
                    'isSortable': (i=='type' || i=='typename' || i=='updatetime' || i=='changepercent')? false: true,
                    'width':((i)=>{
                        if(i=='type'){
                            return 150
                        }else if(i=='updatetime'){
                            return 180
                        }else if(allColumn[this.type][i].length==4){
                            return 120
                        }else if(allColumn[this.type][i].length==5){
                            return 150
                        }
                        return 100
                    })(i)
                })
            }
            return col
        },
        list(){
            return this.data.result.map(res=>{
                let temp = {}
                for(let i in res){
                    if(i=='type' || i=='typename' || i =='updatetime' || i== 'changepercent'){
                        temp[i] = res[i]
                    }else{
                        temp[i] = + res[i]
                    }
                }
                return temp
            })
        }
    }
}
</script>