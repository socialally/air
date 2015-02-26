;(function() {
  "use strict"

  var config;

  /**
   *  Mock instance method with runtime configuration object.
   */
  function method() {
    return config;
  }

  module.exports = function plugin(opts, conf) {
    config = conf;
    opts.proto.method = method;
  }
})();
