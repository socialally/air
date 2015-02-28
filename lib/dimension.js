/**
 *  Get the current computed inner width (including padding but not border)
 *  for the first element in the set of matched elements or set the inner
 *  width of every matched element.
 */
function innerWidth(num) {
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

/**
 *  Get the current computed inner height (including padding but not border)
 *  for the first element in the set of matched elements or set the inner
 *  height of every matched element.
 */
function innerHeight(num) {
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

/**
 *  Get the current computed width for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerWidth(num) {
  var s, style;
  if(!this.length) {
    return null;
  }
  if(num === undefined || num === true) {
    s = this.dom[0].getClientRects()[0].width;
    // not including margin
    if(num === undefined) {
      style = window.getComputedStyle(this.dom[0], null);
      s -= parseInt(style.getPropertyValue('margin-top'));
      s -= parseInt(style.getPropertyValue('margin-bottom'));
    }
    return s;
  }
  // TODO: set element(s) width
  return this;
}

/**
 *  Get the current computed height for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerHeight(num) {
  var s, style;
  if(!this.length) {
    return null;
  }
  if(num === undefined || num === true) {
    s = this.dom[0].getClientRects()[0].height;
    // not including margin
    if(num === undefined) {
      style = window.getComputedStyle(this.dom[0], null);
      s -= parseInt(style.getPropertyValue('margin-top'));
      s -= parseInt(style.getPropertyValue('margin-bottom'));
    }
    return s;
  }
  // TODO: set element(s) height
  return this;
}

/**
 *
 */
function width(num) {
  var style;
  if(!this.length) {
    return this;
  }
  if(num === undefined) {
    //console.log(this.dom[0].getClientRects())
    style = window.getComputedStyle(this.dom[0], null);
    return parseInt(style.getPropertyValue('width'));
  }
  // TODO: set element(s) width
  return this;
}

/**
 *
 */
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

  this.outerWidth = outerWidth;
  this.outerHeight = outerHeight;
}
