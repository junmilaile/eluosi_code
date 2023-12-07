
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/**
 * @type {Configuration}
 */
module.exports = {
    entry: "./src/index.ts",
    output: {
       path: path.resolve("./dist"),
       filename: "js/bundle.js" 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /.ts$/, loader: "ts-loader"}
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}
