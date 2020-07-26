var wizard = exports,
    fs = require('fs');

wizard.cli = require('./wizard/cli');

//
// Simple wrapper for loading JSON-schema files from a path
//
wizard.load = function (path) {
  var schema = JSON.parse(fs.readFileSync(path).toString());
  return schema;
};