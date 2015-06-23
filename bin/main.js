#! /usr/bin/env node

var common = require('../lib/common.js')

if(process.argv.length < 3 || process.argv[2] != "render")
	return console.log("Usage: `mssg render mssg-config.json` to render")
else
	common.render(process.argv[3] || "mssg-config.json")
