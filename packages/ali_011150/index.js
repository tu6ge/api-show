import comp from './src/query.vue'
import detail from './src/detail.vue'

comp.detail = detail
comp.install = function (Vue) {
  Vue.component(comp.name, comp)
  Vue.component(detail.name, detail)
}

export default comp