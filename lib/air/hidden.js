var attr = 'hidden';

/**
 *  Modify the hidden attribute.
 */
function hidden(val) {
  if(val || !arguments.length) {
    this.attr(attr, '1');
  }else{
    this.attr(attr, null);
  }
  return this;
}

function show() {
  return this.hidden(false);
}

function hide() {
  return this.hidden(true);
}

module.exports = function() {
  this.hidden = hidden;
  this.show = show;
  this.hide = hide;
}
