"use strict";

var Metalsmith  = require('metalsmith');
var jade        = require('metalsmith-pug');
var remove      = require('@metalsmith/remove');

var outputDir   = './build';

var buildSteps =
  Metalsmith(__dirname)
    .source('./src')
    .destination(outputDir)
    .clean(true)
    .use(remove(['!{index,mark-petruska,mark-petruska_printable}.pug']))
    .use(jade({
      pretty: true,
    }));

module.exports = {
  buildSteps: buildSteps
}
