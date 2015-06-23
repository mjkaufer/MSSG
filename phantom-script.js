var fs = require('fs')
var config = fs.read('config.json')
var configObj = JSON.parse(config)

configObj.scripts = configObj.scripts || []
configObj.css = configObj.css || []
configObj.renderTime = configObj.renderTime || 500
configObj.outputDir = configObj.outputDir || "rendered/"
configObj.url = configObj.url || "http://localhost"
configObj.port = configObj.port || 3000

if(!fs.isDirectory(configObj.outputDir))
	fs.makeDirectory(configObj.outputDir)

handleRoute(0)

function handleRoute(index){
	var page = require('webpage').create();
	var route = configObj.routes[index]
	page.open(configObj.url + ":" + configObj.port + configObj.routes[index], function () {
	    
		setTimeout(function(){

			var body = page.evaluate(function(){
				return document.getElementsByTagName('body')[0].innerHTML
			})

			var outputLocation = fileName(route)

			fs.write(outputLocation, assembleHTMLFile(configObj.scripts, configObj.css, body), "w")

			if(index + 1 == configObj.routes.length){
				console.log("Done - files saved to " + configObj.outputDir)
				return phantom.exit()
			}

			handleRoute(index + 1)

		}, configObj.renderTime)

	});
}

function makeHead(scriptSrcArray, cssSrcArray){
	return "<head>\n" + makeScriptTags(scriptSrcArray) + "\n" + makeLinkTags(cssSrcArray) + "</head>"
}

function makeLinkTags(cssSrcArray){
	var links = "";
	for(var i = 0; i < cssSrcArray.length; i++)
		links += '<link rel="stylesheet" type="text/css" href="' + cssSrcArray[i] + '" >\n'
	
	return links
}

function makeScriptTags(scriptSrcArray){
	var scripts = "";
	for(var i = 0; i < scriptSrcArray.length; i++)
		scripts += '<script type="text/javascript" src="' + scriptSrcArray[i] + '"></script>\n'
	
	return scripts
}

function assembleHTMLFile(scriptSrcArray, cssSrcArray, bodyHTML){
	var html = "<html>\n"
	html += makeHead(scriptSrcArray, cssSrcArray)
	html += "\n<body>\n" + bodyHTML + "\n</body>\n"
	html += "</html>"

	return html
}

function fileName(route){
	return configObj.outputDir + route.replace(/\//g, "_") + ".html"
}