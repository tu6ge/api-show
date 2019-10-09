
import hello from './src/Hello.vue'

hello.install = function (Vue) {
  Vue.component(hello.name, hello)
}

export default hello