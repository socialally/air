;(function() {
  "use strict"

  /**
   *  IE9 does not support `Element.classList`, when support for IE9 is
   *  dropped this can be refactored.
   */
  var attr = 'class';

  /**
   *  Adds the specified class(es) to each of the set of matched elements.
   */
  function addClass(className) {
    if(!className) return this;
    var classes = className.split(/\s+/);
    this.dom.forEach(function(el) {
      var val = el.getAttribute(attr);
      var names = val ? val.split(/\s+/) : [];
      classes.forEach(function(nm) {
        if(!~names.indexOf(nm)) {
          names.push(nm);
        }
      })
      el.setAttribute(attr, names.join(' '));
    })
    return this;
  }

  /**
   *  Determine whether any of the matched elements are assigned the
   *  given class.
   */
  function hasClass(className) {
    var i, val;
    for(i = 0;i < this.length;i++) {
      val = this.get(i).getAttribute(attr);
      val = val ? val.split(/\s+/) : [];
      if(~val.indexOf(className)) {
        return true;
      }
    }
    return false;
  }

  /**
   *  Remove a single class, multiple classes, or all classes from
   *  each element in the set of matched elements.
   */
  function removeClass(className) {
    if(!className) return this;
    var classes = className.split(/\s+/);
    this.dom.forEach(function(el) {
      var val = el.getAttribute(attr);
      var names = val ? val.split(/\s+/) : [];
      names = names.filter(function(nm) {
        return ~classes.indexOf(nm) ? false : nm;
      })
      el.setAttribute(attr, names.join(' '));
    })
    return this;
  }

  function plugin(conf) {
    conf.proto.addClass = addClass;
    conf.proto.hasClass = hasClass;
    conf.proto.removeClass = removeClass;
  }

  module.exports = plugin;
})();
