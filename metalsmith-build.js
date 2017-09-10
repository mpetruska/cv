"use strict";

var Metalsmith  = require('metalsmith');
var jade        = require('metalsmith-jade');
var ignore      = require('metalsmith-ignore');

var outputDir   = './public';

var buildSteps =
  Metalsmith(__dirname)
    .source('./src')
    .destination(outputDir)
    .clean(true)
    .use(ignore('!index.jade'))
    .use(jade({
      pretty: true,
    }));

module.exports = {
  buildSteps: buildSteps
}
