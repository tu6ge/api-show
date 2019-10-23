<template>
    <aps-ali-010845-index-timeline :data="data" />
</template>
<script>

//股票实时分时线数据

import timeline from './index_timeline'

export default {
    name:'aps-ali-010845-timeline',
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
        [timeline.name]:timeline,
    }
}
</script>