const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'src');
const env = process.env.ENVIRONMENT || 'DEV';
let plugins = [];
const libraryName = 'date-helper';
let outputFileJs = libraryName + '.js';

if (env === 'PROD') {
    plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]);
    outputFileJs = libraryName + '.min.js';
}

module.exports = {
    entry: path.join(sourcePath, '/' + libraryName),
    output: {
        path: path.join(__dirname, 'lib'),
        filename: outputFileJs,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
    },
    module: {
        preLoaders: [
            {
                test: /(\.es6|\.js)$/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /(\.es6|\.js)$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        root: sourcePath,
        extensions: ['', '.es6', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    plugins: plugins
};
