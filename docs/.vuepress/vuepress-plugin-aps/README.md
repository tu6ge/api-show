# 方便编写vue组件包的vuepress插件

在编写vue组件的时候，目录结构一般是这样的

```
docs
| packA.md
└ packB.md
package
└---packA
|  |--src 
|  |   └ demo.vue
|  └--index.js
└---packB
|  |--src 
|  |   └ demo.vue
|  └--index.js
```