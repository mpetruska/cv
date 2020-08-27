"use strict";

var Metalsmith  = require('metalsmith');
var jade        = require('metalsmith-jade');
var ignore      = require('metalsmith-ignore');

var outputDir   = './build';

var buildSteps =
  Metalsmith(__dirname)
    .source('./src')
    .destination(outputDir)
    .clean(true)
    .use(ignore(['*', '!{index,mark-petruska,mark-petruska_printable}.jade']))
    .use(jade({
      pretty: true,
    }));

module.exports = {
  buildSteps: buildSteps
}
