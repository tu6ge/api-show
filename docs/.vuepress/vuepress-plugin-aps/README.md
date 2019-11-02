# A vuepress plug-in for writing Vue component library documents

[中文文档](https://github.com/tu6ge/api-show/blob/master/docs/.vuepress/vuepress-plugin-aps/README-zh.md)

When writing the Vue component library and using vuepress for document writing

The directory structure is generally like this

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

When there are many components, we will find that the component code and the corresponding document MD file are far away from each other and are not easy to maintain. Therefore, our expected directory structure is as follows


```
packages
└---packA
|  |--src
|  |   └ demo.vue
|  |--README.md
|  └--index.js
└---packB
|  |--src
|  |   └ demo.vue
|  |--README.md
|  └--index.js
```

Because of the native rules of vuepress, it is required to write all MD files in the docs directory. Vuepress can automatically register MD files as routes.

Developers can put the corresponding route to the top navigation or left navigation according to their own needs



In order to implement the above directory structure, we need to use plug-ins to make some settings for vuepress


So this plugin was born


## Requirement

1. Vue ^2.6.10
2. Vuepress ^1.1

## Install

```bash
npm i -D @api-show/vuepress-plugin-aps
```

## Usage


Install this plugin in docs/.vuepress/config.js

```js
const path = require('path')
module.exports = function(){
    return {
        plugins: [
            '@api-show/aps',
            //Or '@api-show/vuepress-plugin-aps',
            {
                pack_path:path.resolve(__dirname, '../../packages/'), //Specify the directory where the component is located
                //sidebar:'true',
                //Or sidebar:{
                //    title:'Api List'
                //}
            }
        ]
    }
}
```

`pack_path` is the only required parameter, which represents the directory of all components

Other If you set a parameter 'sidebar' to make it equal to 'true'`

A group "plugins list" will also be added to the menu on the left side of the document


If you want to change the name of the group, you can also customize it by setting a `title` parameter in `sidebar`
