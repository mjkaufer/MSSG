# MSSG
Meteor Static Site Generator - Node module to render meteor routes as HTML, using PhantomJS

## Installation

* Install phantomjs
* Install MSSG from npm with `npm install mssg`
	* To use MSSG through the command line, make sure you install globally with `npm install -g mssg`

## Usage

MSSG can be used through the command line, or within node

### Command Line

`MSSG render configFile.json`

### With Node

```JavaScript

var mssg = require('mssg');
mssg.render('configFile.json');

```

`configFile.json` references the location of your configuration file. Check out the one in the repo for an example of what you should include.

## Todo

* Add callbacks
* Testing


