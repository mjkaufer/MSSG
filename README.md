# MSSG

Meteor Static Site Generator - Node module to render meteor routes as HTML, using PhantomJS

## How it Works

In the config file, you give MSSG a bunch of routes. MSSG iterates over those routes, gets the page with PhantomJS, waits for a little bit so Phantom renders any potential JavaScript, and then saves the HTML to an appropriate file structure.

As of yet, there is nothing that makes it Meteor specific - it would work with any site with routes - so the title is a bit of a misnomer. However, someone took `ssg` on npm already.

## Installation

* Install phantomjs
* Install MSSG from npm with `npm install mssg`
	* To use MSSG through the command line, make sure you install globally with `npm install -g mssg`
		* Sometimes the global install doesn't work - I've had this problem on OSX. If this is the case, just install mssg locally, and run the commands in the local folder.

## Usage

MSSG can be used through the command line, or within node

### Command Line

`MSSG render configFile.json`

### With Node

```JavaScript

var mssg = require('mssg');
mssg.render('configFile.json');

```

`configFile.json` references the location of your configuration file. Check out the one in the repo for an example of what you should include. Make sure you have a config file, or else you'll break the program.


## Contributing

Just send a pull request! Check the Todo right below for things we need.

## Todo

* Add callbacks
* Testing
* Better error logging