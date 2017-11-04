const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractPlugin = new ExtractTextPlugin({ filename: 'bundle.css' });

module.exports = {
    context: __dirname,
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",
    devServer: {
        contentBase: './',
        hot: true
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"]
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                //use: extractPlugin.extract({ // for prod build. Bother.
                    // use: [
                    //     'css-loader',
                    //     {
                    //         loader: 'sass-loader',
                    //         options: {
                    //         }
                    //     }]
                //})
            }
        ]
    },

    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({ filename: 'index.html', template: 'index.html' }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};