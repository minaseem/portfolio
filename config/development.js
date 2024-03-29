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
        entry: {
            "sw": path.resolve(__dirname + "/../src/worker/sw"),
            "main": path.resolve(__dirname + "/../src/index.js")
        },
        output: {
            filename: '[name]' + hash + '.js',
            path: path.resolve(__dirname + "/../docs/"),
            chunkFilename: '[name]' + hash + '.bundle.js'
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
            }),
            new CopyWebpackPlugin([{
                from: path.resolve(__dirname + '/../src/images/favicon.ico'),
                to: path.resolve(__dirname + '/../docs/')
            },
                {
                    from: path.resolve(__dirname + '/../src/manifest.json'),
                    to: path.resolve(__dirname + '/../docs/')
                },
                {
                    from: path.resolve(__dirname + '/../src/images/author-192x192.png'),
                    to: path.resolve(__dirname + '/../docs/images/')
                },
                {
                    from: path.resolve(__dirname + '/../src/images/author-512x512.png'),
                    to: path.resolve(__dirname + '/../docs/images/')
                }
            ])
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
