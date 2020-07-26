var wizard = exports,
    fs = require('fs');

wizard.cli = require('./wizard/cli');

//
// Simple wrapper for loading JSON-schema files from a path
//
wizard.load = function (path) {
  var schema = JSON.parse(fs.readFileSync(path, {encoding: 'utf-8'}));
  return schema;
};

/**
 * @description Loads and schema from its path and runs the cli
 * @param string path 
 * @param function callback 
 */
wizard.loadAndRun = function (path, callback) {
  wizard.cli.run(wizard.load(path));
}