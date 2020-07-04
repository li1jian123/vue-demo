//引入node中的path，处理文件路径共计
const path =require("path")
module.exports={
    mode : "development",//development 开发 production 生产
    //如口
    entry :"./src/main.js",
    //出口
    output:{
       // path :'./dist/', 错误
        path :path.join(__dirname,"./dist/"),
        filename :'bundle' +'.js'
    }

}