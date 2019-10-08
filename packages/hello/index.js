
// 导入组件，组件必须声明 name
import hello from './src/Hello.vue'

// 为组件提供 install 安装方法，供按需引入
hello.install = function (Vue) {
  Vue.component(hello.name, hello)
}

// 默认导出组件
export default hello