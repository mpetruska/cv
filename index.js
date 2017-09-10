"use strict";

var buildSteps = require('./metalsmith-build').buildSteps;

buildSteps
  .build(function(err, files) {
    if (err) { throw err; }
  });
