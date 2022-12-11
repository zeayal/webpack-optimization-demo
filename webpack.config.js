const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print:'./src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '自定义标题'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, 'dist'),
    },
    
}