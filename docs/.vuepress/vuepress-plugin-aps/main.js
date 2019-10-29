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

    let file = options.file_name ? options.file_name : 'README.md'

    packages =  packages.filter(pkg=>{
        return fs.existsSync(path.resolve(options.pack_path, pkg+'/' + file))
    })
    const routes = packages.map(res=>{
        return '/examples/'+res + "/"
    })
    return {
        name:'@api-show/vuepress-plugin-aps',
        additionalPages: packages.map(pkg=>{
            return {
                path: '/examples/'+pkg + "/",
                filePath: path.resolve(options.pack_path, pkg+'/' + file)
            }
        }),
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