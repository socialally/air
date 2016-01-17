/**
 *  Get the parent of each element in the current set of matched elements,
 *  optionally filtered by a selector.
 *
 *  TODO: implement selector filtering
 */
function parent(/*selector*/) {
  var arr = [], $ = this.air, slice = this.slice;
  this.each(function(el) {
    arr = arr.concat(slice.call($(el.parentNode).dom));
  });
  return $(arr);
}

module.exports = function() {
  this.parent = parent;
}
