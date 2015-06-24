#! /usr/bin/env node

var common = require('../lib/common.js')

if(process.argv.length < 3 || process.argv[2] != "render")
	usage()
else if(!process.argv[3]){
	usage()
	console.log("Specify a config file!")
}
else
	common.render(process.argv[3])

function usage(){
	console.log("Usage: `mssg render mssg-config.json` to render")
}