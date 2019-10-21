<template>
    <div>
        <h3>{{data.showapi_res_body.name}} - 股票代码 {{data.showapi_res_body.code}}</h3>
        <el-tabs v-model="activeName" type="card" >
            <el-tab-pane v-for="(item,index) in dataList" :label="item.date.toString()" :name="'tab_'+index" :key="index">
                <v-chart :options="data_option[index]"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

//大盘股指分时线

// todo 交易量展示

import {
    Tabs,
    TabPane
} from 'element-ui'

import 'element-ui/lib/theme-chalk/tabs.css';
import 'element-ui/lib/theme-chalk/tab-pane.css';

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/candlestick'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/dataZoom';

export default {
    name:'aps-ali-010845-index-timeline',
    components:{
        'v-chart': ECharts,
        [TabPane.name]:TabPane,
        [Tabs.name]: Tabs,
    },
    props:{
        data:{
            type:  Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { }
            }
        },
    },
    data () {
        return {
            activeName:"tab_0",
        }
    },
    methods: {
        frontmatterTimes(minuteList){
            return minuteList.map(res=>{
                let _time = res.time.toString()
                return  _time.substr(0,2) 
                    + ':' + _time.substr(2,2) 
            })
        },
        frontmatterNowPrice(minuteList){
            return minuteList.map(res=>{
                 return +res.nowPrice
            })
        },
        frontmatterAvgPrice(minuteList){
            return minuteList.map(res=>{
                 return +res.avgPrice
            })
        },
    },
  computed:{
        dataList(){
            return this.data.showapi_res_body.dataList
        },
        data_option(){
            let arr = []
            this.dataList.forEach((res)=>{
                let times = this.frontmatterTimes(res.minuteList)
                let nowPrice = this.frontmatterNowPrice(res.minuteList)
                let avgPrice = this.frontmatterAvgPrice(res.minuteList)
                arr.push({
                     backgroundColor: '#21202D',
                    legend: {
                        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
                        inactiveColor: '#777',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'cross',
                            lineStyle: {
                                color: '#376df4',
                                width: 2,
                                opacity: 1
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: times,
                        axisLine: { lineStyle: { color: '#8392A5' } }
                    },
                    yAxis: 
                        {
                            type:'value',
                            scale: true,
                            max:null,
                            axisLine: { lineStyle: { color: '#8392A5' } },
                            splitLine: { show: false }
                        },
                    
                    grid: {
                        bottom: 80
                    },
                    dataZoom: [{
                        textStyle: {
                            color: '#8392A5'
                        },
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        dataBackground: {
                            areaStyle: {
                                color: '#8392A5'
                            },
                            lineStyle: {
                                opacity: 0.8,
                                color: '#8392A5'
                            }
                        },
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }, {
                        type: 'inside'
                    }],
                    animation: false,
                    series: [
                        {
                            name: '当前价',
                            type: 'line',
                            data: nowPrice,
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        },
                        {
                            name: '均价',
                            type: 'line',
                            data: avgPrice,
                            smooth: true,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            }
                        },
                    ]
                })
            })
            return arr
               
        }
    },
}
</script>