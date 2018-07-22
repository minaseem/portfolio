/**
 * Created by imamudinnaseem on 7/18/18
 */


var path = require('path');


module.exports = {
    entry: {
        "sw": path.resolve(__dirname + "/../src/worker/sw")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname + "/../docs/")
    },
    module: {
        rules: [
            {test: /\.ts?$/, loader: "ts-loader"},
            {
                test: /\.js$/, use: "babel-loader", exclude: /node_modules/,
                sideEffects: false
            }
        ]
    },
    devtool: "(none)",
    watch: false
};