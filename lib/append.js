;(function() {
  "use strict"

  var main;

  /**
   *  Append content to every matched element.
   */
  function append(el) {
    var dom = main(el).dom;
    // matched parent elements
    this.dom.forEach(function(el) {
      // matched elements to insert
      dom.forEach(function(ins) {
        // must clone otherwise only the last matched
        // element will receive the appended element
        el.appendChild(ins.cloneNode(true));
      })
    });
    return this;
  }

  function plugin(conf) {
    main = conf.main;
    conf.proto.append = append;
  }

  module.exports = plugin;
})();
