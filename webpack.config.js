/**
 * Created by imamudinnaseem on 6/5/18
 */

var config = require("config");
var swConfig = require("./config/swConfig");

module.exports = [Object.assign({}, config.get("webpack")), swConfig];
