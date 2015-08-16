/* To enable the JSX transforms, we need to add a simple preprocessor file to run
   JSX over our source and test files using react-tools when they're required. */

var ReactTools = require('react-tools');

module.exports = {
  process: function(src) {
    return ReactTools.transform(src);
  }
};