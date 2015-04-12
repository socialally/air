var attr = 'hidden';

/**
 *  Modify the hidden attribute.
 */
function hidden(val) {
  // return whether the first element in the set
  // is hidden
  if(val === undefined) {
    return this.attr(attr) !== undefined;
  // hide on truthy
  }else if(val) {
    this.attr(attr, '1');
  // show on falsey
  }else{
    this.attr(attr, null);
  }
  return this;
}

function show(fn) {
  if(typeof fn === 'function') {
    fn.call(this);
  }
  return this.hidden(false);
}

function hide(fn) {
  if(typeof fn === 'function') {
    return fn.call(this, this.hidden.bind(this, true));
  }
  return this.hidden(true);
}

module.exports = function() {
  this.hidden = hidden;
  this.show = show;
  this.hide = hide;
}
