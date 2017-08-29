const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ["./src/js/main.js"],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dest')
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}