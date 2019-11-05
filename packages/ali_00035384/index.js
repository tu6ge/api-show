import comp from './src/query.vue'

comp.install = function (Vue) {
  Vue.component(comp.name, comp)
}

export default comp