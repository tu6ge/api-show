import index from './src/index.vue'
import kline from './kline.js'

index.kline = kline
index.install = function (Vue) {
  Vue.component(index.name, index)
  Vue.component(kline.name, kline)
}

export default index