<template>
    <div  class="aps-ali-011811">
        <table class="aps-ali-011811--table">
            <tbody>
                <tr class="aps-ali-011811--title">
                    <th colspan="2">
                        <h1>
                            {{detail.name}}
                        </h1>
                    </th>
                </tr>
            </tbody>
            <tbody v-for="(array,key) in scale" :key="key">
                <tr class="aps-ali-011811--header">
                    <th colspan="2">
                        <h2>
                            {{i18n[key]}}
                        </h2>
                    </th>
                </tr>
                <tr class="aps-ali-011811--item" v-for="(item,k) in array" :key="k">
                    <th>{{item}}</th>
                    <td>
                        <template v-if="detail[key][k]">
                            <template v-if="k=='color'">
                                <div class="aps-ali-011811--color" v-html="colorHtml(detail[key][k])"></div>
                            </template>
                            <template v-else>
                                {{detail[key][k]}}
                            </template>
                        </template>
                        <template v-else>-</template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import field from './field.js'
export default {
    name: "aps-ali-011811",
    props:{
        data:{
            type:  Object,
            default: function () {
                return { }
            }
        },
    },
    data () {
        return {
            i18n:field.i18n,
            scale:field.scale
        }
    },
    components:{

    },
    computed: {
        detail(){
            return this.data.result
        }
    },
    methods: {
        colorHtml(str){
            let color_list = str.split('|');
            let list = []
            let html = `<ul class="color-list">`;
            color_list.forEach(res=>{
                let item = res.split(',')
                if(item[0] && item[1]){
                    list.push({
                        name:item[0],
                        color:item[1],
                    })
                    html += `<li ><span style="background:`+item[1]+`" title="`+item[0]+`"></span></li>`
                }
            })
            html += '</ul>'
            return html
            return `<ul class="color-list">
                <li ><span style="background:red"></span></li>
                <li ><span style="background:green"></span></li>
            </ul>`;
        }
    }
}
</script>
<style  lang="scss">
.aps-ali-011811{
    &--table{ 
        border-left: 1px solid #d9e5f3;
        border-bottom: 1px solid #d9e5f3;
    }
    &--title{
          background-color:#f0f3f8;
          border-top: solid 1px #d9e5f3;
        border-right: solid 1px #d9e5f3;
        h1{
            height: 35px;
            color: #3b5998;
            line-height: 35px;
            font-size: 14px;
            font-weight: bold;
            margin: 0px;
            text-align: center;
        }
    }
    &--header{
        background-color:#f0f3f8;
          border-top: solid 1px #d9e5f3;
            border-right: solid 1px #d9e5f3;
        h2{
            height: 35px;
            color: #993000;
            line-height: 35px;
            font-size: 12px;
            font-weight: bold;
            text-align: left;
            margin: 0px;
            padding-left: 15px;
        }
        
    }
    &--item{
        th{
            width:200px;
            height: 30px;
            text-align: right;
            font-weight: 400;
            vertical-align: middle;
            color:#3b5998;
                padding-right: 10px;
            border-top: solid 1px #d9e5f3;
            border-right: solid 1px #d9e5f3;
        }
        td{
            width:177px;
            height: 30px;
            vertical-align: middle;
            border-top: solid 1px #d9e5f3;
            border-right: solid 1px #d9e5f3;
                padding: 10px;
        }
    }
    &--color{
        ul{
            list-style: none;
            min-height: 82px;
            li{
                float: left;
                width: 18px;
                height: 18px;
                line-height: 0;
                margin: 5px 3px;
                span{
                    display: block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #cecece;
                }
            }
        }
    }
}
</style>