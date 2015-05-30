var $
  , slice = Array.prototype.slice;

/**
 *  Get a map of template elements.
 *
 *  Source object is id => selector,
 *  target object is id => elements(s).
 */
function template(source, target) {
  source = source || {};
  target = target || {};
  for(var z in source) {
    target[z] = $.partial(source[z]);
  }
  return target;
}

/**
 *  Find all template element(s) by selector.
 */
function partial(selector) {
  var templates = $('template')
    , context
    , arr = [];
  templates.each(function(el) {
    context = el && el.content ? el.content : el;
    arr = arr.concat(slice.call($(selector, context).dom));
  })
  return $(arr);
}

/**
 *  Swap a source list of element's with a target list of element's.
 *
 *  The target elements are cloned as they should be template partials, the
 *  source element(s) should exist in the DOM.
 */
function swap(source, target) {
  // wrap to allow string selectors, arrays etc.
  source = $(source);
  target = $(target);
  source.each(function(el, index) {
    var content = target.get(index);
    if(el.parentNode && content) {
      // deep clone template partial
      content = content.cloneNode(true);
      // replace sourc element with cloned target element
      el.parentNode.replaceChild(content, el);
    }
  })
}

module.exports = function() {
  $ = this.air;
  this.air.template = template;
  this.air.partial = partial;
  this.air.swap = swap;
}
