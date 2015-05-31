/**
 *  Get the current value of the first element in the set of
 *  matched elements or set the value of every matched element.
 */
function val(value) {
  var first = this.get(0);
  if(value === undefined && first) {
    return first.value;
  }else if(value) {
    this.each(function(el) {
      el.value = value;
    })
  }
  return this;
}

module.exports = function() {
  this.val = val;
}
