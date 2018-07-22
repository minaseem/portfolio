/**
 * Created by imamudinnaseem on 6/5/18
 */

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const CSS_SOURCE_MAPS = ENV !== 'production';

module.exports = {
    webpack: {
        // entry: "./src/index.js",
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname + "/../docs/"),
            chunkFilename: '[name].bundle.js'
        },
        externals: {
            Raven: "Raven"
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname + "/../src/index.html"),//'/src/index.html',
                minify: {collapseWhitespace: true},
                inject: true
            })
            //new webpack.LoaderOptionsPlugin({options: {}})
        ],
        module: {
            rules: [
                {test: /\.ts?$/, loader: "ts-loader"},
                {
                    test: /\.js$/, use: "babel-loader", exclude: /node_modules/,
                    sideEffects: false
                },
                {
                    test: /\.scss/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {sourceMap: false, importLoaders: 1, minimize: true}
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                autoprefixer: {
                                    browsers: ["last 2 versions"]
                                },
                                plugins: () => [
                                    autoprefixer
                                ]
                            },
                        },
                        'sass-loader'
                    ]
                },
                {test: /\.(png|svg|jpg)$/, use: 'file-loader?name=./images/[name].[ext]'}
            ]
        },
        devtool: '(none)',
        devServer: {
            port: process.env.PORT || 7102,
            host: 'localhost',
            publicPath: '/',
            // contentBase: path.join(__dirname, "build"),
            historyApiFallback: true,
            open: true,
            openPage: '',
            proxy: {
                // OPTIONAL: proxy configuration:
                // '/optional-prefix/**': { // path pattern to rewrite
                //   target: 'http://target-host.com',
                //   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
                // }
            }
        },
        watch: false
    }
}