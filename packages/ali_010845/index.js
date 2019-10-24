import index from './src/index.vue'
import kline from './kline.js'
import market_history from "./market-history"
import timeline from "./timeline"
import index_timeline from "./index-timeline"
import real_stockinfo from "./real-stockinfo.js"


index.kline = kline
index.market_history = market_history
index.timeline = timeline
index.index_timeline = index_timeline
index.real_stockinfo = real_stockinfo
index.install = function (Vue) {
  Vue.component(index.name, index)
  Vue.component(kline.name, kline)
  Vue.component(market_history.name, market_history)
  Vue.component(timeline.name, timeline)
  Vue.component(index_timeline.name, index_timeline)
  Vue.component(real_stockinfo.name, real_stockinfo)
}

export default index