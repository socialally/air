;(function() {
  'use strict'

  /**
   *  Get the children of each element in the set of matched elements.
   */
  function children() {
    var arr = [];
    this.each(function(el) {
      arr = arr.concat(Array.prototype.slice.call(el.childNodes));
    });
    return this.air(arr);
  }

  module.exports = function() {
    this.children = children;
  }
})();
