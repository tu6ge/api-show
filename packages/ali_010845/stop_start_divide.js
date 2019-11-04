import kline from "./src/stop_start_divide.vue";

kline.install = function(Vue) {
  Vue.component(kline.name, kline);
};

export default kline;
