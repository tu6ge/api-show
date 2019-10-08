
// 导入组件，组件必须声明 name
import php from './src/Php.vue'

// 为组件提供 install 安装方法，供按需引入
php.install = function (Vue) {
  Vue.component(php.name, php)
}

// 默认导出组件
export default php