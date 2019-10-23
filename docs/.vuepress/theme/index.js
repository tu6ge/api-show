
module.exports = (themeConfig, ctx) => {
    //console.log(themeConfig)
    return {
        extend: '@vuepress/theme-default',
        globalLayout: './layouts/Layout.vue',
        themeConfig:{
            nav: [
                { text: '首页', link: '/' },
                { text: '指南', link: '/guide/' },
              ],
        }
    }
}