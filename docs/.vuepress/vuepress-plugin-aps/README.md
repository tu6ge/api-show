# 方便编写vue组件包的vuepress插件

在编写vue组件的时候，并使用vuepress进行文档编写的时候
目录结构一般是这样的

```
docs
| packA.md
└ packB.md
packages
└---packA
|  |--src 
|  |   └ demo.vue
|  └--index.js
└---packB
|  |--src 
|  |   └ demo.vue
|  └--index.js
```

当组件比较多是时候，我们会发现，目录会比较多，组件代码和对应的文档md文件，距离比较远，容易出现误操作的情况，所以我们期望的目录结构是如下这样的

```
packages
└---packA
|  |--src 
|  |   └ demo.vue
|  |--doc.md
|  └--index.js
└---packB
|  |--src 
|  |   └ demo.vue
|  |--doc.md
|  └--index.js
```

这样每个组件的md文档就放在了对应的组件目录下，方便代码维护
而本插件，就是为了方便做这个事的
把packages目录下的