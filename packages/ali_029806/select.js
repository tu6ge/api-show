import comp from './src/select.vue'

comp.install = function (Vue) {
  Vue.component(comp.name, comp)
}

export default comp