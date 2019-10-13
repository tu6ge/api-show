import comp from './src/channel.vue'

comp.install = function (Vue) {
  Vue.component(comp.name, comp)
}

export default comp