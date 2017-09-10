"use strict";

var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');

var buildSteps = require('./metalsmith-build').buildSteps;

buildSteps
  .use(watch({
    paths: {
      "${source}/**/*": true
    },
    livereload: false
  }))
  .use(serve({
    port: 4000,
    verbose: true
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
