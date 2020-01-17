const path = require("path");
const HtmlParser = require("html-webpack-plugin");
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
    plugins: [
        new HtmlParser({
            template: "index.html"
        }),
        new CleanWebpackPlugin()
    ]
}