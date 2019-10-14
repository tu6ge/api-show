<template>
    <div >
        
        <van-cell-group>
            <van-cell title="国家" :value="data.data.country"  v-if="showCountry"/>
            <van-cell title="省" :value="data.data.prov" />
            <van-cell title="市" :value="data.data.city" />
            <van-cell title="区县" :value="data.data.area" />
            <van-cell title="邮政编码" :value="data.data.post_code"  v-if="showPostCode"/>
            <van-cell title="电话区号" :value="data.data.area_code" v-if="showAreaCode"/>
            <van-cell title="运营商" :value="data.data.isp" v-if="showIsp" />
        </van-cell-group>
        
    </div>
</template>
<script>

import 'vant/lib/cell-group/style';
import 'vant/lib/cell/style';
import {
    CellGroup,
    Cell,
} from 'vant'

export default {
    name: "aps-ali-031829",
    props:{
        data:{
            type:  Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { }
            }
        },
        showCountry:{
            type: Boolean,
            default:false,
        },
        showPostCode:{
            type: Boolean,
            default:false,
        },
         showAreaCode:{
            type: Boolean,
            default:false,
        },
        showIsp:{
            type: Boolean,
            default:false,
        },
    },
    components:{
        [CellGroup.name]:CellGroup,
        [Cell.name]:Cell,
    }
}
</script>
<style scoped>

</style>