let path = require("path");

module.exports = {
    devServer: {
        port: 3000,      // 指定开发服务器的端口号
        progress: true, // 显示开启本地服务器的进度
        contentBase: "./build", // 指定本地服务器默认打开的目录
        compress: true      // 是否对代码进行压缩
    },
    mode: "development",    // 打包模式：有两种模式：development 和 production , 默认是 production 模式
    entry: "./src/index.js",    // 打包的入口文件，默认是src目录下的index.js文件
    output: {       // 配置文件默认是dist目录下的main.js文件
        filename: "index.js",   // 出口文件的文件名
        path: path.resolve(__dirname, "build")   //出口文件的路径，注意一定要是绝对路径
    }
}