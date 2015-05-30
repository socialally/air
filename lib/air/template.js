var $
  , slice = Array.prototype.slice;

/**
 *  Get a map of template elements.
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

module.exports = function() {
  $ = this.air;
  this.air.template = template;
  this.air.partial = partial;
}
