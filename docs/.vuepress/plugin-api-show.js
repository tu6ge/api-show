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
        })
    }
    
}