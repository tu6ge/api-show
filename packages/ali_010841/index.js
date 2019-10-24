import comp from './src/query.vue'
import bank10 from './bank10.js'

comp.bank10 = bank10
comp.install = function (Vue) {
  Vue.component(comp.name, comp)
  Vue.component(bank10.name, bank10)
}

export default comp