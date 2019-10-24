<template>
    <div >
        <el-breadcrumb>
          <el-breadcrumb-item>星星科技(300256.SZ)</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="8" class="text-center">
                <el-row>5.67</el-row>
                <el-row>
                    <el-col :span="12">涨停：5.67</el-col>
                    <el-col :span="12">跌停：4.64</el-col>
                </el-row>
                <el-row >2019-10-24 15:00:03</el-row>
            </el-col>
            <el-col :span="5">
                <el-row>今  开：	5.02</el-row>
                <el-row>最  高：	5.67</el-row>
                <el-row>最  低：	5.02</el-row>
                <el-row>昨  收：	5.15</el-row>
                <el-row>总股本：	9.58亿</el-row>
            </el-col>
            <el-col :span="7">
                <el-row>成交量：	206.91万手</el-row>
                <el-row>成交额：	11.43亿元</el-row>
                <el-row>总市值：	54.31亿</el-row>
                <el-row>流通值：	45.02亿</el-row>
                <el-row>流通股：	7.94亿</el-row>
            </el-col>
            <el-col :span="4">
                <el-row>振  幅：	12.62%</el-row>
                <el-row>换手率：26.06%</el-row>
                <el-row>市净率：	3.34</el-row>
                <el-row>市盈率：	--</el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/col.css';
import 'element-ui/lib/theme-chalk/row.css';
import 'element-ui/lib/theme-chalk/breadcrumb.css';
import 'element-ui/lib/theme-chalk/breadcrumb-item.css';
import {
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem
} from 'element-ui'
export default {
    name:'aps-ali-010845-real-stockinfo',
     props:{
        data:{
            type:  Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { }
            }
        },
    },
    components:{
        [Row.name]:Row,
        [Col.name]: Col,
        [Breadcrumb.name]: Breadcrumb,
        [BreadcrumbItem.name]: BreadcrumbItem,
    },

}
</script>