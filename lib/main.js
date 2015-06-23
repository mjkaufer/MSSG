#! /usr/bin/env node

if(process.argv.length < 3 || process.argv[2] != "render")
	return console.log("Usage: `ssg render` to render")

var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
var path = require('path')

var childArgs = [
	path.join(__dirname, 'phantom-script.js')
]

console.log("Starting rendering...")
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
	if(err)
		console.log(err)
	if(stdout)
		console.log(stdout)
	if(stderr)
		console.log(stderr)
})