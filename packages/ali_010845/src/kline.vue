<template>
  <v-chart :options="data_option" />
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/candlestick";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/dataZoom";

import echarts_mixin from "../../mixins/echarts.js";

export default {
  mixins: [echarts_mixin],
  name: "aps-ali-010845-kline",
  components: {
    "v-chart": ECharts
  },
  props: {
    data: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    dataList() {
      return this.data.showapi_res_body.dataList;
    },
    times() {
      return this.dataList.map(res => {
        let _time = res.time ? res.time.toString() : res.minute.toString();
        let time =
          _time.substr(0, 4) +
          "/" +
          _time.substr(4, 2) +
          "/" +
          _time.substr(6, 2) +
          " " +
          _time.substr(8, 2) +
          ":" +
          _time.substr(10, 2);
        return time;
      });
    },
    data_kline() {
      return this.dataList.map(item => {
        return [+item.open, +item.close, +item.min, +item.max];
      });
    },
    volumn() {
      return this.dataList.map(item => {
        return +item.volumn;
      });
    },
    data_option() {
      return {
        backgroundColor: "#21202D",
        legend: {
          data: ["K线", "成交数"],
          inactiveColor: "#777",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1
            }
          }
        },
        xAxis: {
          type: "category",
          data: this.times,
          axisLine: { lineStyle: { color: "#8392A5" } }
        },
        yAxis: [
          {
            type: "value",
            name: "K线",
            scale: true,
            max: null,
            axisLine: { lineStyle: { color: this.echarts_colors[1] } },
            splitLine: { show: false }
          },
          {
            type: "value",
            name: "成交数",
            scale: true,
            inverse: false,
            axisLine: { lineStyle: { color: this.echarts_colors[2] } },
            splitLine: { show: false }
          }
        ],
        grid: {
          bottom: 80
        },
        dataZoom: [
          {
            textStyle: {
              color: "#8392A5"
            },
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            dataBackground: {
              areaStyle: {
                color: "#8392A5"
              },
              lineStyle: {
                opacity: 0.8,
                color: "#8392A5"
              }
            },
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          },
          {
            type: "inside"
          }
        ],
        animation: false,
        series: [
          {
            type: "candlestick",
            name: "K线",
            data: this.data_kline,
            itemStyle: {
              normal: {
                color: "#FD1050",
                color0: "#0CF49B",
                borderColor: "#FD1050",
                borderColor0: "#0CF49B"
              }
            },
            yAxisIndex: 0
          },
          {
            name: "成交数",
            type: "line",
            data: this.volumn,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            yAxisIndex: 1
          }
        ]
      };
    }
  },
  methods: {
    calculateMA(dayCount, data) {
      var result = [];
      for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data[i - j][1];
        }
        result.push(sum / dayCount);
      }
      return result;
    }
  }
};
</script>
