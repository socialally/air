;(function() {
  'use strict'

  /**
   *  Append content to every matched element.
   */
  function append(el) {
    var $ = this.air;
    // matched parent elements
    this.each(function(node) {
      // matched elements to insert
      $(el).each(function(ins) {
        // must clone otherwise only the last matched
        // element will receive the appended element
        node.appendChild(ins.cloneNode(true));
      })
    });
    return this;
  }

  module.exports = function(conf) {
    this.append = append;
  }
})();
