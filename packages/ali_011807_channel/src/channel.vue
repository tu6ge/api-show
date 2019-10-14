<template>
    <el-select v-model="value"  placeholder="请选择" @change="change">
        <el-option
        v-for="item in data.result"
        :key="item.tvid"
        :label="item.name"
        :value="item.tvid">
        </el-option>
    </el-select>
</template>
<script>
import {
    Select,
    Option,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/option.css';
export default {
    name: "aps-ali-011807-channel",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        }
    },
    components:{
        [Select.name]: Select,
        [Option.name]: Option,
    },
    data(){
        return {
            value:"",
        }
    },
    methods:{
        change(val){
            this.$emit('change',val)
        }
    }
}
</script>