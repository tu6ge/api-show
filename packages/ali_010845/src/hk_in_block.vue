<template>
  <div>
    <el-table :data="list">
      <el-table-column prop="market" label="市场"> </el-table-column>
      <el-table-column prop="name" label="股票名称"> </el-table-column>
      <el-table-column prop="code" label="编码"> </el-table-column>
      <el-table-column prop="totalcapital_val" label="总市值（万元）">
      </el-table-column>
      <el-table-column prop="currcapital_val" label="流通市值（万元）">
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="showPage"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
      :page-count="allPages"
      :page-size="maxResult"
      layout="total, prev, pager, next"
      :total="allNum"
    >
    </el-pagination>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/table.css";
import "element-ui/lib/theme-chalk/table-column.css";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/pagination.css";
import { Table, TableColumn, Pagination } from "element-ui";
export default {
  name: "aps-ali-010845-hk-in-block",
  props: {
    data: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function() {
        return {};
      }
    },
    showPage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentPage: this.data.showapi_res_body.currentPage
    };
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Pagination.name]: Pagination
  },
  computed: {
    list() {
      return this.data.showapi_res_body.pagebean.contentlist;
    },

    allNum() {
      return this.data.showapi_res_body.pagebean.allNum;
    },
    maxResult() {
      return this.data.showapi_res_body.pagebean.maxResult;
    },
    allPages() {
      return this.data.showapi_res_body.pagebean.allPages;
    }
  },
  methods: {
    handleCurrentChange(page) {
      this.$emit("current-change", page);
    }
  }
};
</script>
