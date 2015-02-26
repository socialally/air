;(function() {
  'use strict'

  var main;

  /**
   *  Get the children of each element in the set of matched elements.
   */
  function children() {
    var arr = [];
    this.each(function(el) {
      arr = arr.concat(Array.prototype.slice.call(el.childNodes));
    });
    return main(arr);
  }

  module.exports = function(conf) {
    main = conf.main;
    conf.proto.children = children;
  }
})();
