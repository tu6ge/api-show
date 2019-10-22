const path = require('path')

module.exports =  (options, ctx) => {
    
    return {
        name:'plugin-api-show',
        async ready() {
            console.log(ctx)
        },
        extendPageData ($page) {
            const {
                _filePath,           // 源文件的绝对路径
                _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
                _content,            // 源文件的原始内容字符串
                _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
                key,                 // 页面唯一的 hash key
                frontmatter,         // 页面的 frontmatter 对象
                regularPath,         // 当前页面遵循文件层次结构的默认链接
                path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
              } = $page
              //console.log($page._context)
        },
        chainMarkdown (config) {
            //console.log(this)
        },
        extendMarkdown: md => {
            //console.log(md)
        },
        additionalPages: [
            {
                path: '/jisutvjmyg/',
                filePath: path.resolve(__dirname, '../../packages/ali_011807/doc.md')
            }
        ]
    }
    
}