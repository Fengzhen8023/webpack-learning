let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtract = require('mini-css-extract-plugin')
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let TerserJSPlugin = require('terser-webpack-plugin');
let Webpack = require('webpack')

module.exports = {
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new TerserJSPlugin
        ]
    },
    devServer: {
        port: 3000, // 指定开发服务器的端口号
        progress: true, // 显示开启本地服务器的进度
        contentBase: "./build", // 指定本地服务器默认打开的目录
        compress: true // 是否对代码进行压缩
    },
    mode: "production", // 打包模式：有两种模式：development 和 production , 默认是 production 模式
    devtool: "eval-source-map",
    entry: "./src/index.js", // 打包的入口文件，默认是src目录下的index.js文件
    output: { // 配置文件默认是dist目录下的main.js文件
        filename: "index.js", // 出口文件的文件名
        path: path.resolve(__dirname, "build"), //出口文件的路径，注意一定要是绝对路径
        // publicPath: 'http://www.fengzhen8023.com/myProject/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        }),
        new MiniCssExtract({
            filename: 'css/main.css'
        }),
        // new Webpack.ProvidePlugin({
        //     $: 'jquery'
        // })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: require.resolve('jquery'), // 匹配到引入jquery的文件
                use: 'expose-loader?$' // 使用 expose-loader 进行处理
            },
            {
                test: /\.js$/, // 匹配 .js 文件
                use: {
                    loader: 'eslint-loader', // 使用这个loader对匹配到的文件进行处理
                    options: {
                        enforce: 'pre' // 将eslint-loader设置成前置loader，首先用这个loader处理文件
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env' // 预设，将ES6转成ES5
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties', // 将ES7语法中的class转成ES5
                            '@babel/plugin-transform-runtime' // 转换Generator、Promise等语法
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 2 * 1024, // 小于2k的图片，直接使用Base64编码进行处理
            //             outputPath: '/image/'
            //         }
            //     }
            // },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
        ]
    }
}