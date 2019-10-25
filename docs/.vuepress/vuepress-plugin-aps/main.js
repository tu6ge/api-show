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
    const packages = getAllPackages(options.pack_path)
    const routes = packages.map(res=>{
        return '/examples/'+res + "/"
    })
    return {
        name:'plugin-api-show',
        additionalPages: packages.map(pkg=>{
            return {
                path: '/examples/'+pkg + "/",
                filePath: path.resolve(options.pack_path, pkg+'/doc.md')
            }
        }),
        async clientDynamicModules () {
            let siteData = ctx.getSiteData()
            siteData.themeConfig.sidebar.push({
                title:'接口列表',
                collapsable: false,
                children:routes,
            })
            const code = `export const siteData = ${JSON.stringify(siteData, null, 2)}`
            return { name: 'siteData.js', content: code, dirname: 'internal' }
        }
    }
    
}