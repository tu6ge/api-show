<template>
  <kline :data="data" />
</template>
<script>
import kline from "./kline.vue";
export default {
  name: "aps-ali-010845-timeline-k",
  props: {
    data: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return {};
      }
    }
  },
  components: {
    kline
  }
};
</script>
