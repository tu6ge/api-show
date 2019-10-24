import comp from './src/real_stockinfo.vue'

comp.install = function (Vue) {
    Vue.component(comp.name, comp)
}
export default comp