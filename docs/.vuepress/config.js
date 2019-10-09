module.exports = {
    title:"api show",
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
        ],
        sidebar: [
            '/guide/',
            { 
                title:'分组一',
                children:[
                    ['/hello','Hello'],
                ]
                
            }
        ],
        displayAllHeaders: true,
        lastUpdated: '最后更新时间',
        repo:'tu6ge/api-show',
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
      }

}