var path = require('path');


module.exports = {
    entry: './main.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    },
    devtool: "inline-source-maps"
};