<template>
    <div class="aps-ali-011150-detail">
        <h1>{{data.title}}</h1>
        <div class="top-bar">
            <div class='datetime'>{{data.pubDate}}</div>
            <div class='source' >{{data.source}}</div>
        </div>
        <div class="content">
            <template v-for="item in data.allList">
                <el-row>
                    <template v-if="isString(item)">
                        <div class="text">{{item}}</div>
                    </template>
                    <template v-else>
                         <el-image :src="item.url"></el-image>
                    </template>
                </el-row>
            </template>
        </div>
    </div>
</template>
<script>

import 'element-ui/lib/theme-chalk/image.css';

import {
    Image,
    Row
} from 'element-ui'

export default {
    name: "aps-ali-011150-detail",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    components:{
        [Image.name]:Image,
        [Row.name]:Row,
    },
    methods:{
        isString(str){
            return  (typeof str=='string') && str.constructor==String
        }
    }
}
</script>
<style scoped lang="scss">
.aps-ali-011150-detail{
    .top-bar{
        border-top:1px solid #e5e5e5;
        border-bottom:1px solid #e5e5e5;
        padding: 10px 0;
        .datetime{
            display:inline;
            color:#888;
        }
        .source{
            display:inline;
            margin-left:5px;
            color: #dd0000;
        }
    }
    .content{
        .el-image{
            margin:0 auto;
            display:block;
        }
        .el-row{
            margin:20px 0;
            
        }
        .text{
            text-indent:2em;
        }
    }
}
</style>