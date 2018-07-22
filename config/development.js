/**
 * Created by imamudinnaseem on 6/5/18
 */

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var hash = '';//".[contenthash]";

module.exports = {
    webpack: {
        output: {
            filename: '[name]' + hash + '.js',
            path: path.resolve(__dirname + "/../build/"),
            chunkFilename: '[name]' + hash + '.bundle.js'
        },
        externals: {
            Raven: "Raven"
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name]' + hash + '.css',
                chunkFilename: '[id]' + hash + '.css'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + "/../src/index.html"),//'/src/index.html',
                minify: {collapseWhitespace: true},
                inject: true
            })
        ],
        module: {
            rules: [
                {test: /\.ts?$/, loader: "ts-loader"},
                {
                    test: /\.js$/, use: "babel-loader", exclude: /node_modules/,
                    sideEffects: false
                },
                {
                    test: /\.(less|css)$/,
                    include: [path.resolve(__dirname, '../src/')],
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {modules: false, sourceMap: true, importLoaders: 1, minimize: true}
                        },
                        {
                            loader: `postcss-loader`,
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    autoprefixer
                                ]
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {sourceMap: true}
                        }
                    ]
                },
                {test: /\.(png|svg|jpg)$/, use: 'file-loader?name=./images/[name].[ext]'}
            ]
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            port: process.env.PORT || 3333,
            host: 'localhost',
            publicPath: '/',
            historyApiFallback: true,
            open: false,
            openPage: '',
            proxy: {
                // OPTIONAL: proxy configuration:
                // '/optional-prefix/!**': { // path pattern to rewrite
                //   target: 'http://target-host.com',
                //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
                // }
            }
        },
        watch: true
    }
}
