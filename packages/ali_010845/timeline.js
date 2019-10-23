
import timeline from './src/timeline.vue'

timeline.install = function (Vue) {
  Vue.component(timeline.name, timeline)
}

export default timeline