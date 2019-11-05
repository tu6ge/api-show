import index from "./src/index.vue";
import kline from "./kline.js";
import market_history from "./market-history";
import timeline from "./timeline";
import index_timeline from "./index-timeline";
import real_stockinfo from "./real-stockinfo.js";
import realtime_k from "./realtime_k.js";
import sz_sh_stock_history from "./sz_sh_stock_history.js";
import stockindexsearch from "./stockindexsearch.js";
import hk_in_block from "./hk_in_block.js";
import stop_start_divide from "./stop_start_divide.js";

index.kline = kline;
index.market_history = market_history;
index.timeline = timeline;
index.index_timeline = index_timeline;
index.real_stockinfo = real_stockinfo;
index.realtime_k = realtime_k;
index.sz_sh_stock_history = sz_sh_stock_history;
index.stockindexsearch = stockindexsearch;
index.hk_in_block = hk_in_block;
index.stop_start_divide = stop_start_divide;
index.install = function(Vue) {
  Vue.component(index.name, index);
  Vue.component(kline.name, kline);
  Vue.component(market_history.name, market_history);
  Vue.component(timeline.name, timeline);
  Vue.component(index_timeline.name, index_timeline);
  Vue.component(real_stockinfo.name, real_stockinfo);
  Vue.component(realtime_k.name, realtime_k);
  Vue.component(sz_sh_stock_history.name, sz_sh_stock_history);
  Vue.component(stockindexsearch.name, stockindexsearch);
  Vue.component(hk_in_block.name, hk_in_block);
  Vue.component(stop_start_divide.name, stop_start_divide);
};

export default index;
