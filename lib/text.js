;(function() {
  'use strict'

  function text(txt) {
    if(!arguments.length && this.length) {
      return this.dom[0].textContent !== undefined
        ? this.dom[0].textContent : this.dom[0].innerText;
    }
    txt = txt || '';
    this.dom.forEach(function(el) {
      el.textContent = el.innerText = txt;
    });
    return this;
  }

  module.exports = function(conf) {
    conf.proto.text = text;
  }
})();
