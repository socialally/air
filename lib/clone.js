/**
 *  Create a deep copy of the set of matched elements.
 */
function clone() {
  var arr = [];
  this.each(function(el) {
    arr.push(el.cloneNode(true));
  });
  return this.air(arr);
}

module.exports = function() {
  this.clone = clone;
}
