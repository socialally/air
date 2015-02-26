;(function() {
  'use strict'

  /**
   *  Remove the inner HTML from all matched elements.
   */
  function empty() {
    this.each(function(el) {
      el.innerHTML = '';
    });
    return this;
  }

  module.exports = function(conf) {
    conf.proto.empty = empty;
  }
})();
