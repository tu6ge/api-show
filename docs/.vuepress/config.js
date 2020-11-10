const path = require('path')
module.exports = function(){
    return {
        title:"api show",
        base: process.env.NODE_ENV === 'production'  ? '/api-show/':'/',
        theme:'./theme/index.js',
        themeConfig: {
            nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            ],
            sidebarDepth:1,
            sidebar: [
                '/guide/',
                '/guide/quickstart',                                   //快速上手
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
        // configureWebpack: (config, isServer) => {
        //     return {
        //         devServer: {
        //             before: function(app, server, compiler) {
        //                 app.get('/some/path', function(req, res) {
        //                     res.json({ custom: 'response' });
        //                 });
        //             }
        //         }
        //     }
        // },
        plugins: [
            [
                '@api-show/aps',
                {
                    pack_path:path.resolve(__dirname, '../../packages/'),
                    sidebar:true,
                }
            ],
            // [
            //     require('./vuepress-plugin-aps/main.js'),
            //     {
            //         pack_path:path.resolve(__dirname, '../../packages/'),
            //         sidebar:true,
            //     }
            // ],
            [require('./vuepress-plugin-routes/main.js')],
            [
                '@vuepress/google-analytics',
                {
                  'ga': 'UA-150939145-1'
                }
            ],
            [
                'sitemap',
                {
                    hostname: 'https://tu6ge.github.io/api-show/',
                    exclude:['/404.html']
                }
            ],
            // [
            //     'vuepress-plugin-serve',
            //     {
            //         beforeServer(app, server) {
            //           app.get('/custom', function(req, res) {
            //               console.log('aaaaaa')
            //             res.json({ custom: 'response' })
            //             res.end()
            //           })
            //         },
            //     },
            // ]
        ]
    }
}