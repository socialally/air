;(function() {
  'use strict'

  var main;

  /**
   *  Append content to every matched element.
   */
  function append(el) {
    // matched parent elements
    this.each(function(node) {
      // matched elements to insert
      main(el).each(function(ins) {
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
