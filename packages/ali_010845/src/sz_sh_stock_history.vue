<template>
  <aps-ali-010845-market-history :data="data" />
</template>
<script>
import market_history from "./market_history";
export default {
  name: "aps-ali-010845-sz-sh-stock-history",
  components: {
    [market_history.name]: market_history
  },
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
