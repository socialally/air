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
    this.each(function(el) {
      el.innerHTML = markup;
    });
    return this;
  }

  module.exports = function() {
    this.html = html;
  }
})();
