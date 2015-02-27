function width(num) {
  var style;
  if(!this.length) {
    return this;
  }
  if(num === undefined) {
    style = window.getComputedStyle(this.dom[0], null);
    return parseInt(style.getPropertyValue('width'));
  }
  // TODO: set element(s) width
  return this;
}

function height(num) {
  var style;
  if(!this.length) {
    return this;
  }
  if(num === undefined) {
    style = window.getComputedStyle(this.dom[0], null);
    return parseInt(style.getPropertyValue('height'));
  }
  // TODO: set element(s) height
  return this;
}

module.exports = function() {
  this.width = width;
  this.height = height;
}
