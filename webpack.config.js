/**
 * Created by imamudinnaseem on 6/5/18
 */

var config = require("config");
var webpack = require("webpack");
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV || 'production'//'development';

const CSS_SOURCE_MAPS = ENV !== 'production';
module.exports = Object.assign({}, config.get("webpack"));
