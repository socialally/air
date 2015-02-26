;(function() {
  'use strict'

  /**
   *  Get the HTML of the first matched element or set the HTML
   *  content of all matched elements.
   */
  function html(markup) {
    if(!this.length) {
      return this;
    }
    if(markup === undefined) {
      return this.dom[0].innerHTML;
    }
    this.dom.forEach(function(el) {
      el.innerHTML = markup;
    });
    return this;
  }

  function plugin(conf) {
    conf.proto.html = html;
  }

  module.exports = plugin;
})();
