/**
 *  Get the current computed inner width (including padding but not border)
 *  for the first element in the set of matched elements.
 */
function innerWidth() {
  var style;
  if(!this.length) {
    return null;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('width'));
}

/**
 *  Get the current computed inner height (including padding but not border)
 *  for the first element in the set of matched elements.
 */
function innerHeight() {
  var style;
  if(!this.length) {
    return null;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('height'));
}

/**
 *  Get the current computed width for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerWidth(margin) {
  var s, style;
  if(!this.length) {
    return null;
  }
  s = this.dom[0].getClientRects()[0].width;
  if(!margin) {
    style = window.getComputedStyle(this.dom[0], null);
    s -= parseInt(style.getPropertyValue('margin-top'));
    s -= parseInt(style.getPropertyValue('margin-bottom'));
  }
  return s;
}

/**
 *  Get the current computed height for the first element in the set of
 *  matched elements, including padding, border, and optionally margin.
 *
 *  Returns a number (without "px") representation of the value or null
 *  if called on an empty set of elements.
 */
function outerHeight(margin) {
  var s, style;
  if(!this.length) {
    return null;
  }
  s = this.dom[0].getClientRects()[0].height;
  if(!margin) {
    style = window.getComputedStyle(this.dom[0], null);
    s -= parseInt(style.getPropertyValue('margin-top'));
    s -= parseInt(style.getPropertyValue('margin-bottom'));
  }
  return s;
}

/**
 *
 */
function width() {
  var style;
  if(!this.length) {
    return null;
  }
  if(typeof window !== 'undefined' && this.dom[0] === window) {
    return this.dom[0].innerWidth;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('width'));
}

/**
 *
 */
function height() {
  var style;
  if(!this.length) {
    return null;
  }
  if(typeof window !== 'undefined' && this.dom[0] === window) {
    return this.dom[0].innerHeight;
  }
  style = window.getComputedStyle(this.dom[0], null);
  return parseInt(style.getPropertyValue('height'));
}

module.exports = function() {
  this.width = width;
  this.height = height;

  this.outerWidth = outerWidth;
  this.outerHeight = outerHeight;

  this.innerWidth = innerWidth;
  this.innerHeight = innerHeight;
}
