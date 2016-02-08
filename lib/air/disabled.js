var attr = 'disabled';

/**
 *  Toggles the diabled attribute on an element.
 *
 *  A typical css rule might be:
 *
 *  [disabled]{pointer-events: none; opacity: 0.8;}
 */
function disabled(val) {
  // return whether the first element in the set
  // is hidden
  if(val === undefined) {
    return this.attr(attr);
  // hide on truthy
  }else if(val) {
    this.attr(attr, '1');
  // show on falsey
  }else{
    this.attr(attr, null);
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
