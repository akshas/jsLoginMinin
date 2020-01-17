const path = require("path");
const HtmlParser = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
    entry: "./app.js",
    output: {
        filename: "build[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, ],
    },
    plugins: [
        new HtmlParser({
            template: "index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}