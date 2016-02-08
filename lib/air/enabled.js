var className;

/**
 *  Toggles a class on an element to enable or disable the element.
 *
 *  Default className is `disabled`.
 *
 *  A typical css rule might be:
 *
 *  .disabled{pointer-events: none; opacity: 0.8;}
 */
function enabled(val) {
  return (val ? this.removeClass(className) : this.addClass(className));
}

/**
 *  Enable the element.
 */
function enable() {
  return this.enabled(true);
}

/**
 *  Disable the element.
 */
function disable() {
  return this.enabled(false);
}

// requires class plugin
module.exports = function(conf) {
  conf = conf || {}
  className = conf.className || 'disabled';
  this.enabled = enabled;
  this.enable = enable;
  this.disable = disable;
}
