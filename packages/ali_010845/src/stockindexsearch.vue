<template>
  <div>
    <el-table :data="list">
      <el-table-column prop="market" label="市场"> </el-table-column>
      <el-table-column prop="name" label="股票名称"> </el-table-column>
      <el-table-column prop="code" label="编码"> </el-table-column>
      <el-table-column prop="pinyin" label="拼音首字母"> </el-table-column>
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
  name: "aps-ali-010845-stockindexsearch",
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
      return this.data.showapi_res_body.contentlist;
    },

    allNum() {
      return this.data.showapi_res_body.allNum;
    },
    maxResult() {
      return this.data.showapi_res_body.maxResult;
    },
    allPages() {
      return this.data.showapi_res_body.allPages;
    }
  },
  methods: {
    handleCurrentChange(page) {
      this.$emit("current-change", page);
    }
  }
};
</script>
