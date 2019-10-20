
import kline from './src/kline.vue'

kline.install = function (Vue) {
  Vue.component(kline.name, kline)
}

export default kline