var path = require('path');

exports.config = {
  //directConnect: true,

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  //specs: [
  //  'example_spec.js'
  //],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        $CHROME_OPTIONS
      ]
    }
  },

  onPrepare: function() {
    $PREPARE
  }
};