;(function() {
  'use strict'

  /**
   *  Remove all matched elements.
   */
  function remove() {
    this.dom.forEach(function(el) {
      if(el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    return this;
  }

  function plugin(conf) {
    conf.proto.remove = remove;
  }

  module.exports = plugin;
})();
