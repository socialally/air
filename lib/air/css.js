/**
 *  Get the value of a computed style property for the first element
 *  in the set of matched elements or set one or more CSS properties
 *  for every matched element.
 */
function css(key, val) {
  var style, props;
  if(!this.length) {
    return this;
  }

  if(key && typeof key === 'object') {
    props = key;
  }else if(key && val) {
    props = {};
    props[key] = val;
  }

  // get style object
  if(key === undefined) {
    style = window.getComputedStyle(this.dom[0], null);
    // TODO: convert to plain object map?
    // for the moment return CSSStyleDeclaration
    return style;
  // get single style property value
  }else if(typeof key === 'string' && !val) {
    style = window.getComputedStyle(this.dom[0], null);
    return style.getPropertyValue(key);
  }

  // set inline styles
  this.each(function(el) {
    el.style = el.style;
    for(var z in props) {
      el.style[z] = '' + props[z];
    }
  });
  return this;
}

module.exports = function() {
  this.css = css;
}
