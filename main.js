var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
var path = require('path')

var childArgs = [
	path.join(__dirname, 'phantom-script.js')
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
	if(err)
		console.log(err)
	if(stdout)
		console.log(stdout)
	if(stderr)
		console.log(stderr)
})