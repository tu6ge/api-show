import kline from "./src/sz_sh_stock_history.vue";

kline.install = function(Vue) {
  Vue.component(kline.name, kline);
};

export default kline;
