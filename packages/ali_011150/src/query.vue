<template>
    <a-list itemLayout="vertical" size="large"  :dataSource="contentlist">
        <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
        <img
            slot="extra"
            width="200"
            alt="logo"
            v-if="item.imageurls"
            :src="item.imageurls[0].url"
        />
        <a-list-item-meta :description="item.source + ' '+item.pubDate">
            <a slot="title" @click="toDetail(item)">{{item.title}}</a>
        </a-list-item-meta>
        {{item.desc.substr(0,80) + '...'}}
        </a-list-item>
    </a-list>
</template>
<script>

import 'ant-design-vue/lib/list/style/css'

import {
    List,
} from 'ant-design-vue'

export default {
    name: "aps-ali-011150",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    components:{
        [List.name]:List,
        [List.Item.name]:List.Item,
        [List.Item.Meta.name]:List.Item.Meta,
    },
    computed:{
        contentlist(){
            return this.data.showapi_res_body.pagebean.contentlist
        },
    },
    methods:{
        toDetail(item){
            this.$emit('show',item)
        }
    }
}
</script>
<style scoped lang="scss">
// .aps-ali-011150{}
</style>