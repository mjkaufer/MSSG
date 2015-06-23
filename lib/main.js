#! /usr/bin/env node

var common = require('./common.js')

var exports = module.exports = {};

exports.render = function(configFile){
	common.render(configFile)
}
if(process.argv.length == 1){//referenced through require, not via command line
	return 
}


if(process.argv.length < 3 || process.argv[2] != "render")
	return console.log("Usage: `mssg render mssg-config.json` to render")

common.render(process.argv[3] || "mssg-config.json")

