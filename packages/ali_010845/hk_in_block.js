import kline from "./src/hk_in_block.vue";

kline.install = function(Vue) {
  Vue.component(kline.name, kline);
};

export default kline;
