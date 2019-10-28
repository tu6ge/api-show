
# 快速上手



## 完整引入

在 main.js 中写入以下内容：

```js 
import Vue from 'vue';
import apishow from 'api-show';
import 'api-show/lib/apishow.css';
import App from './App.vue';

Vue.use(apishow);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了 apishow 的引入。需要注意的是，样式文件需要单独引入。

## 按需引入

接下来，如果你只希望引入部分组件，比如 ali_011807 和 ali_011807.channel，那么需要在 main.js 中写入以下内容：

```js 
import Vue from 'vue';
import { ali_011807 } from 'api-show';
import App from './App.vue';

Vue.component(ali_011807.name, ali_011807);
Vue.component(ali_011807.channel.name, ali_011807.channel);
/* 或写为
 * Vue.use(ali_011807)
 * Vue.use(ali_011807.channel)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

<!-- <Vssue title="Vssue Demo" /> -->