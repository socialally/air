var className = 'disabled';

/**
 *  Toggles the disabled class on an element.
 *
 *  A typical css rule might be:
 *
 *  .disabled{pointer-events: none; opacity: 0.8;}
 */
function disabled(val) {
  // return whether the first element in the set
  // is hidden
  if(val === undefined) {
    return this.hasClass(className);
  // hide on truthy
  }else if(val) {
    this.addClass(className);
  // show on falsey
  }else{
    this.removeClass(className);
  }
  return this;
}

function enable() {
  return this.disabled(false);
}

function disable() {
  return this.disabled(true);
}

module.exports = function() {
  this.disabled = disabled;
  this.enable = enable;
  this.disable = disable;
}
