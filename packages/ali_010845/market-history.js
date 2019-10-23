
import kline from './src/market_history.vue'

kline.install = function (Vue) {
  Vue.component(kline.name, kline)
}

export default kline