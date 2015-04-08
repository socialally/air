/**
 *  Reduce the set of matched elements to the first in the set.
 */
function first() {
  this.dom = this.dom.slice(0, 1);
  return this;
}

module.exports = function() {
  this.first = first;
}
