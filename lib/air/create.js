/**
 *  Create a DOM element.
 *
 *  @param tag The element tag name.
 */
function create(tag) {
  return document.createElement(tag);
}

/**
 *  Create a text node.
 *
 *  @param txt The text for the node.
 */
function text(txt) {
  return document.createTextNode(txt);
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
  el.air = this.air;

  this.air.create = create;
  this.air.el = el;
  this.air.text = text;
}

// optional `attr` dependency
//plugin.deps = {attr: false};
