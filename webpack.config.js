var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

