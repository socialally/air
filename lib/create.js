/**
 *  Create a DOM element.
 *
 *  @param tag The element tag name.
 */
function create(tag) {
  return document.createElement(tag);
}

/**
 *  Create a wrapped DOM element.
 *
 *  @param tag The element tag name.
 *  @param attrs Object map of element attributes.
 */
function el(tag, attrs) {
  var n = el.air(create(tag));
  if(attrs && n.attr) {
    return n.attr(attrs);
  }
  return n;
}

module.exports = function() {
  // static method needs access to main function
  // to wrap the created element
  el.air = this.main;

  this.main.create = create;
  this.main.el = el;
}

// optional `attr` dependency
//plugin.deps = {attr: false};
