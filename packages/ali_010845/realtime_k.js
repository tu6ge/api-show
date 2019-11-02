import kline from "./src/realtime_k.vue";

kline.install = function(Vue) {
  Vue.component(kline.name, kline);
};

export default kline;
