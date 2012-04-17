var wizard = exports,
    revalidator = require('revalidator'),
    prompt = require('prompt'),
    fs = require('fs');

//
// Simple wrapper for loading JSON-schema files from a path
//
wizard.load = function (path) {
  var schema = JSON.parse(fs.readFileSync(path).toString());
  return schema;
};

//
// Runs through a CLI prompting wizard based on incoming JSON-schema
//
wizard.run = function (schema, callback) {

  //
  // Slight formatting hack for prompt library / JSON-schema
  //
  // See: https://github.com/flatiron/prompt/issues/29
  var promptProperties = [];
  Object.keys(schema.properties).forEach(function(prop){
    schema.properties[prop].name = prop;
    promptProperties.push(schema.properties[prop]);
  });

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: email, password
  //
  prompt.get(promptProperties,callback);

};