;(function() {
  'use strict'

  var main;

  /**
   *  Append content to every matched element.
   */
  function append(el) {
    var dom = main(el).dom;
    // matched parent elements
    this.dom.forEach(function(node) {
      // matched elements to insert
      dom.forEach(function(ins) {
        // must clone otherwise only the last matched
        // element will receive the appended element
        node.appendChild(ins.cloneNode(true));
      })
    });
    return this;
  }

  module.exports = function(conf) {
    main = conf.main;
    conf.proto.append = append;
  }
})();
