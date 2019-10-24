const fs = require('fs')
const path = require('path')

function getAllPackages(pack_path) {
    let array = []
    let files = fs.readdirSync(pack_path)
    files.forEach(function (item) {
        let fPath = path.join(pack_path,item)
        let stat = fs.statSync(fPath)
        if(stat.isDirectory() === true) {
            array.push(item)
        }
    })
    return array
}
const packages = getAllPackages(path.resolve(__dirname, '../../packages/'))
const routes = packages.map(res=>{
    return '/examples/'+res + "/"
})

module.exports = function(){
    return {
        title:"api show",
        base: process.env.NODE_ENV === 'production'  ? '/api-show/':'/',
        //theme: require('./theme/index.js'),
        themeConfig: {
            nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            ],
            sidebarDepth:1,
            sidebar: [
                '/guide/',
                '/guide/quickstart',                                   //快速上手
                {
                    title:'接口列表',
                    collapsable: false,
                    children:routes,
                }
                
            ],
            displayAllHeaders: false,
            lastUpdated: '最后更新时间',
            repo:'tu6ge/api-show',
            docsDir: 'docs',
            // 默认是 false, 设置为 true 来启用
            editLinks: true,
            // 默认为 "Edit this page"
            editLinkText: '帮助我们改善此页面！',
            
        },
        plugins: [
            [
                require('./plugin-api-show.js'),
                {packages}
            ]
        ]
    }
}