<template>
  <a-card :title="'快递单号：' + data.no">
    <a :href="site" slot="extra" target="_blank">
      {{ data.name }}
    </a>
    <van-steps direction="vertical" :active="0" :active-color="color">
      <van-step v-for="(item, key) in list" :key="key">
        <h3>{{ item.content }}</h3>
        <p>{{ item.time }}</p>
      </van-step>
    </van-steps>
  </a-card>
</template>
<script>
import { Steps, Step } from "vant";
import "vant/lib/steps/style";
import "vant/lib/step/style";
import { Card } from "ant-design-vue";
import "ant-design-vue/lib/card/style/css";
export default {
  name: "aps-ali-026963",
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  components: {
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Card.name]: Card
  },
  computed: {
    list() {
      return this.data.list;
    },
    color() {
      return this.data.state == 3 ? "#07c160" : "#ff7800";
    },
    site() {
      return "http://" + this.data.site;
    }
  }
};
</script>
