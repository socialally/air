;(function() {
  'use strict'

  var main;

  /**
   *  Create a deep copy of the set of matched elements.
   */
  function clone() {
    var arr = [];
    this.dom.forEach(function(el) {
      arr.push(el.cloneNode(true));
    });
    return main(arr);
  }

  module.exports = function(conf) {
    main = conf.main;
    conf.proto.clone = clone;
  }
})();
