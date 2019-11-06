import comp from './src/query.vue'
import select from './select.js'

comp.select = select
comp.install = function (Vue) {
  Vue.component(comp.name, comp)
  Vue.component(select.name, select)
}

export default comp