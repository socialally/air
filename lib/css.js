// TODO: return from window.getComputedStyle() so that
// TODO: this method also retrieves styles declared in stylesheets

function css(key, val) {
  var style, props;
  if(!this.length) {
    return this;
  }

  if(typeof key === 'object') {
    props = key;
  }else if(key && val) {
    props = {};
    props[key] = val;
  }

  // get style object
  if(key === undefined) {
    style = window.getComputedStyle(this.dom[0], null);
    // TODO: convert to plain object map
    //console.log(style);
    return style;
  // get single style property value
  }else if(typeof key === 'string' && !val) {
    style = window.getComputedStyle(this.dom[0], null);
    return style.getPropertyValue(key);
  }

  // set inline styles
  this.each(function(el) {
    el.style = el.style || {};
    for(var z in props) {
      el.style[z] = props[z];
    }
  });
  return this;
}

module.exports = function() {
  this.css = css;
}
