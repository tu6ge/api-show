import channel from './src/channel.vue'

channel.install = function (Vue) {
  Vue.component(channel.name, channel)
}

export default channel