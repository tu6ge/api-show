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
const packages = getAllPackages(path.resolve(__dirname, '../../../packages/'));

module.exports =  (options, ctx) => {
    return {
        name:'@api-show/vuepress-plugin-routes',
        additionalPages: pkg=>{
            return {
                path: "/demo1",
                content: "<script>console.log('demo1');</script>",
            }
        },
    }
}