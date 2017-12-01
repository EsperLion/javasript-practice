var path = require('path');

console.log(__dirname);

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    partialDirs: [
                        path.join(__dirname, '')
                    ]
                }
            }
        ]
    },
    devtool: "inline-source-maps"
};