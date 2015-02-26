;(function() {
  'use strict'

  /**
   *  Remove the inner HTML from all matched elements.
   */
  function empty() {
    this.dom.forEach(function(el) {
      el.innerHTML = '';
    });
    return this;
  }

  function plugin(conf) {
    conf.proto.empty = empty;
  }

  module.exports = plugin;
})();
