const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
        'vendor-trash': './src/index.tsx',
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './',
        hot: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    },

    module: {
        rules: [{
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({ template: './src/index.ejs' }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'ramda': 'R',
    },
};