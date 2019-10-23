
import kline from './src/index_timeline.vue'

kline.install = function (Vue) {
  Vue.component(kline.name, kline)
}

export default kline