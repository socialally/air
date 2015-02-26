;(function() {
  'use strict'

  function on(nm, cb, capture) {
    this.dom.forEach(function(el) {
      el.addEventListener(nm, cb, capture);
    });
    return this;
  }

  function off(nm, cb, capture) {
    this.dom.forEach(function(el) {
      el.removeEventListener(nm, cb, capture);
    });
    return this;
  }

  module.exports = function(conf) {
    conf.proto.on = on;
    conf.proto.off = off;
  }
})();
