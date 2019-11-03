<template>
  <div class="aps-ali-011033">
    <template v-if="isOne">
      <a-card :title="info.ct" style="width: 300px">
        <div slot="extra">
          {{ info.prov }}
        </div>

        <van-cell title="0号柴油" :value="info.p0" value-class="value" />
        <van-cell title="89号汽油" :value="info.p89" value-class="value" />
        <van-cell title="90号汽油" :value="info.p90" value-class="value" />
        <van-cell title="92号汽油" :value="info.p92" value-class="value" />
        <van-cell title="93号汽油" :value="info.p93" value-class="value" />
        <van-cell title="95号汽油" :value="info.p95" value-class="value" />
        <van-cell title="97号汽油" :value="info.p97" value-class="value" />
      </a-card>
    </template>
    <template v-else>
      <el-table border height="300" :data="list">
        <el-table-column prop="prov" label="省份" fixed width="100">
        </el-table-column>
        <el-table-column prop="ct" label="时间" fixed width="180">
        </el-table-column>
        <el-table-column prop="p90" label="90号汽油" sortable width="110">
        </el-table-column>
        <el-table-column prop="p0" label="0号柴油" sortable width="110">
        </el-table-column>
        <el-table-column prop="p95" label="95号汽油" sortable width="110">
        </el-table-column>
        <el-table-column prop="p97" label="97号汽油" sortable width="110">
        </el-table-column>
        <el-table-column prop="p89" label="89号汽油" sortable width="110">
        </el-table-column>
        <el-table-column prop="p92" label="92号汽油" sortable width="110">
        </el-table-column>

        <el-table-column prop="p93" label="93号汽油" sortable width="110">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/table.css";
import "element-ui/lib/theme-chalk/table-column.css";
import "ant-design-vue/lib/card/style/css";
import "vant/lib/cell/style";
//#1989fa
import { Table, TableColumn } from "element-ui";
import { Card } from "ant-design-vue";
import { Cell } from "vant";

export default {
  name: "aps-ali-011033",
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Card.name]: Card,
    [Cell.name]: Cell
  },
  computed: {
    list() {
      return this.data.showapi_res_body.list.map(res => {
        res.p0 = +res.p0;
        res.p89 = +res.p89;
        res.p90 = +res.p90;
        res.p92 = +res.p92;
        res.p93 = +res.p93;
        res.p95 = +res.p95;
        res.p97 = +res.p97;
        return res;
      });
    },
    isOne() {
      return this.list.length == 1;
    },
    info() {
      return this.list ? this.list[0] : {};
    }
  }
};
</script>
<style scoped lang="scss">
.aps-ali-011033 {
  .value {
    color: #1989fa;
  }
}
</style>
