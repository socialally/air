;(function() {
  'use strict'

  function css(props) {
    if(!arguments.length && this.length) {
      return this.dom[0].style;
    }
    this.dom.forEach(function(el) {
      el.style = el.style || {};
      for(var z in props) {
        el.style[z] = props[z];
      }
    });
    return this;
  }

  module.exports = function(conf) {
    conf.proto.css = css;
  }
})();
