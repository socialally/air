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
  var n = this.air(create(tag));
  if(attrs && n.attr) {
    return n.attr(attrs);
  }
  return n;
}

module.exports = function() {
  this.air.create = create;
  this.air.el = el;
}

// optional `attr` dependency
//plugin.deps = {attr: false};
