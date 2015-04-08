'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var karma = require('karma').server;

//////////////////////////////
// Internal Vars
//////////////////////////////
var karmaOptions = {
  configFile: __dirname + '/karma.conf.js',
  singleRun: true
}

karma.start(karmaOptions);
