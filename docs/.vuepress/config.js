
module.exports = {
    title:"api show",
    base:'/api-show.github.io/',
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
        ],
        sidebarDepth:1,
        
        sidebar: [
            '/guide/',{
                title:'接口列表',
                collapsable: false,
                children:[
                    ['/guide/jisutvjmyg','电视节目预告'], //电视节目预告
                    '/guide/ipquery',       //ip地址归属地查询
                    '/guide/shares',       //股票行情
                    '/guide/pdp-elite',       //性格分析
                    '/guide/ocr-businesslicense',       //营业执照图像识别
                    '/guide/ai-guidance-elite',       //AI智能导诊
                    '/guide/ai-driving-vehicle-license',       //驾驶证识别
                    '/guide/todayoil',       //今日油价
                    '/guide/gold',       //黄金价格查询
                    '/guide/finance-calendar',       //财经日历
                    '/guide/waihui',       //外汇牌价汇率
                    '/guide/bankcard',       //银行卡归属地查询
                ]
            }
            
        ],
        displayAllHeaders: false,
        lastUpdated: '最后更新时间',
        repo:'tu6ge/api-show',
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
      },
}