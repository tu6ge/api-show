
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
      },

      myData:{
        ali_57002003_011807:{
            "status": "0",
            "msg": "ok",
            "result": {
                "tvid": "435",
                "name": "CCTV-3（综艺）",
                "date": "2015-08-09",
                "program": [
                    {
                        "name": "综艺喜乐汇",
                        "starttime": "01:18"
                    },
                    {
                        "name": "综艺喜乐汇",
                        "starttime": "02:36"
                    },
                    {
                        "name": "2014中国梦-我梦最美",
                        "starttime": "03:55"
                    }
                ]
            }
        }
      }
}