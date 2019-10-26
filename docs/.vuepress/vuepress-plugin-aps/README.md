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

当组件比较多是时候，我们会发现，目录会比较多，组件代码和对应的文档md文件，距离比较远，不方便维护，所以我们期望的目录结构是如下这样的

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

因为原生的vuepress规则，要求把所有的md文件写在docs目录下，vuepress可以将md文件自动注册成路由.
开发者可以根据自己的需要，把对应的路由放到顶部导航或者左侧导航

为了实现这个上面说到的目录结构，我们需要使用插件去对vuepress 做一些改变，
于是本插件就此诞生了

## Requirement

1. Vue ^2.6.10
2. Vuepress ^1.1

## Install

```bash
npm i -D @api-show/vuepress-plugin-aps
```

## Usage

在docs/.vuepress/config.js 中安装组件
```js 
const path = require('path')
module.exports = function(){
    return {
        plugins: [
            '@api-show/aps',
            //或者 '@api-show/vuepress-plugin-aps',
            {pack_path:path.resolve(__dirname, '../../packages/')}
        ]
    }
}
```

pack_path是唯一的必填参数，代表是的每个组件所在目录
