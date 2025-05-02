const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const config = {
    // 入口
    entry: path.resolve(__dirname, "src/index.js"),
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 模板文件（src）
            template: "src/HTML/index.html",
            // 输出文件（dist）
            filename: "HTML/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "CSS/index.css"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    // 模块
    module: {
        rules: [
            {
                test: /\.css$/,
                // 解析后的CSS代码插入到DOM，解析CSS代码
                // use: ["style-loader", "css-loader"]
                use: [process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset",
                generator: {
                    filename: "assets/[hash][ext][query]"
                }
            }
        ]
    },
    // 优化
    optimization: {
        minimizer: [
            // 默认优化
            "...",
            // CSS优化
            new CssMinimizerPlugin()
        ]
    },
    // 解析
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    }
}
if (process.env.NODE_ENV === "development") {
    config.devtool = "inline-source-map";
}
module.exports = config;