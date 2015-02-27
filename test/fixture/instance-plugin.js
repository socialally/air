;(function() {
  "use strict"

  /**
   *  Mock instance method.
   */
  function method(el) {
    return this;
  }

  module.exports = function plugin() {
    this.method = method;
  }
})();
