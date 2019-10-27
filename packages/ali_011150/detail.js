import comp from './src/detail.vue'

comp.install = function (Vue) {
  Vue.component(comp.name, comp)
}

export default comp