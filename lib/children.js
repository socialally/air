/**
 *  Get the children of each element in the set of matched elements.
 */
function children(selector) {
  var arr = [];
  this.each(function(el) {
    arr = arr.concat(Array.prototype.slice.call(el.childNodes));
  });
  return this.air(arr);
}

// TODO: allow filtering by selector

module.exports = function() {
  this.children = children;
}
