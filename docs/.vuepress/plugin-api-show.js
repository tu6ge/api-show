const path = require('path')

module.exports =  (options, ctx) => {
    //console.log(options)
    return {
        name:'plugin-api-show',
        additionalPages: options.packages.map(pkg=>{
            return {
                path: '/examples/'+pkg + "/",
                filePath: path.resolve(__dirname, '../../packages/'+pkg+'/doc.md')
            }
        }),
        async clientDynamicModules () {
            let siteData = ctx.getSiteData()
            siteData.title = 'plugin update title'
            const code = `export const siteData = ${JSON.stringify(siteData, null, 2)}`
            return { name: 'siteData.js', content: code, dirname: 'internal' }
        }
    }
    
}