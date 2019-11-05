<template>
  <el-container>
    <el-header>{{ body.date }} 除权停复牌上市股票</el-header>
    <el-main>
      <el-tabs tab-position="left">
        <el-tab-pane
          v-for="(item, key) in groupActive"
          :key="key"
          :label="groups[item]"
        >
          <el-table :data="body[item]">
            <el-table-column prop="name" label="股票名称"> </el-table-column>
            <el-table-column prop="code" label="编码"> </el-table-column>
            <el-table-column prop="reason" label="原因"> </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
import {
  Container,
  Header,
  Main,
  Tabs,
  TabPane,
  Table,
  TableColumn
} from "element-ui";
import "element-ui/lib/theme-chalk/container.css";
import "element-ui/lib/theme-chalk/tabs.css";
import "element-ui/lib/theme-chalk/tab-pane.css";
import "element-ui/lib/theme-chalk/table.css";
import "element-ui/lib/theme-chalk/table-column.css";
export default {
  name: "aps-ali-010845-stop-start-divide",
  props: {
    data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      groups: {
        stopList: "停牌股票",
        recoverList: "复牌股票",
        startList: "首发上市股票",
        newStockNetPublishList: "首发新股网上发行",
        stockholderList: "股东资格登记日",
        addNewStockNetPublishList: "增发新股上市",
        shareRegistList: "分红转增股权登记",
        shareDividendList: "除权除息",
        stockAlarmList: "退市风险警示"
      }
    };
  },
  components: {
    [Container.name]: Container,
    [Header.name]: Header,
    [Main.name]: Main,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  computed: {
    body() {
      return this.data.showapi_res_body;
    },
    groupActive() {
      let rs = [];
      for (let i in this.groups) {
        if (this.body[i]) {
          rs.push(i);
        }
      }
      return rs;
    }
  }
};
</script>
