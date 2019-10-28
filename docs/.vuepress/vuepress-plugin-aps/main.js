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


module.exports =  (options, ctx) => {
    if(!options.pack_path){
        throw new Error(
            '[vuepress-plugin-aps] You must specify a pack_path. \n'
            + 'For more details, refer to https://github.com/tu6ge/api-show/tree/master/docs/.vuepress/vuepress-plugin-aps. \n'
        )
    }
    let packages = getAllPackages(options.pack_path)

    packages =  packages.filter(pkg=>{
        return fs.existsSync(path.resolve(options.pack_path, pkg+'/doc.md'))
    })
    const routes = packages.map(res=>{
        return '/examples/'+res + "/"
    })
    return {
        name:'@api-show/vuepress-plugin-aps',
        additionalPages: packages.map(pkg=>{
            return {
                path: '/examples/'+pkg + "/",
                filePath: path.resolve(options.pack_path, pkg+'/doc.md')
            }
        }),
        // extendPageData ($page) {
        //     const {
        //       _filePath,           // 源文件的绝对路径
        //       _computed,           // 在构建期访问全局的计算属性，如：_computed.$localePath.
        //       _content,            // 源文件的原始内容字符串
        //       _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
        //       key,                 // 页面唯一的 hash key
        //       frontmatter,         // 页面的 frontmatter 对象
        //       regularPath,         // 当前页面遵循文件层次结构的默认链接
        //       path,                // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
        //     } = $page

        //     $page._strippedContent = _strippedContent + '<Vssue title="Vssue Demo" />'
        // },
        async clientDynamicModules () {
            if(!options.sidebar){
                return false
            }
            let siteData = ctx.getSiteData()
            siteData.themeConfig.sidebar.push({
                title: options.sidebar.title ? options.sidebar.title :'接口列表',
                collapsable: false,
                children:routes,
            })
            const code = `export const siteData = ${JSON.stringify(siteData, null, 2)}`
            return { name: 'siteData.js', content: code, dirname: 'internal' }
        }
    }
    
}