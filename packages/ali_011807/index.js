import query from './src/query.vue'
import channel from './channel.js'

query.channel = channel

query.install = function (Vue) {
  Vue.component(query.name, query)
  Vue.component(channel.name, channel)
}

export default query