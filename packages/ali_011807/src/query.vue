<template>
    <div >
        
        <a-card :title="data.result.name" style="width: 300px">
            <a href="#" slot="extra" >
                {{data.result.date}}
            </a>
            <el-timeline >
                <el-timeline-item
                v-for="(program, index) in data.result.program"
                :key="index"
                :timestamp="program.starttime">
                {{program.name}}
                </el-timeline-item>
            </el-timeline>
        </a-card>
        
    </div>
</template>
<script>

import 'element-ui/lib/theme-chalk/timeline.css';
import 'element-ui/lib/theme-chalk/timeline-item.css';
import 'ant-design-vue/lib/card/style/css'
import {
    Timeline,
    TimelineItem
} from 'element-ui'
import {
    Card
} from 'ant-design-vue'

export default {
    name: "aps-ali-011807",
    props:{
        data:{
            type:  Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { }
            }
        }
    },
    // mounted(){
    //     console.log(this.data)
    // },
    components:{
        [TimelineItem.name]:TimelineItem,
        [Timeline.name]:Timeline,
        [Card.name]:Card,
    }
}
</script>
<style scoped>

</style>