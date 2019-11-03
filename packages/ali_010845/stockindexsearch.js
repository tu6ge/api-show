import kline from "./src/stockindexsearch.vue";

kline.install = function(Vue) {
  Vue.component(kline.name, kline);
};

export default kline;
