module.exports = {
    title:"api show说明文档",
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Github', link: 'https://github.com/tu6ge/api-show' },
        ],
        sidebar: [
            '/',
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