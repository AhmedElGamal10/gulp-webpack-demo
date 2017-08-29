const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./src/js/main.js"],
    output: {
        filename: './bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}